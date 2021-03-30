using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]///alterar a rota da api
    public class EventoController : ControllerBase
    {

        public IEnumerable<Evento> _evento = new Evento[]{ /// criando os dois eventos fora do get para ser retornado
                new Evento() {
                EventoId = 1,
                Tema = "Angular",
                Local = "Ibiporã",
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                QtdPessoas = 250,
                Lote = "1° Lote",
                ImagemURL = "foto.png"
            },
                            new Evento() {
                EventoId = 2,
                Tema = "Angular test",
                Local = "Ibiporã",
                DataEvento = DateTime.Now.AddDays(3).ToString(),
                QtdPessoas = 350,
                Lote = "2° Lote",
                ImagemURL = "foto1.png"
            }
          };
        private readonly DataContext _context;
        public EventoController(DataContext context)///construtor para chamar o data context pro dados do banco
        {
          _context = context;

        }

        [HttpGet]
        public IEnumerable<Evento> Get() //metodos get retorna todos os eventos
        {
            return _context.Eventos;

        }


        [HttpGet("{id}")]
        public Evento Get(int id) //metodos get que retorna por id e usa sobrecarga de metodo
        {
            return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id); //retorna o evento que é igual o id que é pasasdo

        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{id}")]
        public string Put(int id) //objeto que vai vir na requisição 
        {
            return $"Exemplo de Put com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id) //objeto que vai vir na requisição 
        {
            return $"Exemplo de Post de delete com id = {id}";
        }

    }
}
