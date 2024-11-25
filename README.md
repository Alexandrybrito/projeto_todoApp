# Projeto To Do List
  Iniciativa referente a 5ª atividade do curso fullstack da +praTi

# Objetivo: 
  Desenvolver uma aplicação simples de lista de tarefas (todoApp).
  
# Este projeto utilizou HTML, CSS com biblioteca (Tailwind) e linguagem de programação JavaScript.

A aplicação do projeto permite; a criação, leitura, edição, conclusão e exclusão de tarefas, além 
de persistir as informações no localStorage, para que elas não sejam perdidas ao recarregar a página.

# Funcionamento:
Foram usados elemento de um CRUD.
  * O usuário será capaz de adicionar novas tarefas à uma lista de tarefas vigêntes. Elemento Create (Criar);
  * As tarefas deverão ser carregadas automaticamente a partir do localStorage ao abrir a 
aplicação. Elemento Read (Ler);
  * Cada tarefa terá a opção de ser editada, ao clicar em "Editar", o texto 
da tarefa pode ser alterado. Elemento Update (Atualizar);
  * Cada tarefa terá a opção de ser excluída, removendo-a da lista e do 
localStorage. Elemento Delete (Excluir);
  * Cada tarefa concluida será riscada com line-through, removendo-a 
da lista vigênte e, inserindo-a em uma nova lista de tarefas concuidas. Elemento Update (Concluir).
  * Utilizando o localStorage para salvar as tarefas, as tarefas deverão persistir 
mesmo após o fechamento ou recarregamento da página. Persistência de Dados.

  obs: para concluir uma tarefa, é necessaário um duplo clique sobre a tarefa desejada para que ela 
  seja concluída, retirando-a da lista vigênte e colocado-a na lista concluida.
