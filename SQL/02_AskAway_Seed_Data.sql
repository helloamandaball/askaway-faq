USE [AskAway];
GO

SET IDENTITY_INSERT [Question] ON
INSERT INTO [Question] ([Id], [Query], [Answer], [CreateDateTime])
    VALUES (1, 'How many movies has Tom Hanks been in?', 'At least 91, and no less than nine of his movies have grossed $400 million or more at the worldwide box office.', '2022-05-05'), (2, 'What are some of Tom Hanks favorite roles?', 'In numerous interviews, he has stated that the characters he portrays in A League of Their Own and Cast Away have been some of his favorite roles.', '2022-07-05'), (3, 'How much weight did Tom Hanks lose for his Cast Away role?', 'Hanks actually lost 50 pounds and grew his beard to play Chuck during his life on the island.', '2022-06-05'),
    (4, 'What was Tom Hanks first movie?', 'Hanks made his professional acting debut on stage playing Grumio in a 1977 Great Lakes Theater production of The Taming of the Shrew. He made his film debut with a minor role in the 1980 horror film He Knows You"re Alone.', '2022-05-05'), (5, 'How much weight did Tom Hanks lose for his Cast Away role?', 'When Hanks was younger, he dreamed of becoming an astronaut. He followed the space program closely from the Apollo 7 mission on. Though he did not become an astronaut, he did play one in Apollo 13. Hanks still supports NASA"s space program and follows it closely.', '2022-06-08')
SET IDENTITY_INSERT [Question] OFF

