namespace dias_events.Models.DTOs {
    public class TotalRequest {
        public bool member { get; set; }
        public string intensives { get; set; }
        public string workshops { get; set; }
        public int manuscriptcritiques { get; set; }
        public int portfoliocritiques { get; set; }
        public string coupon { get; set; }
    }
}