using System.Collections.Generic;

namespace dias.events.Data.Platform {
    public class Question : Common {
        public string text { get; set; }
        public bool required { get; set; }
        public AnswerType type { get; set; }

        public Event parent { get; set; }
        public long eventid { get; set; }

        public FormEntry slot { get; set; }
        public long slotid { get; set; }
        
        public bool paid { get; set; }
        public Price price { get; set; }
        public long? priceid { get; set; }

        public TimeSlot time { get; set; }
        public long? timeslotid { get; set; }

        public Location location { get; set; }
        public long? locationid { get; set; }

        public ICollection<Dependency> dependencies { get; set; } = new List<Dependency>();
        public ICollection<Answer> answers { get; set; } = new List<Answer>();
    }
}