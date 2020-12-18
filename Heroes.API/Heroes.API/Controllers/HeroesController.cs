using Heroes.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Heroes.API.Controllers
{
    [Route("api/v1/heroes/")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private IHeroesRepository _heroesRepository;
        private ITrainingRepository _trainingRepository;

        public HeroesController(IHeroesRepository heroesRepository,
            ITrainingRepository trainingRepository
            )
        {
            _heroesRepository = heroesRepository;
            _trainingRepository = trainingRepository;
        }

        [Route("getAll/")]
        [HttpGet]
        public async Task<IActionResult> GetHeroes()
        {
            try
            {
                var heroesEntities = await _heroesRepository.GetHeroesAsync();
                return Ok(heroesEntities);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [Route("getHero/")]
        [HttpGet]
        public async Task<IActionResult> GetHero(Guid id)
        {
            try
            {
                var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
                var heroEntitiy = await _heroesRepository.GetHeroAsync(id, Guid.Parse(userId));
                return Ok(heroEntitiy);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        [Route("trainHero/")]
        [HttpPost]
        public async Task<IActionResult> TrainHero(Guid id)
        {
            try
            {
                await _heroesRepository.TrainHeroAsync(id);
                var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

                _trainingRepository.AddTraining(new Entities.Training
                {
                    Date = DateTime.Now,
                    HeroId = id,
                    TrainerId = Guid.Parse(userId)
                });
                await _heroesRepository.SaveChangesAsync();
                var heroEntitiy = await _heroesRepository.GetHeroAsync(id, Guid.Parse(userId));
                return Ok(heroEntitiy);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}