# Banco de dados

* Um banco de dados é um repositório sistêmico de informações que, por sua vez, são guardadas em tabelas.
As linhas da tabela representam os dados e as colunas representam os atributos.

## Primary Key

É um identificador da informação, sendo um número único.

## Select

Seleciona campos com o comando `SELECT * FROM NOMEDATABELA`
Usando o `SELECT * FROM aluno WHERE matricula = 1 `
Também é possível usar `SELECT * FROM aluno WHERE nome like "j%" ` Dessa forma, ele buscará todos os nomes que começam com "j" e o porcentagem significa que não importa o que vem depois do "j". Se usar `%g%` será informado qualquer informação de nome que contenha a letra "g".
Também pode ser usado `SELECT * FROM matricula, cpf WHERE nome like "%G% ` que devolverá a matrícula e cpf de todos que contém "g" no nome

## Operadores relacionais

= igual (só funciona com campos number) (`SELECT * FROM aluno WHERE matricula matricula = 2`)
like (usado como o igual mas nesse caso é para texto) `SELECT * FROM aluno WHERE responsavel like "josefina%"`
>=, Maior que (`SELECT * FROM aluno WHERE matricula matricula >= 2`)
<=, Menor que (`SELECT * FROM aluno WHERE matricula matricula <= 2`)
<> Não igual a (`SELECT * FROM aluno WHERE matricula matricula <> 2`)
!= Diferente de (`SELECT * FROM aluno WHERE matricula matricula != 2`)

## Operadores matemáticos

+, Adição (`SELECT * FROM aluno WHERE matricula matricula = 2 + 2`)
-Subtração(`SELECT * FROM aluno WHERE matricula matricula = 2 - 2`)
*Multiplicação(`SELECT * FROM aluno WHERE matricula matricula = 2 * 2`)
/Divisão(`SELECT * FROM aluno WHERE matricula matricula = 2 / 2`)
%, Módulo(`SELECT * FROM aluno WHERE matricula matricula = 2 % 5`)


## Operadores lógicos

AND (`SELECT * FROM aluno WHERE nome like "%j" AND matricula > 2`)
OR (`SELECT * FROM aluno WHERE nome like "%j" OR matricula > 2`)
BETWEEN (`SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 AND 7`) ou (`SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 AND 7`)
IN e NOT IN (`SELECT * FROM funcionarios WHERE id_funcionario IN (1,2,5)`) (`SELECT * FROM funcionarios WHERE id_funcionario NOT IN (1,2,5)`)
NULL (`SELECT * FROM funcionarios WHERE id_funcionario IS NULL`) ou (`SELECT * FROM funcionarios WHERE id_funcionario IS NOT NULL`)

## Mais comandos

INSERT INTO (`INSERT INTO aluno(nome, cpf, responsavel) VALUES ("maria", 123456789, "joice")`)
UPDATE (`UPDATE aluno SET nome="maria", cpf=123456789, WHERE matricula = 2`)
DELETE (`DELETE FROM aluno WHERE matricula = 2`) - esse comando não apaga um campo; somente o registro inteiro

# Avançando

## Relações entre tabelas

 As tabelas "intermediárias" relacionam duas tabelas. Por exemplo, uma relação de professor e aluno.

 ## Tipos de campos

 * Primary key:
 É uma chave identificadora de cada tabela. Se caracteriza por ter um único valor, sendo assim, não é permitido ter um identificador repetido.

 * Foreign key:
 É uma relação/referência da chave de outra tabela que contém uma primary key. Ainda sim, a tabela que contém a foreign key também tem a sua primary key (id). Nas tabelas de foreign key é possível associar mais de um primary key.

 * Unique:
 É um comando que reflete a exclusividade de uma informação do campo. Por exemplo:
 Nome usuário: TEXT UNIQUE
 Assim, um nome de usuário, por exemplo, será uma informação que não poderá se repetir (dessa forma não sendo necessário criar uma tabela para inserir somente o número de usuário).

 ## Unindo tabelas

 É possível unir tabelas com o comando JOIN. Esse comando traz informações de duas tabelas que tem um relacionamento.

    SELECT * FROM funcionarios 
    JOIN departamentos
    ON departamentos.id_dept = funcionarios.id_departamento

Na linha 72 seleciona todos os campos da tabela funcionários. Na linha 73 seleciona tudo da tabela departamentos. Na linha 74 segue o relacionamento que na tabela departamentos existe o campo id_dept que é igual ao campo id_departamento da tabela funcionários.

* JOIN COM WHERE

    SELECT * FROM funcionarios 
    JOIN departamentos
    ON departamentos.id_dept = funcionarios.id_departamento
    WHERE funcionarios.id_departamento = 2

Assim, traz todos os funcionários do departamento 2.

Também é possível fazer com a tabela departamento, pois ambas as tabelas possuem o mesmo conteúdo.

    SELECT * FROM funcionarios 
    JOIN departamentos
    ON departamentos.id_dept = funcionarios.id_departamento
    WHERE funcionarios.id_departamento = 2

* JOIN especificando campos

    SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
    FROM funcionarios 
    JOIN departamentos
    ON departamentos.id_dept = funcionarios.id_departamento

Serve para que possamos selecionar informações específicas. Nesse caso, é preciso especificar de qual tabela se quer o campo de nome, cpf e departamentos. No caso, funcionarios.nome, funcionarios.cpf, departamentos.descricao.

* ALIAS

O Alias auxilia na troca de nome para facilitar nas consultas (quando há um nome de tabela muito grande, por exemplo).

    SELECT func.nome, func.cpf, dept.descricao
    FROM funcionarios as func
    JOIN departamentos as dept
    ON func.id_funcionario = dept.id_dept

Também é possível trocar o nome dos campos

    SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
    FROM funcionarios as func
    JOIN departamentos as dept
    ON func.id_funcionario = dept.id_dept

* LEFT OUTER JOIN

Esse comando serve para mostrar todas informações que não tem relação com a segunda tabela do join. Por exemplo:

    SELECT * FROM funcionarios
    LEFT OUTER JOIN departamentos
    ON funcionarios.id_funcionario = departamentos.id_dept

Nesse caso, aparece a Josefina Gracielly que está contida na tabela de funcionários, mas que não tem id_departamento, consequentemente, ela não consta na tabela de departamento. Apesar disso, usando o comando acima, ela aparecerá constando as informações como NULL.

Usando o comando abaixo, aparecerá todos os departamentos que são nulos e que não constam na tabela funcionários:

  SELECT * FROM funcionarios
  RIGHT OUTER JOIN departamentos
  ON funcionarios.id_funcionario = departamentos.id_dept

## Comandos avançados

* ORDER BY

Ordena conforme o tipo de campo. Por exemplo:

SELECT * FROM funcionarios
ORDER BY nome

Trará todas as informações com a ordenação alfabética do funcionário por nome.

Também é possível ordenar de forma decrescente:

SELECT * FROM funcionarios
ORDER BY nome DESC

* LIMIT

Limita a quantidade de resultados

SELECT * FROM funcionarios LIMIT 2

Trará somente os dois primeiros dados

* OFFSET

Esse comando vai ignorar determinados registros

SELECT * FROM funcionarios 
LIMIT 4 OFFSET 2

Ignora o 2,3 e trará somente o 4,5,6,7
(nesse caso o primeiro id começa com 2)

* COUNT

Contará a quantidade de campos.
Nesse caso, contará quantos funcionários têm o campo id_departamento preenchido.

SELECT COUNT(id_departamento) FROM funcionarios

Saída: 9

* GROUP BY

Agrupa por informação. Por exemplo, na query abaixo agrupará a quantidade de tipos departamentos conforme o id_departamento da tabela de funcionários:

SELECT count(id_departamento) 
FROM funcionarios
GROUP BY id_departamento

Saída: 
0
2
3
2
1
1

O seguinte comando retornará o id do departamento e quantidade de funcionários contidos nos respectivos departamentos:

SELECT id_departamento, count(id_departamento) 
FROM funcionarios
GROUP BY id_departamento

id_departamento count(id_departamento)
NULL                     0
1                        2
2                        3
3                        2
4                        1
5                        1


* JOIN, GROUP BY e COUNT juntos

SELECT departamentos.descricao, count(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY funcionarios.id_departamento

Aqui selecionará a descrição de cada departamento com o total de pessoas por departamento

* HAVING

O having serve para quando temos campos agrupados sendo comparados, muito parecido com o WHERE.

SELECT departamentos.descricao, count(id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
HAVING count(funcionarios.id_departamento) IN (2,3)

## Comandos nas tabelas

* CREATE TABLE

É o comando que cria as tabelas.

CREATE TABLE alunos (
  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE, 
  responsavel TEXT
)


CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE, 
  disciplina TEXT
)


CREATE TABLE aulas (
  id_professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
  FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)

* ALTER TABLE

É o comando que altera informações. Por exemplo:

ALTER TABLE aluno RENAME TO alunos

* DROP TABLE

É o comando que exclui tabelas:

