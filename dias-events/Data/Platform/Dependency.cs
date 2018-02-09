using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public class Dependency : Common {
        public Question question { get; set; }
        public long questionid { get; set; }

        public string behaviour { get; set; }
    }
}
