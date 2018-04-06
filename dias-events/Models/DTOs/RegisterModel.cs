namespace dias_events.Models.DTOs {
    public class RegisterModel {
        public string member { get; set; }

        public string firstname { get; set; }
        public string lastname { get; set; }
        public string badgename { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string postalcode { get; set; }
        public string country { get; set; }
        public string email { get; set; }
        public string phone { get; set; }

        public string workshops { get; set; }
        public string intensives { get; set; }
        
        public int manuscriptcritiques { get; set; }
        public int portfoliocritiques { get; set; }

        public string coupon { get; set; }
    }
}