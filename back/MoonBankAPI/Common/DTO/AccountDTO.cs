using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Common.DTO
{
    public class AccountDTO
    {
        [JsonIgnore]
        public int IdAccount { get; set; }
     
        public string Name { get; set; }

        
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        [JsonIgnore]
        public string Password { get; set; }

        public string Alias { get; set; }

        public string CBU_CVU { get; set; }
       
        public decimal? Balance { get; set; }
     
        public int RewardPoints { get; set; }

        public string AccountUrlImage { get; set; }
    }
}