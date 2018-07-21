using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace IDFSpa.Models
{
    public class ClientAccountModel
    {
        [JsonProperty(PropertyName = "balance")]
        public double Balance;
        [JsonProperty(PropertyName = "credit")]
        public double Credit;
    }
}
