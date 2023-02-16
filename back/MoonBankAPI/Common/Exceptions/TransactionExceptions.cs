using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Exceptions
{
    public class TransactionExceptions : Exception
    {
        public TransactionExceptions(string mensaje) : base(mensaje)
        {

        }
    }
}
