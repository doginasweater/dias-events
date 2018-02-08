using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public class Coupon : Common {
        public string text { get; set; }
        public int maxuses { get; set; }

        public CouponType type { get; set; }

        public decimal value { get; set; }
        
        public Question question { get; set; }
        public long? questionid { get; set; }
    }
}
