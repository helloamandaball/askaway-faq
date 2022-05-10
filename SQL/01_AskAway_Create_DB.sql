DROP TABLE IF EXISTS [Question];
GO

CREATE TABLE [Question] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Query] nvarchar(1000),
  [Answer] nvarchar(3000),
  [CreateDateTime] datetime
)
GO
