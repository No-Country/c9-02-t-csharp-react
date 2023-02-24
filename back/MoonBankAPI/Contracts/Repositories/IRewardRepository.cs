using Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Repositories
{
    public interface IRewardRepository
    {
        IList<RewardDTO> GetAllRewards();

        RewardDTO GetRewardById(int id);

    }
}
