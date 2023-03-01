using Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Services
{
    public interface ITransactionService
    {
        ResponseDTO GetTransactionsHistory(string CBU_CVU);

        ResponseDTO MakeTransaction(TransactionDTO transactionDTO);
    }
}
