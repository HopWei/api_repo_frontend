README.md para o Repositório do Backend (API Flask)
markdown
Copiar código
# API Flask para To-do List

Uma API RESTful desenvolvida em Flask para gerenciar uma lista de tarefas (To-do List), incluindo as operações CRUD com persistência de dados em PostgreSQL. O projeto está estruturado em camadas (routes, services e repository) e utiliza Docker para facilidade de deploy e setup.

### Tecnologias Utilizadas
- Python
- Flask
- PostgreSQL
- Docker

### Funcionalidades
- **Criar tarefa**: Criação de novas tarefas com título e descrição.
- **Listar tarefas**: Retorna todas as tarefas armazenadas no banco de dados.
- **Atualizar tarefa**: Atualização de título e descrição das tarefas existentes.
- **Excluir tarefa**: Remoção de tarefas por ID.

### Estrutura de Pastas

```plaintext
my_api_project/
│
├── app/
│   ├── routes/         # Define as rotas da API
│   ├── services/       # Lógica de negócios
│   ├── repository/     # Comunicação com o banco de dados
│   └── __init__.py     # Inicialização da aplicação Flask
│
├── config.py           # Configurações da aplicação
├── Dockerfile          # Configuração do container Docker
├── docker-compose.yml  # Orquestração com Docker Compose
└── requirements.txt    # Dependências do Python
Pré-requisitos
Docker e Docker Compose instalados
Python 3.8 ou superior
Instalação e Configuração
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/my_api_project.git
cd my_api_project
Crie um arquivo .env com as variáveis de ambiente:

plaintext
Copiar código
DATABASE_URL=postgresql://usuario:senha@db:5432/nome_do_banco
SECRET_KEY=sua_chave_secreta
Construa e inicie os containers:

bash
Copiar código
docker-compose up --build
Acesse a API em http://localhost:5000.

Endpoints da API
POST /api/tarefas: Criar nova tarefa
GET /api/tarefas: Listar todas as tarefas
PUT /api/tarefas/<id>: Atualizar tarefa existente
DELETE /api/tarefas/<id>: Excluir tarefa
Contribuindo
Contribuições são bem-vindas! Para contribuir, siga as etapas abaixo:

Faça um fork do projeto
Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
Faça commit das suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Faça push para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request
yaml
Copiar código

---

## README.md para o Repositório do Frontend (React)

```markdown
# To-do List Frontend em React

Frontend para uma aplicação de To-do List desenvolvida em React, que consome uma API Flask. A aplicação permite ao usuário adicionar, visualizar, atualizar e remover tarefas.

### Tecnologias Utilizadas
- React
- Axios (para consumir a API)
- CSS (para estilização)
- Docker

### Funcionalidades
- **Criar tarefa**: Permite criar novas tarefas com título e descrição.
- **Listar tarefas**: Exibe todas as tarefas.
- **Atualizar tarefa**: Permite a edição das tarefas.
- **Excluir tarefa**: Remove uma tarefa por ID.

### Estrutura de Pastas

```plaintext
my_todo_app/
│
├── src/
│   ├── components/        # Componentes da aplicação (TaskList, TaskForm, etc.)
│   ├── services/          # Arquivo API para conexão com a API Flask
│   ├── App.js             # Componente principal
│   ├── index.js           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais
│
├── Dockerfile             # Configuração do container Docker
├── docker-compose.yml     # Orquestração com Docker Compose
└── package.json           # Dependências e scripts do projeto
```

Pré-requisitos

Docker e Docker Compose instalados
Node.js e npm (caso queira rodar sem Docker)
Instalação e Configuração
Clone o repositório:
```
git clone https://github.com/seu-usuario/my_todo_app.git
cd my_todo_app
```

Crie um arquivo .env com o endpoint da API:

plaintext
Copiar código
REACT_APP_API_URL=http://localhost:5000/api
Construa e inicie os containers:

```
docker-compose up --build
Acesse a aplicação em http://localhost:3000.
```

Scripts Disponíveis

npm start: Roda a aplicação em modo de desenvolvimento.
npm test: Roda os testes.
npm run build: Compila o projeto para produção.


Contribuindo
Contribuições são bem-vindas! Para contribuir, siga as etapas abaixo:

Faça um fork do projeto

Crie uma nova branch
```
(git checkout -b feature/nova-funcionalidade)
```
Faça commit das suas mudanças 
```
(git commit -m 'Adiciona nova funcionalidade')
```
Faça push para a branch 
```
(git push origin feature/nova-funcionalidade)
```
Abra um Pull Request
