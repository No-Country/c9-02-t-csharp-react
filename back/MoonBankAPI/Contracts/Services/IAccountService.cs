using Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Services
{
    public interface IAccountService
    {
        AccountDTO Login(string email, string password);

        // void Register(AccountDTO accountDTO);
    }
}
