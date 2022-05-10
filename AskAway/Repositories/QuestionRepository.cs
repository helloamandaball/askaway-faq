using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection.PortableExecutable;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using AskAway.Models;
using AskAway.Utils;

namespace AskAway.Repositories
{
    public class QuestionRepository : BaseRepository, IQuestionRepository
    {
        public QuestionRepository(IConfiguration config) : base(config) { }

        public List<Question> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT q.Id, q.Query, q.Answer, q.CreateDateTime
                          FROM Question q
                      ORDER BY q.CreateDateTime
                    ";

                    var reader = cmd.ExecuteReader();

                    var questions = new List<Question>();
                    while (reader.Read())
                    {
                        questions.Add(new Question()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Query = DbUtils.GetString(reader, "Query"),
                            Answer = DbUtils.GetString(reader, "Answer"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime").ToString("MM/dd/yyyy")
                        });
                    }

                    reader.Close();

                    return questions;
                }
            }
        }

        public Question GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT q.Id, q.Query, q.Answer, q.CreateDateTime
                          FROM Question q
                         WHERE q.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Question question = null;
                    if (reader.Read())
                    {
                        question = new Question()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Query = DbUtils.GetString(reader, "Query"),
                            Answer = DbUtils.GetString(reader, "Answer"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime").ToString("MM/dd/yyyy")
                        };
                    }

                    reader.Close();

                    return question;
                }
            }
        }

        public void Add(Question question)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Question (Query, Answer, CreateDateTime)
                        OUTPUT INSERTED.ID
                        VALUES (@Query, @Answer, @CreateDateTime)";

                    DbUtils.AddParameter(cmd, "@Query", question.Query);
                    DbUtils.AddParameter(cmd, "@Answer", question.Answer);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", question.CreateDateTime);

                    question.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Edit(Question question)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Question
                           SET Query = @Query,
                               Answer = @Answer,
                               CreateDateTime = @CreateDateTime
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Query", question.Query);
                    DbUtils.AddParameter(cmd, "@Answer", question.Answer);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", question.CreateDateTime);
                    DbUtils.AddParameter(cmd, "@Id", question.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Question> Search(string criterion, bool sortDesc)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    var sql = @"
                        SELECT q.Id, q.Query, q.Answer, q.CreateDateTime 
                          FROM Question q 
                         WHERE q.Query LIKE @Criterion OR q.Answer LIKE @Criterion";

                    if (sortDesc)
                    {
                        sql += " ORDER BY q.CreateDateTime DESC";
                    }
                    else
                    {
                        sql += " ORDER BY q.CreateDateTime";
                    }

                    cmd.CommandText = sql;

                    DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
                    var reader = cmd.ExecuteReader();

                    var questions = new List<Question>();
                    while (reader.Read())
                    {
                        questions.Add(new Question()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Query = DbUtils.GetString(reader, "Query"),
                            Answer = DbUtils.GetString(reader, "Answer"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime").ToString("MM/dd/yyyy")
                        });
                    }

                    reader.Close();

                    return questions;
                }
            }
        }
    }
}
