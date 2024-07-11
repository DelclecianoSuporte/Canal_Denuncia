using ApiDenuncia.Interfaces;
using ApiDenuncia.Models;
using ApiDenuncia.Services;
using Camada.Business.Interfaces;
using Camada.Business.Notificacoes;

namespace ApiDenuncia.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<Contexto>();
            services.AddScoped<IDenunciaRepository, DenunciaRepository>();

            services.AddScoped<INotificador, Notificador>();
            services.AddScoped<IDenunciaService, DenunciaService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            return services;
        }
    }
}
