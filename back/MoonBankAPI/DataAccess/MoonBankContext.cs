using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace DataAccess
{
    public class MoonBankContext : DbContext
    {

        public MoonBankContext(DbContextOptions<MoonBankContext> options) : base(options) { }

        



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

        }

    }
}
