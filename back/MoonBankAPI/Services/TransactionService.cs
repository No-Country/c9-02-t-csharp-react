﻿using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using Contracts.Services;
using DataAccess;
using DataAccess.Models;
using Repositories;
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
        private readonly ITransactionRepository _transactionRepository;

        public TransactionService(MoonBankContext context, ITransactionRepository transactionRepository)
        {
            _context = context;
            _transactionRepository = transactionRepository;
        }


        public ResponseDTO GetTransactionsHistory(string CBU_CVU)
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = _transactionRepository.GetTransactionsHistory(CBU_CVU);
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

        public ResponseDTO MakeTransaction(TransactionDTO transactionDTO)
        {
            try
            {
                _transactionRepository.MakeTransaction(transactionDTO);
                
                return new ResponseDTO
                {
                    Success = true,
                    Message = $"{transactionDTO.TypeTransaction} Successful."
                };
            }
            catch (TransactionExceptions ex)
            {
                return new ResponseDTO { Success = false, Message = ex.Message };
            }
            catch (Exception ex)
            {
                // Log the exception here
                return new ResponseDTO { Success = false, Message = "An error occurred while processing the transaction." };
            }
        }

    }
}
