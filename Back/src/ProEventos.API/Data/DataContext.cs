using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;

namespace ProEventos.API.Data
{
    public class DataContext : DbContext ///cria a tabeal datacontext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {  }//contrutor do builder para funcionar a string e sqlite
        public DbSet<Evento> Eventos { get; set; } ///contexto
    }
}