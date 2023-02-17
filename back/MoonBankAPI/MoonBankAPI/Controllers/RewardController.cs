using Common.DTO;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RewardController : ControllerBase
    {
        private readonly IRewardService _rewardService;

        public RewardController(IRewardService rewardService)
        {
            _rewardService = rewardService;
        }

        [HttpGet("RewardsList")]
        public ActionResult<ResponseDTO> GetAllRewards()
        {
            var response = _rewardService.GetAllRewards();
            return Ok(response);
        }
    }
}
