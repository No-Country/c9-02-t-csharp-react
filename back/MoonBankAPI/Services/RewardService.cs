using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using Contracts.Services;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class RewardService : IRewardService
    {
        private readonly MoonBankContext _context;
        private readonly IRewardRepository _rewardRepository;

        public RewardService(MoonBankContext context, IRewardRepository rewardRepository)
        {
            _context = context;
            _rewardRepository = rewardRepository;
        }


        public ResponseDTO GetAllRewards()
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = _rewardRepository.GetAllRewards();
                response.Success = true;
            }
            catch (RewardExceptions rewardException)
            {
                response.Message = rewardException.Message;
                response.Success = false;
            }
            catch
            {
                response.Success = false;
                response.Message = "An error occurred, we are sorry for what happened";
            }

            return response;
        }
    }

}
