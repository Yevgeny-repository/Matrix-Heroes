using System.ComponentModel.DataAnnotations;

namespace Heroes.API.Models.RequestDTO
{
    public class Trainer
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }
}