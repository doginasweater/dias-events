namespace dias.events.Data.Platform {
    public class Location : Common {
        public string name { get; set; }

        public bool showmap { get; set; }

        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string province { get; set; }
        public string postalcode { get; set; }
        public string country { get; set; }

        public string colour { get; set; }
    }
}