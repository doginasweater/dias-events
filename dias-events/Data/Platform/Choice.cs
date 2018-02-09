using System.Collections.Generic;

namespace dias.events.Data.Platform {
    public class Choice : Common {
        public long submissionid { get; set; }
        public Submission submission { get; set; }

        public Question question { get; set; }
        public long questionid { get; set; }
        
        public AnswerType type { get; set; }

        // text responses
        public string text { get; set; }
        
        // checkboxes
        public ICollection<ChoiceAnswer> selections { get; set; } = new List<ChoiceAnswer>();
        
        // select boxes, radio buttons
        public Answer answer { get; set; }
        public long? answerid { get; set; }
    }
}