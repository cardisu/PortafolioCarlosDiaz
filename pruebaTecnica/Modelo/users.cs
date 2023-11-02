

namespace Modelo
{
    public class Users
    {
        public int Id { get; set; }
        public string? Usuario { get; set; }

        public string? PrimerNombre { get; set; }

        public string? SegundoNombre { get; set; }

        public string? PrimerApellido { get; set; }

        public string? SegundoApellido { get; set; }

        public Departamento? IdDepartamento { get; set; }

        public Cargo? IdCargo { get; set; }

        public string? Transaccion { get; set; }

    }
}
