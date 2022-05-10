using AskAway.Models;
using System.Collections.Generic;

namespace AskAway.Repositories
{
    public interface IQuestionRepository
    {
        List<Question> GetAll();
        Question GetById(int id);

        void Add(Question question);
        void Edit(Question question);

        List<Question> Search(string criterion, bool sortDesc);
    }
}