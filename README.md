Parodify
Parodify é um site web que simula a experiência de uso do Spotify, onde os usuários podem tocar músicas diretamente através da interface do site. Este projeto foi desenvolvido com o objetivo de replicar as principais funcionalidades do Spotify, incluindo a busca por músicas, criação de playlists, e controle de reprodução.

Funcionalidades Principais
Busca de Músicas: Permite que os usuários procurem por suas músicas favoritas.
Reprodução de Músicas: Os usuários podem tocar, pausar e pular músicas diretamente no navegador.
Interface de Usuário Interativa: Uma interface que simula a experiência do Spotify, com controles de reprodução e listas de músicas.
Integração Contínua
Este projeto está configurado com integração contínua utilizando GitHub Actions. Sempre que houver um push ou pull request para o repositório, os testes automatizados são executados para garantir a qualidade do código.

O workflow de CI está configurado para:

Instalar as dependências do projeto.
Executar testes com Playwright para garantir que as funcionalidades principais estejam funcionando corretamente.
Gerar relatórios dos testes que podem ser acessados via GitHub.
Comandos para Executar o Projeto
Para executar o projeto localmente, siga os passos abaixo:

1. Instalar as Dependências
Certifique-se de que você tem o Node.js instalado em sua máquina, então execute:

bash
Copiar código
npm install
2. Executar o Projeto
Para rodar o projeto localmente, utilize o comando:

bash
Copiar código
npm start
3. Executar os Testes
O projeto inclui testes automatizados para garantir a qualidade. Para executá-los, utilize:

bash
Copiar código
npx playwright test
4. Executar os Testes com Interface de Usuário
Se você preferir visualizar os testes enquanto eles são executados, utilize:

bash
Copiar código
npx playwright test --ui

Aqui está um exemplo de como a interface do Parodify se parece:

![2024-08-18_12-30](https://github.com/user-attachments/assets/8336d847-a11e-4664-ac79-0d0fed342150)

