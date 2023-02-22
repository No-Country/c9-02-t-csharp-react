using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class Transaction
    {
        [Key]
        public int IdTransaction { get; set; }

        [Required]
        [EnumDataType(typeof(TypeTransaction))]
        public TypeTransaction TypeTransaction { get; set; }

        [EnumDataType(typeof(TypeDeposit))]
        public TypeDeposit? TypeDeposit { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        [Column(TypeName = "DECIMAL(11,2)")]
        public decimal? Amount { get; set; }

        public int? IdSourceAccount { get; set; }

        public int? IdDestinationAccount { get; set; }

        public int? IdReward { get; set; }

        public int? IdService { get; set; }


        public virtual Account SourceAccount { get; set; }
        public virtual Account DestinationAccount { get; set; }
        public virtual Reward Reward { get; set; }
        public virtual Service Service { get; set; }

    }

    public enum TypeTransaction
    {
        Deposit,
        PayService,
        Transfer,
        Reward
    }

    public enum TypeDeposit
    {
        Cash,
        Paypal,
        Binance
    }
}
