## DESAFIO 01 - ROCKETSEAT TO.DO
### 💻 Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React.

- Adicionar uma nova tarefa
- Remover uma tarefa
- Marcar e desmarcar uma tarefa como concluída

### components/TaskList.tsx

Esse é o componente responsável por todas as funcionalidades da aplicação, é um componente simples, mas onde botaremos em prática várias partes da manipulação do estado.

Você deve criar as funcionalidades para as três funções presentes nesse arquivo, que são:

- **handleCreateNewTask**: Deve ser possível adicionar uma nova task no estado de `tasks`, com os campos `id` que deve ser gerado de forma aleatória, `title` que deve ser um texto e `isComplete` que deve iniciar como false.
- **handleToggleTaskCompletion:** Deve alterar o status de `isComplete` para uma task com um ID específico que é recebido por parâmetro.
- **handleRemoveTask:** Deve receber um ID por parâmetro e remover a task que contém esse ID do estado.

### Ferramentas utilizadas
- Utilizado o vite para criar o projeto;
- Utilizado o uuid para parar gerar a id da task;
- Utilizado o Sass para estilização do projeto;
- ESlint, utilizando o eslint e prettier para formatação do projeto;

### Iniciar o Projeto
- Após clonar o projeto, rode:
```
yarn 
```
ou 
```
npm install 
```
para instalar as dependencias do projeto

Após instaldo as dependencias execute
```
yarn dev
```
ou 
```
npm run dev
```

### Projeto baseado no To.do da rocketseat
https://github.com/rocketseat-education/ignite-template-reactjs-conceitos-do-react