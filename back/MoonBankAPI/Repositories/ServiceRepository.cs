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
    public class ServiceRepository : IServiceRepository
    {
        private MoonBankContext _context { get; set; }
        public ServiceRepository(MoonBankContext context)
        {
            _context = context;
        }

        public IList<ServiceDTO> GetAllServices()
        {
            return _context.Services.Where(x => x.IdService > 0).Select(x => new ServiceDTO()
            {
                IdService = x.IdService,
                Name = x.Name,
                Amount = x.Amount,
                ServiceUrlImage = x.ServiceUrlImage

            }).ToList();
        }

        public ServiceDTO GetServiceById(int id)
        {
            var service = _context.Services.FirstOrDefault(s => s.IdService == id);

            if (service != null)
            {
                return new ServiceDTO()
                {
                    IdService = service.IdService,
                    Name = service.Name,
                    Amount = service.Amount,
                    ServiceUrlImage = service.ServiceUrlImage,
                };
            }
            else
            {
                throw new ServiceExceptions("No Service found with the specified Id.");
            }
        }

    }
}
