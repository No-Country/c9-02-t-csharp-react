using Common.DTO;
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

        public IList<RewardDTO> GetAllRewards()
        {
            return _context.Rewards.Where(x => x.IdReward > 0).Select(x => new RewardDTO()
            {
                Name = x.Name,
                Points = x.Points,
                RewardUrlImage = x.RewardUrlImage,

            }).ToList();
        }
    }
}
