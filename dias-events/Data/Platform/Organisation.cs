using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public class Organisation : Common {
        public Organisation() => events = new HashSet<Event>();

        public string name { get; set; }
        public bool active { get; set; }
        public string description { get; set; }
        public string displaytitle { get; set; }

        public Location location { get; set; }
        public long? locationid { get; set; }

        public ICollection<Event> events { get; set; }
    }
}
