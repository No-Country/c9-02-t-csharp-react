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
        public ActionResult<ResponseDTO> Login([FromBody] string email, string password)
        {
            var response = _accountService.Login(email, password);
            return Ok(response);
        }

        [HttpGet("AccountsList")]
        public ActionResult<ResponseDTO> GetAllAccounts()
        {
            var response = _accountService.GetAllAccounts();
            return Ok(response);
        }
    }
}
