using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Service
    {
        [Key]
        public int IdAccountService { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "DECIMAL(11,2)")]
        public decimal Amount { get; set; }

        [Required]
        public string ServiceUrlImage { get; set; }
    }
}
