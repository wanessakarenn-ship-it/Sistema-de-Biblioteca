# Sistema-de-Biblioteca
Descrição: Gerenciar livros e empréstimos de forma simples.

pção 2 – Sistema de Biblioteca

Descrição: Gerenciar livros e empréstimos de forma simples.

Interface Livro

titulo: string, autor: string, emprestado: boolean

dataEmprestimo?: Date | null, dataDevolucao?: Date | null

Funções

cadastrarLivro()

emprestarLivro() → altera emprestado para true, define dataEmprestimo

devolverLivro() → altera emprestado para false, define dataDevolucao

listarDisponiveis() → mostra apenas não emprestados

Uso de null e optional: dataEmprestimo e dataDevolucao começam como null e só recebem valor quando houver movimentação.

​Resumo dos Conceitos Principais
​Seu texto explica cada conceito de forma concisa e com exemplos práticos. Aqui está um resumo dos pontos mais importantes:
​undefined: Representa a ausência de um valor, seja em uma variável declarada, mas não inicializada, ou em uma propriedade de objeto que não existe.

​null: Usado para resetar um valor ou indicar explicitamente que não há resultado, como na busca por um usuário que não foi encontrado. O TypeScript, com a flag strictNullChecks, exige que você declare explicitamente se uma variável pode ser null (ex: string | null).

​Propriedades Opcionais (?): Uma forma limpa e idiomática de dizer que uma propriedade ou parâmetro pode ou não existir. Em vez de usar email: string | undefined, você usa email?: string. Isso torna o código mais legível.

​Encadeamento Opcional (?.): Este operador é um salva-vidas para evitar erros. Ele permite acessar propriedades aninhadas de forma segura. Se qualquer parte do caminho for null ou undefined, a expressão inteira retorna undefined em vez de gerar um erro.

​Coalescência Nula (??): Ideal para definir valores padrão. Ele verifica se o valor à esquerda é estritamente null ou undefined. Se for, ele usa o valor à direita. Isso é mais preciso que o operador ||, que também considera valores "falsy" como 0 e ''.
