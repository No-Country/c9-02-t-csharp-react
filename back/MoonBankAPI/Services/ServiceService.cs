﻿using Common.DTO;
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
        private readonly IServiceRepository _serviceRepository;

        public ServiceService(MoonBankContext context, IServiceRepository serviceRepository)
        {
            _context = context;
            _serviceRepository = serviceRepository;
        }


        public ResponseDTO GetAllServices()
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = _serviceRepository.GetAllServices();
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

        public ResponseDTO GetServiceById(int id)
        {
            ResponseDTO response = new ResponseDTO();
            try
            {
                response.Result = _serviceRepository.GetServiceById(id);
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
