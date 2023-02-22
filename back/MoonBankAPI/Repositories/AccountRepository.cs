using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using DataAccess;
using DataAccess.Models;
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
                Balance = x.Balance,
                RewardPoints= x.RewardPoints
            }).ToList();
        }

        public AccountDTO Login(AccountDTO accountDTO)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.Email == accountDTO.Email);                        

            if (account == null)
            {
                throw new AccountExceptions("This email doesn´t exists or is not associated with an account.");
            }

            if (accountDTO.Password != account.Password)
            {
                throw new AccountExceptions("Password is not valid.");
            }


            return new AccountDTO()
            {
                IdAccount = account.IdAccount,
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

        
/*
        public AccountDTO Login(string email, string password)
        {
            var account = _context.Accounts.FirstOrDefault(x => x.Email == email);

            if (account == null)
            {
                throw new AccountExceptions("This email doesn´t exists or is not associated with an account.");
            }

            if (password != account.Password)
            {
                throw new AccountExceptions("Password is not valid.");
            }

            return new AccountDTO()
            {
                IdAccount = account.IdAccount,
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
        
*/





















        /* public void Register(AccountDTO accountDTO)
         {
             if (_context.Accounts.Any(x => x.Email == accountDTO.Email ))
             {
                 throw new AccountExceptions("The email you have entered is already in use.");
             }

             var alias = string.Join(".", accountDTO.Alias.Split(" ")); // consultar validacion en front para que ingrese solo 3 palabras

             if (_context.Accounts.Any(x => x.Alias == alias))
             {
                 throw new AccountExceptions("The Alias you have entered is already in use.");
             }

             long cbuCvu = 95422330000000000 + (long)(new Random().NextDouble() * 9999999999999999); // 9542233 son los 7 digitos fijos(3 entidadBanco, 4 sucursal)

             if (_context.Accounts.Any(x => x.CBU_CVU == cbuCvu))
             {
                 throw new AccountExceptions("An error has occurred with the CBU_CVU number, we apologize for that.");
             }

             _context.Accounts.Add(new DataAccess.Models.Account()
             {
                 Name = accountDTO.Name,
                 LastName = accountDTO.LastName,
                 Email = accountDTO.Email,
                 Password = accountDTO.Password,
                 Alias = alias,
                 CBU_CVU = cbuCvu, 
                 Balance = 0,                               
                 RewardPoints = 0
             });
         }*/
    }
}
