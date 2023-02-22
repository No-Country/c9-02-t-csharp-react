using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using Contracts.Services;
using DataAccess;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class AccountService : IAccountService
    {
        private readonly MoonBankContext _context;
        private readonly IAccountRepository _accountRepository;

        public AccountService(MoonBankContext context, IAccountRepository accountRepository)
        {
            _context = context;
            _accountRepository = accountRepository;
        }

        public ResponseDTO Login(AccountDTO accountDTO)
        {
            try
            {
                var account = _accountRepository.Login(accountDTO);
                return new ResponseDTO
                {
                    Success = true,
                    Result = account,
                    Message = "Login successful"
                };
            }
            catch (AccountExceptions ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Result = null,
                    Message = ex.Message
                };
            }
            catch (Exception ex)
            {
                return new ResponseDTO
                {
                    Success = false,
                    Result = null,
                    Message = "An error occurred while trying to login."
                };
            }
        }


        public ResponseDTO GetAllAccounts()
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = _accountRepository.GetAllAccounts();
                response.Success = true;
            }
            catch (AccountExceptions accountException)
            {
                response.Message = accountException.Message;
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

    /*
    public ResponseDTO Register(string username, string password)
    {
        return null;
    }    
   */
}

