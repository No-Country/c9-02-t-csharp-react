
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


            //services.AddDbContext<MoonBankContext>(option => option.UseSqlServer(_configuration.GetConnectionString("MoonBankSQL")));


        }

        public void Configure(IApplicationBuilder app)
        {
            // configurar la aplicación aquí
        }
    }
}