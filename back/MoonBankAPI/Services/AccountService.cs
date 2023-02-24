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

        public ResponseDTO Login(LoginDTO loginDTO)
        {
            try
            {
                var account = _accountRepository.Login(loginDTO);
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

        public ResponseDTO GetAccountById(int id)
        {
            ResponseDTO response = new ResponseDTO();

            try
            {
                var account = _accountRepository.GetAccountById(id);
                if (account != null)
                {
                    response.Result = account;
                    response.Success = true;
                }
                else
                {
                    response.Success = false;
                    response.Message = $"No account found with Id = {id}";
                }
            }
            catch (AccountExceptions accountException)
            {
                response.Success = false;
                response.Message = accountException.Message;
            }
            catch
            {
                response.Success = false;
                response.Message = "An error occurred, we are sorry for what happened";
            }

            return response;
        }

        public ResponseDTO GetAccountByAlias(string alias)
        {
            ResponseDTO response = new ResponseDTO();

            try
            {
                var account = _accountRepository.GetAccountByAlias(alias);
                if (account != null)
                {
                    response.Result = account;
                    response.Success = true;
                }
                else
                {
                    response.Success = false;
                    response.Message = $"No account found with Alias = {alias}";
                }
            }
            catch (AccountExceptions accountException)
            {
                response.Success = false;
                response.Message = accountException.Message;
            }
            catch
            {
                response.Success = false;
                response.Message = "An error occurred, we are sorry for what happened";
            }

            return response;
        }

        public ResponseDTO GetAccountByCBU_CVU(string cbu_cvu)
        {
            ResponseDTO response = new ResponseDTO();

            try
            {
                var account = _accountRepository.GetAccountByCBU_CVU(cbu_cvu);
                if (account != null)
                {
                    response.Result = account;
                    response.Success = true;
                }
                else
                {
                    response.Success = false;
                    response.Message = $"No account found with CBU_CVU = {cbu_cvu}";
                }
            }
            catch (AccountExceptions accountException)
            {
                response.Success = false;
                response.Message = accountException.Message;
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

