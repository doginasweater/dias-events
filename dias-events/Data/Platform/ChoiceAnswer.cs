namespace dias.events.Data.Platform {
    public class ChoiceAnswer {
        public long choiceid { get; set; }
        public Choice choice { get; set; }

        public long answerid { get; set; }
        public Answer answer { get; set; }
    }
}