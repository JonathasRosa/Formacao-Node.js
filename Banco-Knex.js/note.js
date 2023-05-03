/*1 - Knex.js é uma biblioteca para manipulação de dados SQL(Postgres, MSSQL, MySQL, MariaDB, SQLite3, ORACLE e Amazon RedShift)
  2 - Formas de trabalhar com manipulação de banco de dados dentro do JavaScript.
    2.1 - RAW: "SELECCT * FROM post" // mysql2 Query Cruz(Ruim pq mistura cód JS com SQL)
    2.2 - ORM: Define Models para manipular o banco de dados.(Desvantagem é inflexível)
        Ex.: Models -> Artigos.create({title: "Como fazer..."});
    2.3 - Query Builders objetivo é gerar Querys
        EX.: banco.select().table("post") -> gerando esse código("SELECCT * FROM post")
        EX.: banco.select()
            .where({id: 7})
            .orWhere({title: "JS"})
            .orderBy("title")
            .table("post") ->
Gerando esse código = SELECT * FROM post WHERE id = 7 OR title = 'js' ORDER_BY title
*/
