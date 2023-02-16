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
    public class RewardDTO
    {
        [Required]
        public int IdReward { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Points { get; set; }

        [Required]
        public string RewardUrlImage { get; set; }
    }
}
