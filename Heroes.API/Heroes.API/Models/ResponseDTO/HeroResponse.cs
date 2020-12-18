using System;

namespace Heroes.API.Models.ResponseDTO
{
    public class HeroResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Ability { get; set; }
        public DateTime Date { get; set; }
        public string Suit { get; set; }
        public decimal Starting_power { get; set; }
        public decimal Current_power { get; set; }
        public int TrainingCount { get; set; }

    }
}