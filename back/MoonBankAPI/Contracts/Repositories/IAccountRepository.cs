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
        IList<AccountDTO> GetAllAccounts();
        AccountDTO Login(AccountDTO accountDTO);

        //  void Register(AccountDTO accountDTO);


    }
}
