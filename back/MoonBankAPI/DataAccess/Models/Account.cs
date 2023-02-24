using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Account
    {
        [Key]
        [Required]
        public int IdAccount { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(20)")]
        public string Password { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Alias { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(22)")]
        public string CBU_CVU { get; set; }

        [Required]
        [Column(TypeName = "DECIMAL(11,2)")]
        public decimal? Balance { get; set; }

        [Required]
        public int RewardPoints { get; set; }
    }
}
