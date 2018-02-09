using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dias.events.Models.DTOs;

namespace dias.events.Data.Platform {
    public class FormEntry : Common {
        public Event parent { get; set; }
        public long eventid { get; set; }

        public EntryType type { get; set; }
        public EntryState defaultstate { get; set; }
        public int page { get; set; }
        public int sortorder { get; set; }

        public Question question { get; set; }
    }
}
