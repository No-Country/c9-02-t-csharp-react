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
    public class AccountService
    {
        private readonly MoonBankContext _context;
        private readonly IAccountRepository accountRepository;

        public AccountService(MoonBankContext context, IAccountRepository accountRepository)
        {
            _context = context;
            this.accountRepository = accountRepository;
        }

        /*
        public ResponseDTO Login(string username, string password)
        {
            return null;
        }


        public ResponseDTO Register(string username, string password)
        {
            return null;
        }    
       */
    }
}
