using Heroes.API.Entities;
using Heroes.API.Filters;
using Heroes.API.Models.ResponseDTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Heroes.API.Controllers
{
    [Route("api/v1/trainer/")]
    [ApiController]
    public class TrainerController : ControllerBase
    {
        private UserManager<Trainer> _userManager;
        private SignInManager<Trainer> _signInManager;

        public TrainerController(
            UserManager<Trainer> userManager,
            SignInManager<Trainer> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [Route("login/")]
        [HttpPost]
        [ValidateModel]
        public async Task<IActionResult> Login(Models.RequestDTO.Trainer model)
        {
            try
            {
                var trainer = await _userManager.FindByNameAsync(model.Name);
                if (trainer == null)
                {
                    return BadRequest("Login", "Please check name and password");
                }
                var result = await _signInManager.PasswordSignInAsync(trainer, model.Password, false, false);
                if (!result.Succeeded)
                {
                    return BadRequest("Login", "Please check name and password");
                }

                return OkRequest("Login", "Success");
            }
            catch (Exception ex)
            {
                return BadRequest("Login", "Please contact your admin");
            }
        }

        [Route("register/")]
        [HttpPost]
        public async Task<IActionResult> Register(Models.RequestDTO.Trainer model)
        {
            try
            {
                var trainer = new Trainer
                {
                    UserName = model.Name
                };

                var result = await _userManager.CreateAsync(trainer, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(trainer, false);
                    return OkRequest("Register", "Success");
                }

                return BadRequest("Register", "Please check your name and password");
            }
            catch (Exception ex)
            {
                return BadRequest("Login", "Please contact your admin");
            }
        }

        [Route("logout/")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return OkRequest("Logout", "Success", false);
        }

        private IActionResult OkRequest(string action, string message, bool isAuthenticated = true)
        {
            return Ok(new TrainerResponse
            {
                Action = action,
                IsAuthenticated = isAuthenticated,
                Message = message
            });
        }

        private IActionResult BadRequest(string action, string message)
        {
            return Ok(new TrainerResponse
            {
                Action = action,
                IsAuthenticated = false,
                Message = message
            });
        }
    }
}