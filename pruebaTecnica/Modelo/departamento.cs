
using System.Numerics;

namespace Modelo
{
    public class Departamento
    {
        public int Id { get; set; }
        public string? Codigo { get; set; }

        public string? Nombre { get; set; }
        public bool? Activo { get; set; }

        public Users? IdUsuarioCreacion { get; set; }

        public string? Transaccion { get; set; }

    }
}
