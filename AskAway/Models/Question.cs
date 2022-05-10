using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace AskAway.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Query { get; set; }

        [Required]
        public string Answer { get; set; }

        public string CreateDateTime { get; set; }
    }
}
