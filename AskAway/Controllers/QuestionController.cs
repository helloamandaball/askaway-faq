using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AskAway.Repositories;
using AskAway.Models;

namespace AskAway.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionRepository _questionRepository;

        public QuestionController(IQuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        // GET ALL QUESTIONS
        // GET: api/<QuestionController>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_questionRepository.GetAll());
        }

        // GET QUESTION BY ID
        // GET api/<QuestionController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var question = _questionRepository.GetById(id);
            if (question == null)
            {
                return NotFound();
            }
            return Ok(question);
        }

        // ADD A QUESTION
        // POST api/<QuestionController>
        [HttpPost]
        public IActionResult Post(Question question)
        {
            _questionRepository.Add(question);
            return NoContent();
        }

        // UPDATE A QUESTION
        // PUT api/<QuestionController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Question question)
        {
            if (id != question.Id)
            {
                return BadRequest();
            }
            _questionRepository.Edit(question);
            return NoContent();
        }

        [HttpGet("search")]
        public IActionResult Search(string criterion, bool sortDesc)
        {
            return Ok(_questionRepository.Search(criterion, sortDesc));
        }
    }
}
