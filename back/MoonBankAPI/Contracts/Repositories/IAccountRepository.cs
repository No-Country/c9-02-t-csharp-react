using Common.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Repositories
{
    public interface IAccountRepository
    {
        AccountDTO Login(string email, string password);

        //  void Register(AccountDTO accountDTO);


    }
}
