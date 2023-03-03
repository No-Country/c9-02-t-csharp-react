using Common.DTO;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _transactionService;

        public TransactionsController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet("TransactionHistory/{CBU_CVU}")]
        public ActionResult<IList<ResponseDTO>> GetTransactionHistory(string CBU_CVU)
        {            
            var response = _transactionService.GetTransactionsHistory(CBU_CVU);

            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

        [HttpPost("MakeTransaction")]
        public ActionResult<ResponseDTO> MakeTransaction([FromBody] TransactionDTO transactionDTO)
        {
            var response = _transactionService.MakeTransaction(transactionDTO);
            
            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

    }
}
