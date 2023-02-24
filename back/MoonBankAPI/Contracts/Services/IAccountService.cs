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
        ResponseDTO Login(LoginDTO loginDTO);

        ResponseDTO GetAllAccounts();

        ResponseDTO GetAccountById(int id);

        ResponseDTO GetAccountByAlias(string alias);

        ResponseDTO GetAccountByCBU_CVU(string cbu_cvu);

        // void Register(AccountDTO accountDTO);
    }
}
