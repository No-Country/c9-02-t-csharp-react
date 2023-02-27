using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using DataAccess;
using DataAccess.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private MoonBankContext _context { get; set; }
        public AccountRepository(MoonBankContext context)
        {
            _context = context;
        }

        public IList<AccountDTO> GetAllAccounts()
        {
            return _context.Accounts.Where(x => x.IdAccount > 0).Select(x => new AccountDTO()
            {
                IdAccount = x.IdAccount,
                Name = x.Name,
                LastName = x.LastName,
                Email= x.Email,
                Alias= x.Alias,
                CBU_CVU= x.CBU_CVU,
                Balance = x.Balance,
                RewardPoints= x.RewardPoints
            }).ToList();
        }

        public AccountDTO GetAccountById(int id)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.IdAccount == id);

            if (account != null)
            {
                return new AccountDTO()
                {
                    IdAccount = account.IdAccount,
                    Name = account.Name,
                    LastName = account.LastName,
                    Email = account.Email,
                    Alias = account.Alias,
                    CBU_CVU = account.CBU_CVU,
                    Balance = account.Balance,
                    RewardPoints = account.RewardPoints
                };
            }
            else
            {
                throw new AccountExceptions("No Account found with the specified Id.");
            }
        }

        public AccountDTO GetAccountByAlias(string alias)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.Alias == alias);

            if (account != null)
            {
                return new AccountDTO()
                {
                    IdAccount = account.IdAccount,
                    Name = account.Name,
                    LastName = account.LastName,
                    Email = account.Email,
                    Alias = account.Alias,
                    CBU_CVU = account.CBU_CVU,
                    Balance = account.Balance,
                    RewardPoints = account.RewardPoints
                };
            }
            else
            {
                throw new AccountExceptions("No Account found with the specified Alias.");
            }
        }

        public AccountDTO GetAccountByCBU_CVU(string cbu_cvu)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.CBU_CVU == cbu_cvu);

            if (account != null)
            {
                return new AccountDTO()
                {
                    IdAccount = account.IdAccount,
                    Name = account.Name,
                    LastName = account.LastName,
                    Email = account.Email,
                    Alias = account.Alias,
                    CBU_CVU = account.CBU_CVU,
                    Balance = account.Balance,
                    RewardPoints = account.RewardPoints
                };
            }
            else
            {
                throw new AccountExceptions("No Account found with the specified CBU_CVU.");
            }
        }

        
        public AccountDTO Login(LoginDTO loginDTO)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.Email == loginDTO.Email);                        

            if (account == null)
            {
                throw new AccountExceptions("This email doesn´t exists or is not associated with an account.");
            }

            if (loginDTO.Password != account.Password)
            {
                throw new AccountExceptions("Password is not valid.");
            }


            return new AccountDTO()
            {              
                Name = account.Name,
                LastName = account.LastName,
                Email = account.Email,
                Password = account.Password,
                Alias = account.Alias,
                CBU_CVU = account.CBU_CVU,
                Balance = account.Balance,
                RewardPoints = account.RewardPoints,
            };
        }
        
    }
}
