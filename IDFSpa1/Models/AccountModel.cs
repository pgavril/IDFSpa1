using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace IDFSpa.Models
{
    public class AccountModel
    {
        [JsonProperty(PropertyName = "id")]
        public long Id { get; set; }
        [JsonProperty(PropertyName = "customerId")]
        public long CustomerId { get; set; }
        [JsonProperty(PropertyName = "credit")]
        public double Credit { get; set; }
        [JsonProperty(PropertyName = "balance")]
        public double Balance { get; set; }
    }
}
