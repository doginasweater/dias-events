using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dias_events.Models;

namespace dias_events.Controllers {
    public class HomeController : Controller {
        public IActionResult Index() => View();
    }
}