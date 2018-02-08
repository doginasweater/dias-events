using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dias_events.Controllers
{
    [Produces("application/json")]
    [Route("api/Behaviour")]
    public class BehaviourController : Controller
    {
        [HttpGet("")]
        public List<string> GetBehaviours() => new List<string> { "a", "b", "c" };
    }
}