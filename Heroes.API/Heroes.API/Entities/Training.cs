using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Heroes.API.Entities
{
    [Table("Training")]
    public class Training
    {
        [Key]
        public Guid Id { get; set; }

        public Guid HeroId { get; set; }
        public Guid TrainerId { get; set; }

        public DateTime Date { get; set; }
    }
}