using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform
{
    public class Bootcamp : Common
    {
        public bool member { get; set; }

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

        public string camps { get; set; }
        
        public string coupon { get; set; }

        public decimal subtotal { get; set; }
        public decimal total { get; set; }

        public DateTime submitted { get; set; }
        public DateTime? paid { get; set; }
        public DateTime? cleared { get; set; }
    }
}