using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Reward
    {
        [Key]
        public int IdReward { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(50)")]
        public string Name { get; set; }

        [Required]
        public int Points { get; set; }

        [Required]
        public string RewardUrlImage { get; set; }
    }

}
