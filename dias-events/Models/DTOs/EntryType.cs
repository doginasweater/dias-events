using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dias.events.Data.Platform {
    public enum EntryType {
        Header,
        Section,
        Separator,
        TextBlock,
        Question,
        Continue,
        Submit,
        Payment
    }
}
