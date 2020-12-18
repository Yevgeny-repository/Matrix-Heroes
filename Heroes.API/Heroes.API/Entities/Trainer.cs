using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Heroes.API.Entities
{
    [Table("Trainers")]
    public class Trainer : IdentityUser
    {
    }
}