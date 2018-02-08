using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public class Common {
        [Key]
        public long id { get; set; }

        public DateTime created { get; set; }
        public string createdby { get; set; }

        public DateTime modified { get; set; }
        public string modifiedby { get; set; }
    }
}
