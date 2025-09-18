let mensagem: string = "Olá TypeScript";
console.log(mensagem);

// Define a interface Livro, que modela as propriedades de um livro.
// As datas são opcionais e podem ser um objeto Date ou null.
interface Livro {
  titulo: string;
  autor: string;
  emprestado: boolean;
  dataEmprestimo?: Date | null; // Propriedade opcional que pode ser uma data ou null
  dataDevolucao?: Date | null;   // Propriedade opcional que pode ser uma data ou null
}

// Cria um objeto livro para exemplificar.
// Ele começa com as datas como null, indicando que não foi emprestado.
const livro1: Livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  emprestado: false,
  dataEmprestimo: null,
  dataDevolucao: null,
};

// --- Funções de Gerenciamento ---

/**
 * Empresta um livro, atualizando seu estado.
 * @param livro O objeto Livro a ser emprestado.
 */
function emprestarLivro(livro: Livro): void {
    // "Void" significa vazio, e é amplamente usado para indicar a ausência de um tipo de dado ou valor, como em funções que não retornam nada, ou em ponteiros que podem apontar para qualquer tipo de dado
    // Se o livro já estiver emprestado, não faz nada.
  if (livro.emprestado) {
    console.log(`"${livro.titulo}" já está emprestado.`);
    return;
  }

  // Atualiza as propriedades para refletir o empréstimo.
  livro.emprestado = true;
  livro.dataEmprestimo = new Date(); // Atribui a data e hora atuais.
  console.log(`"${livro.titulo}" foi emprestado em ${livro.dataEmprestimo?.toLocaleDateString()}.`);
}

/**
 * Devolve um livro, atualizando seu estado.
 * @param livro O objeto Livro a ser devolvido.
 */
function devolverLivro(livro: Livro): void {
  // Se o livro não estiver emprestado, não faz nada.
  if (!livro.emprestado) {
    console.log(`"${livro.titulo}" não está emprestado.`);
    return;
  }

  // Atualiza as propriedades para refletir a devolução.
  livro.emprestado = false;
  livro.dataDevolucao = new Date(); // Atribui a data e hora atuais.
  console.log(`"${livro.titulo}" foi devolvido em ${livro.dataDevolucao?.toLocaleDateString()}.`);
}

// --- Demonstração de Uso ---

console.log("Estado inicial do livro:");
console.log(livro1);

console.log("\n--- Empréstimo ---");
emprestarLivro(livro1);
console.log(livro1);

console.log("\n--- Devolução ---");
devolverLivro(livro1);

console.log(livro1);

// Mostrando o comportamento quando o livro já está no estado desejado
console.log("\n--- Tentando devolver um livro já devolvido ---");
devolverLivro(livro1);

console.log("\n--- Tentando emprestar um livro já emprestado ---");
emprestarLivro(livro1);

