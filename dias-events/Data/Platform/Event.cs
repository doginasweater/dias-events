using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public class Event : Common {
        public Event() {
            formentries = new HashSet<FormEntry>();
            questions = new HashSet<Question>();
            responses = new HashSet<Submission>();
        }

        public string name { get; set; }
        public string title { get; set; }
        public bool active { get; set; }
        public string slug { get; set; }
        public string description { get; set; }
        public Location location { get; set; }

        public DateTime activedate { get; set; }
        public DateTime deactivatedate { get; set; }
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
        public DateTime latedate { get; set; }

        public long organisationid { get; set; }
        public Organisation organisation { get; set; }

        public ICollection<FormEntry> formentries { get; set; }
        public ICollection<Question> questions { get; set; }
        public ICollection<Submission> responses { get; set; }
    }
}
