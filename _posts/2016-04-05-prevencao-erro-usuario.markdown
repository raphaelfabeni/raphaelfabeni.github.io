---
layout: post
title: Prevenindo o erro do usuário
description: Antecipe um possível erro do usuário e torne a experiência mais agradável
type: Post
image: "https://cloud.githubusercontent.com/assets/1345662/14289662/365c31fe-fb32-11e5-9da0-20ff8216417e.jpg"
alt: "Imagem mostra dois pé de uma pessoa pulando em uma poça de água"
lang: pt-br
url_en: /user-error-prevention/
url_br: /prevencao-erro-usuario/
---

<figure class="thumb-right loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/14282421/9b6c48c2-fb14-11e5-8823-08ce793e60e1.png" alt="Print de prevenção de erro do usuário no Gmail, onde ao escrever a palavra anexo no corpo de texto e tentar enviar o e-mail, o Gmail alerta sobre um possível erro.">
</figure>

Mesmo que você não tenha trabalhado ou trabalhe com tecnologia ou projetos digitais, o que for, pode já ter ouvido falar das *10 heurísticas de usabilidade de Jakob Nielsen*. Resumidamente são 10 itens para a avaliação da usabilidade de um site com o objetivo de evitar erros comuns.

Um desses caras, e pra mim um dos mais legais, é o que aborda a questão da *prevenção de erros*. De forma direta: é ótimo existir uma mensagem de erro ou algo do tipo, mas imagina *que da hora* se pudéssemos evitar esses erros.

Um que me veio na cabeça e que já me ajudou diversas vezes é ao escrever um e-mail no *Gmail*. Caso tenhamos escrito a palavra *anexo* no corpo do texto e tentarmos enviar o e-mail sem nenhum arquivo anexo, um *alerta* é mostrado, perguntando se talvez tenhamos esquecido de anexar o arquivo.

Partindo desse pensamento, podemos viajar e pensar em várias coisas legais, principalmente quando lidamos com formulários e diversas validações.

## Indo mais além

Até aí falamos principalmente de ações quase que em tempo real, onde o usuário realiza determinada ação e o sistema já responde imediatamente, seja evitando o erro ou conduzindo o usuário para o caminho certo.

Mas e se pensarmos a longo prazo, quando temos por exemplo, já alguns usuários cadastrados em um sistema, app, o que for. Será que não conseguimos preveni-los de possíveis ações a serem feitas? *Ahn?! O que você tá falando cara?*

Vamos lá, nada melhor que exemplificar com um caso real e que aconteceu comigo na semana passada. Utilizo um aplicativo que pede o cadastro de alguns documentos. Ao cadastrar alguns deles, é necessário colocar uma *data de vencimento* relacionada ao documento. Até aí tudo bem. No entanto, acredito que já tenha acontecido com a maioria das pessoas, de esquecer uma possível data de vencimento ou de se atentar a ela, próxima do dia.

Resumindo: um dos documentos venceu e não percebi. Aí um belo dia fui tentar utilizar o aplicativo e não consegui justamente por isso. Atualizei o documento na hora, pois já tinha a nova versão, só não tinha cadastrado ainda. No entanto, não consegui usar o aplicativo pois demorou um tempo até que a ação do cadastro fosse validada.

**Mas o erro foi seu, não do aplicativo.** Sim, sem dúvidas. Mas, e se fôssemos um passo a frente? Já que o usuário é obrigado a colocar uma *data de vencimento*, não seria possível avisá-lo quando essa data estivesse próxima, melhorando assim um pouco a experiência? *Ei fulano, percebemos que seu documento está próximo da data de vencimento. Atualize-o e continue a usar nosso serviço.* Sei lá, algo do tipo, pra tentar passar a idéia de que o aplicativo/serviço está preocupado em manter os dados atualizados.

Pode ser uma viagem minha com certeza, pois de fato o erro de não atualizar o documento foi meu, mas eu fiquei extremamente *p...* com a situação e a primeira coisa que pensei foi: *"Pô, eles não podiam ter me avisado?"*

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.