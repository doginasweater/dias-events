using System;
using System.Collections.Generic;

namespace dias.events.Data.Platform {
    public class Submission : Common {
        public string submitter { get; set; }
        public long eventid { get; set; }
        public ICollection<Choice> answers { get; set; } = new List<Choice>();

        public decimal subtotal { get; set; }
        public decimal total { get; set; }

        public ICollection<Coupon> coupons { get; set; } = new List<Coupon>();

        public DateTime? paid { get; set; }
        public DateTime? cleared { get; set; }
    }
}