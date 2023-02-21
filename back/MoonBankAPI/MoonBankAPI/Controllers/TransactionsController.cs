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

        [HttpGet("TransactionHistory")]
        public ActionResult<IList<ResponseDTO>> GetTransactionHistory(TransactionDTO transactionDTO)
        {
            var response = _transactionService.GetTransactionsHistory(transactionDTO);
            return Ok(response);
        }

        [HttpPost("MakeTransaction")]
        public ActionResult<ResponseDTO> MakeTransaction([FromBody] TransactionDTO transactionDTO)
        {
            var response = _transactionService.MakeTransaction(transactionDTO);
            return Ok(response);
        }

    }
}
