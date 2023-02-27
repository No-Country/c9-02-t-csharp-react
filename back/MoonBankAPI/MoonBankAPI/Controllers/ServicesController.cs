using Common.DTO;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly IServiceService _serviceService;

        public ServicesController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpGet("ServicesList")]
        public ActionResult<ResponseDTO> GetAllServices()
        {
            var response = _serviceService.GetAllServices();

            return Ok(response);
        }

        [HttpGet("{idService}")]
        public ActionResult<ResponseDTO> GetServiceById(int idService)
        {
            var response = _serviceService.GetServiceById(idService);

            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return NotFound(response);
            }
        }

    }
}
