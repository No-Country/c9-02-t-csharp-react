using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using Contracts.Services;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class TransactionService : ITransactionService
    {
        private readonly MoonBankContext _context;
        private readonly ITransactionRepository transactionRepository;

        public TransactionService(MoonBankContext context, ITransactionRepository transactionRepository)
        {
            _context = context;
            this.transactionRepository = transactionRepository;
        }


        public ResponseDTO GetTransactionsHistory(TransactionDTO transactionDTO)
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = transactionRepository.GetTransactionsHistory(transactionDTO);
                response.Success = true;
            }
            catch (TransactionExceptions transactionException)
            {
                response.Message = transactionException.Message;
                response.Success = false;
            }
            catch
            {
                response.Success = false;
                response.Message = "An error occurred, we are sorry for what happened";
            }

            return response;
        }
    }
}
