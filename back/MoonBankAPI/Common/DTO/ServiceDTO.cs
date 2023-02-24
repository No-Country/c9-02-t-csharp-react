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
    public class ServiceDTO
    {
        [Required]
        public int IdService { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [JsonIgnore]
        public string ServiceUrlImage { get; set; }
    }
}
