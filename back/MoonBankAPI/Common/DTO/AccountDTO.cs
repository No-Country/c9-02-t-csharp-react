using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.DTO
{
    public class AccountDTO
    {
            
        public int IdAccount { get; set; }
     
        public string Name { get; set; }

        
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        
        public string Alias { get; set; }

        
        public long CBU_CVU { get; set; }

        
        public decimal? Balance { get; set; }

        
        public int RewardPoints { get; set; }
    }
}