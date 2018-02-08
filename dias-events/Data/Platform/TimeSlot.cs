using System;

namespace dias.events.Data.Platform {
    public class TimeSlot : Common {
        public string name { get; set; }
        public string description { get; set; }

        public DateTime start { get; set; }
        public DateTime end { get; set; }
    }
}