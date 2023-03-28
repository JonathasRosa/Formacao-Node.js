INSERT INTO usuarios (nome, email, idade) VALUES (
"Júnior Rosa",
"jsilvarosa88@gmail.com",
34
);

SELECT * FROM usuarios WHERE idade = 34;

DELETE FROM usuarios WHERE nome = "Júnior Rosa";

UPDATE usuarios SET nome ="Fesson" WHERE nome = "Jefferson Rosa";