using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dias.events.Data.Platform;
using dias.events.Models;
using dias_events.Data;
using dias_events.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace dias_events.Controllers {
    [Produces("application/json")]
    [Route("api")]
    public class ApiController : Controller {
        private readonly ILogger _logger;
        private readonly Secrets _secrets;
        private readonly DiasContext _db;

        public ApiController(IOptions<Secrets> secrets, ILoggerFactory factory, DiasContext db) {
            _logger = factory.CreateLogger("All");
            _secrets = secrets.Value;
            _db = db; 
            _db.user = "v1";
        }

        [HttpPost("token")]
        public IActionResult GetToken() {
            try {
                return Json(new { env = _secrets.paypalenv, sandbox = _secrets.paypalsandbox, production = _secrets.paypalproduction });
            } catch (Exception ex) {
                _logger.LogCritical($"Failed to generate token: {ex.Message}");

                throw;
            }
        }

        [HttpPost("calctotal")]
        public IActionResult CalcTotal([FromBody] TotalRequest request) {
            (var subtotal, var total) = Calculate(request);

            return Json(new {
                subtotal,
                total
            });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModel request) {
            if (!ModelState.IsValid) {
                return BadRequest();
            }

            var registration = new Bootcamp {
                firstname = request.firstname,
                lastname = request.lastname,
                address1 = request.address1,
                address2 = request.address2,
                city = request.city,
                state = request.state,
                postalcode = request.postalcode,
                country = request.country,
                email = request.email,
                phone = request.phone,
                member = request.member == "yes",
                camps = request.camps,
                submitted = DateTime.Now,
                paid = DateTime.Now,
                coupon = request.coupon,
                badgename = request.badgename,
                cleared = DateTime.Now,
                created = DateTime.Now,
                modified = DateTime.Now
            };

            (var subtotal, var total) = Calculate(new TotalRequest {
                member = registration.member,
                coupon = registration.coupon,
                camps = registration.camps
            });

            registration.subtotal = subtotal;
            registration.total = total;

            _db.Bootcamps.Add(registration);
            _db.SaveChanges();

            return Json(true);
        }

        private (decimal subtotal, decimal total) Calculate(TotalRequest request) {
            var subtotal = 0.0m;

            if (!string.IsNullOrEmpty(request.camps)) {
                subtotal += request.member ? 75 : 100;
            }

            var total = subtotal;

            if (request.coupon.Trim().ToLower() == "price is mia") {
                total = 0;
            }

            if (request.coupon.Trim().ToLower() == "drop and give me 50") {
                total = subtotal / 2;
            }

            return (subtotal, total);
        }
    }
}