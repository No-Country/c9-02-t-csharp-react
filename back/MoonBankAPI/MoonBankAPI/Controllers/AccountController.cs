using Common.DTO;
using Common.Exceptions;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
                     

        [HttpPost("Login")]
        public ActionResult<ResponseDTO> Login([FromBody] AccountDTO accountDTO)
        {
            var response = _accountService.Login(accountDTO);
            return Ok(response);
        }
    }
}
