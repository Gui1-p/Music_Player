# Music Player - Web 🎵

Este é um projeto de um reprodutor de música responsivo desenvolvido para fins de estudo das tecnologias fundamentais do desenvolvimento web: **HTML5, CSS3 e JavaScript**. O projeto simula as funcionalidades de um player moderno, permitindo a gestão de uma playlist de forma dinâmica.

## 🚀 Funcionalidades

* **Controle de Reprodução:** Funções de Play e Pause alternáveis que controlam o elemento de áudio.
* **Navegação:** Botões para avançar para a próxima música ou retornar à anterior na lista.
* **Modo Aleatório (Shuffle):** Algoritmo implementado para embaralhar a ordem da playlist dinamicamente.
* **Repetição (Repeat):** Opção de repetir a faixa atual automaticamente ao finalizar a execução.
* **Barra de Progresso Interativa:** Visualização do tempo decorrido e total, permitindo clicar na barra para saltar para pontos específicos da música.
* **Interface Dinâmica:** Atualização automática das capas, nomes das músicas e artistas conforme a faixa selecionada.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica dos elementos da interface.
* **CSS3:** Estilização com Flexbox, gradientes de fundo e variáveis para o progresso da barra.
* **JavaScript (ES6):** Manipulação intensiva do DOM, controle de eventos de áudio e lógica de estados da aplicação.
* **Bootstrap Icons:** Biblioteca de ícones externa integrada via CDN para os botões de controle.

## 📂 Estrutura do Projeto

* **`index.html`: Estrutura principal da página.
* **`style.css`: Estilização e layout responsivo.
* **`script.js`: Lógica de funcionamento, incluindo o gerenciamento da playlist e funções de controle.
* **`.gitignore`: Configurado para ignorar arquivos de mídia pesados (`.mp3`, `.wav`, `.jpg`, `.png`).

## ⚙️ Como executar

** 1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/music-player.git](https://github.com/seu-usuario/music-player.git)
   ```

* ** Como o projeto utiliza um .gitignore para arquivos de áudio, adicione seus arquivos .mp3 e imagens .jpg na raiz ou nas pastas referenciadas no código.

* **Certifique-se de que os nomes dos arquivos coincidam com os objetos no script.js (ex: One, Man_in_the_box, EnterSandman).

* **Abra o arquivo index.html em seu navegador.

## 🧠 Aprendizados Consolidados

* **Gerenciamento de eventos de áudio (timeupdate, ended, loadedmetadata).

* **Manipulação de estilos CSS através do JavaScript para criar barras de progresso dinâmicas.

* **Lógica de embaralhamento de arrays e persistência de estados (shuffle e repeat).
