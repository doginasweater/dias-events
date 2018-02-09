using System.Collections.Generic;

namespace dias.events.Data.Platform {
    public class Answer : Common {
        public Question question { get; set; }
        public int sortorder { get; set; }
        
        public string text { get; set; }
        public string value { get; set; }

        public bool paid { get; set; }
        public Price price { get; set; }
        public long? priceid { get; set; }

        public ICollection<ChoiceAnswer> selections { get; set; } = new List<ChoiceAnswer>();
    }
}