using Contracts.Repositories;
using Contracts.Services;
using DataAccess;
using Microsoft.EntityFrameworkCore;
using Repositories;
using Services;

namespace MoonBankAPI
{
    public class Startup
    {

        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // agregar servicios aquí


            services.AddDbContext<MoonBankContext>(option => option.UseSqlServer(_configuration.GetConnectionString("MoonBankSQL")));

            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IRewardRepository, RewardRepository>(); 
            services.AddTransient<IServiceService, ServiceService>();
            services.AddTransient<ITransactionRepository, TransactionRepository>();
        }

        public void Configure(IApplicationBuilder app)
        {
            // configurar la aplicación aquí
        }
    }
}