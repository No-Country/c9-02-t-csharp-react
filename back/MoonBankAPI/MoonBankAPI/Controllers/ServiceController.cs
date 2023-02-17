using Common.DTO;
using Contracts.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace MoonBankAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceService _serviceService;

        public ServiceController(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        [HttpGet("ServicesList")]
        public ActionResult<ResponseDTO> GetAllServices()
        {
            var response = _serviceService.GetAllServices();
            return Ok(response);
        }

    }
}
