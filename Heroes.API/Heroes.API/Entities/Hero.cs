using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Heroes.API.Entities
{
    [Table("Heroes")]
    public class Hero
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Ability { get; set; }
        public DateTime Date { get; set; }
        public string Suit { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Starting_power { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Current_power { get; set; }
    }
}