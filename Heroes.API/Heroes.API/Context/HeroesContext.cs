using Heroes.API.Entities;
using Heroes.API.Models.Shared;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Heroes.API.Context
{
    public class HeroesContext : IdentityDbContext
    {
        public DbSet<Hero> HeroesDB { get; set; }
        public DbSet<Trainer> TrainerDB { get; set; }
        public DbSet<Training> TrainingDB { get; set; }

        public HeroesContext(DbContextOptions<HeroesContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hero>().HasData(
                new Hero()
                {
                    Id = Guid.Parse("3fdc65ee-a96f-458f-bfc4-9cb4be0d8e78"),
                    Name = "Falcon",
                    Ability = (int)Ability.Attacker,
                    Current_power = 100,
                    Date = DateTime.Now,
                    Starting_power = 35,
                    Suit = "black"
                },
                new Hero()
                {
                    Id = Guid.Parse("f2faecd3-3433-4c64-84f7-71843213a686"),
                    Name = "Spider-Man",
                    Ability = (int)Ability.Attacker,
                    Current_power = 150,
                    Date = DateTime.Now,
                    Starting_power = 45,
                    Suit = "red"
                },
                new Hero()
                {
                    Id = Guid.Parse("c136aba7-568f-4dbc-927b-31cf643266ba"),
                    Name = "Loki",
                    Ability = (int)Ability.Attacker,
                    Current_power = 10,
                    Date = DateTime.Now,
                    Starting_power = 5,
                    Suit = "blue"
                },
                new Hero()
                {
                    Id = Guid.Parse("46daf57b-d3d2-4d17-94e7-b78c3ab9058e"),
                    Name = "Thor",
                    Ability = (int)Ability.Attacker,
                    Current_power = 150,
                    Date = DateTime.Now,
                    Starting_power = 25,
                    Suit = "white"
                },
                new Hero()
                {
                    Id = Guid.Parse("5a499074-33e5-4a57-ab52-990c8399acf7"),
                    Name = "Terminator",
                    Ability = (int)Ability.Attacker,
                    Current_power = 110,
                    Date = DateTime.Now,
                    Starting_power = 45,
                    Suit = "black"
                }
            );
            base.OnModelCreating(modelBuilder);
        }
    }
}