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
    public class ServiceRepository : IServiceRepository
    {
        private MoonBankContext _context { get; set; }
        public ServiceRepository(MoonBankContext context)
        {
            _context = context;
        }

        public IList<ServiceDTO> GetAllServices()
        {
            return _context.Services.Where(x => x.IdAccountService > 0).Select(x => new ServiceDTO()
            {
                Name = x.Name,
                Amount = x.Amount,
                ServiceUrlImage = x.ServiceUrlImage

            }).ToList();
        }


    }
}
