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
    public class ServiceService : IServiceService
    {
        private readonly MoonBankContext _context;
        private readonly IServiceRepository serviceRepository;

        public ServiceService(MoonBankContext context, IServiceRepository serviceRepository)
        {
            _context = context;
            this.serviceRepository = serviceRepository;
        }


        public ResponseDTO GetAllServices()
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = serviceRepository.GetAllServices();
                response.Success = true;
            }
            catch (ServiceExceptions serviceException)
            {
                response.Message = serviceException.Message;
                response.Success = false;
            }
            catch
            {
                response.Message = "An error occurred, we are sorry for what happened";
                response.Success = false;
            }

            return response;
        }
    }
}
