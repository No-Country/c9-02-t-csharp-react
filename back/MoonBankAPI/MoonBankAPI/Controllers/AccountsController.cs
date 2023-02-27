using Common.DTO;
using Common.Exceptions;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Services;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }


        [HttpPost("Login")]
        public ActionResult<ResponseDTO> Login([FromBody] LoginDTO loginDTO)
        {
            var response = _accountService.Login(loginDTO);

            if (response.Success)
                return Ok(response);
            else
                return BadRequest(response);           
        }

        [HttpGet("AccountsList")]
        public ActionResult<ResponseDTO> GetAllAccounts()
        {
            var response = _accountService.GetAllAccounts();
            return Ok(response);
        }

        [HttpGet("{idAccount}")]
        public ActionResult<ResponseDTO> GetAccountById(int idAccount)
        {
            var response = _accountService.GetAccountById(idAccount);

            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpGet("Alias/{alias}")]
        public ActionResult<ResponseDTO> GetAccountByAlias(string alias)
        {
            var response = _accountService.GetAccountByAlias(alias);

            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpGet("CBU_CVU/{cbu_cvu}")]
        public ActionResult<ResponseDTO> GetAccountByCBU_CVU(string cbu_cvu)
        {
            var response = _accountService.GetAccountByCBU_CVU(cbu_cvu);

            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

    }
}
