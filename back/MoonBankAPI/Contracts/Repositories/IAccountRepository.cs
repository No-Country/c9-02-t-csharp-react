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
        AccountDTO Login(LoginDTO loginDTO);

        AccountDTO GetAccountById(int id);

        AccountDTO GetAccountByAlias(string alias);

        AccountDTO GetAccountByCBU_CVU(string cbu_cvu);

        //  void Register(AccountDTO accountDTO);


    }
}
