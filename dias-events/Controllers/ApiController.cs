using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Braintree;
using dias.events.Models;
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

        public ApiController(IOptions<Secrets> secrets, ILoggerFactory factory) {
            _logger = factory.CreateLogger("All");
            _secrets = secrets.Value;
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
        public IActionResult Register([FromBody] TotalRequest request) => Json(true);

        private (decimal subtotal, decimal total) Calculate(TotalRequest request) {
            var subtotal = 0.0m;

            if (!string.IsNullOrEmpty(request.workshops)) {
                subtotal += request.member ? 250 : 280;
            }

            if (!string.IsNullOrEmpty(request.intensives) && request.member) {
                subtotal += 250;
            }

            if (request.manuscriptcritiques > 0) {
                subtotal += (request.manuscriptcritiques * 60);
            }

            if (request.portfoliocritiques > 0) {
                subtotal += (request.portfoliocritiques * 60);
            }

            var total = subtotal;

            if (request.coupon.Trim().ToLower() == "make it free") {
                total = 0;
            }

            if (request.coupon.Trim().ToLower() == "slice in twain") {
                total = subtotal / 2;
            }

            return (subtotal, total);
        }
    }
}