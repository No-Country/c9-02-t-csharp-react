using Common.DTO;
using Common.Exceptions;
using Contracts.Repositories;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    public class RewardRepository : IRewardRepository
    {
        private MoonBankContext _context { get; set; }
        public RewardRepository(MoonBankContext context)
        {
            _context = context;
        }

        public RewardDTO GetRewardById(int id)
        {
            var reward = _context.Rewards.FirstOrDefault(r => r.IdReward == id);

            if (reward != null)
            {
                return new RewardDTO()
                {
                    IdReward = reward.IdReward,
                    Name = reward.Name,
                    Points = reward.Points,
                    RewardUrlImage = reward.RewardUrlImage,
                };
            }
            else
            {
                throw new RewardExceptions("No Reward found with the specified Id.");
            }
        }


        public IList<RewardDTO> GetAllRewards()
        {
            return _context.Rewards.Where(x => x.IdReward > 0).Select(x => new RewardDTO()
            {
                IdReward = x.IdReward,
                Name = x.Name,
                Points = x.Points,
                RewardUrlImage = x.RewardUrlImage,

            }).ToList();
        }
    }
}
