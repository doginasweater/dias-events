using System;
using System.Collections.Generic;

namespace dias.events.Data.Platform {
    public class Submission : Common {
        public Submission() {
            answers = new HashSet<Choice>();
            coupons = new HashSet<Coupon>();
        }

        public string submitter { get; set; }
        public long eventid { get; set; }
        public ICollection<Choice> answers { get; set; }

        public decimal subtotal { get; set; }
        public decimal total { get; set; }

        public ICollection<Coupon> coupons { get; set; }

        public DateTime? paid { get; set; }
        public DateTime? cleared { get; set; }
    }
}