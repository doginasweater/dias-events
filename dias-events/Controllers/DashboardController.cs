using Microsoft.AspNetCore.Mvc;
using dias_events.Data;
using OfficeOpenXml;
using System.Linq;

namespace dias_events.Controllers {
    [Route("/dashboard")]
    public class DashboardController : Controller {
        private readonly DiasContext _db;

        public DashboardController(DiasContext db) {
            _db = db;
        }

        [HttpGet("")]
        public IActionResult Index() => View();

        [HttpGet("/report")]
        public IActionResult GenReport() {
            return Json(new { thing = "thing" });
        }

        private void MakeReport() {
            var registrations = _db.StaticForms.ToList();

            using (var package = new ExcelPackage()) {

            }
        }
    }
}