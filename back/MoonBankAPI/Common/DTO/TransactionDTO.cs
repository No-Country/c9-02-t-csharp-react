﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.Text.Json.Serialization;


namespace Common.DTO
{
    public class TransactionDTO
    {        
        public int IdTransaction { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        [Required]
        public TypeTransaction TypeTransaction { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public TypeDeposit? TypeDeposit { get; set; }

        [Required]
        public DateTime Date { get; set; } = DateTime.Now;

        public decimal? Amount { get; set; }

        public int? IdSourceAccount { get; set; }

        public int? IdDestinationAccount { get; set; }

        public string? SourceAccountCBU_CVU { get; set; }

        public string? DestinationAccountCBU_CVU { get; set; }

        public string? DestinationAccountAlias { get; set; }

        public int? IdService { get; set; }

        public int? IdReward { get; set; }
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
