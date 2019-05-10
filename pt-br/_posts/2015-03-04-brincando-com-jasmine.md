---
layout: post
title:  "Brincando com Jasmine"
description: "Conheça um pouco do Jasmine: um framework bem intuitivo para testes em JavaScript."
type: Post
date: 2015-03-04
image: 'https://cloud.githubusercontent.com/assets/1345662/11458108/85179d3e-96a0-11e5-8382-0487118ad9f6.jpg'
alt: 'Imagem mostra relógios de uma máquina antiga de uma fábrica'
lang: pt-br
category: 'javascript'
permalink: 'brincando-com-jasmine/'
ref: 'jasmine'
---

Você testa seu código **JS**?  Se a resposta foi não, nunca é tarde pra começar. Não vou me alongar aqui falando o porque tanta gente fala de fazer testes, existem milhares de posts sobre isso. Vou direto ao assunto: o brother *Jasmine*.

## O tal do **Jasmine**

**Jasmine** é um framework *behavior-driven development* para testar nossos paranauês em *JavaScript.* Uma das coisas legais que particularmente achei dele é que a sintaxe é bem intuitiva o que faz com que escrever testes se torne uma tarefa fácil.

### Na prática..

Mostrar na prática é bem melhor que só teoria. Então vamos lá.. Primeiro faça o download da [última versão do Jasmine](https://github.com/jasmine/jasmine/releases) (recomendo seguir o [passo a passo deles no GitHub](https://github.com/jasmine/jasmine#installation), super tranquilo).

Pra essa brincadeira criei duas pastas: uma com o nome `jasmine` onde joguei todos os arquivos do *framework* e outra chamada `hello` onde vamos jogar os arquivos desse primeiro exemplo rápido. Dentro dessa pasta vamos criar uma pasta chamada `spec` onde deixaremos os arquivos relacionados aos testes. Nossa pasta `hello` seria assim:

* *hello.js* => nossa mágica;
* *spec/index.html* => para podermos visualizar o resultado dos nossos testes;
* *spec/hello.spec.js* => nossos testes.

E a estrutura completa ficaria assim:

{% gist 1313a915f45ebcbcfd84f815813a2db9 %}

**Um adendo:** essa foi uma organização só a fim de exemplo.

Então temos nosso menino `spec/index.html`:

{% gist 1804dffb87943bdf8f2148f8b99c0cdd %} 

Aí temos um exemplo simples de arquivo `JavaScript`:

{% gist 9ffbcf759aa578a9d23763f0c44bbb1d %}

Observando o arquivo anterior, conseguimos já visualizar o que acontece certo? Mentalmente já esperamos que ao criarmos um **objeto** utilizando `Hello` e chamarmos o **método** `sayHy`, deve-se retornar uma **string** específica com o **argumento** que passarmos.

Passando pra parte testável da coisa. Vamos lá, poderíamos implementar nosso teste assim:

{% gist d28a0c3976b88646396eeda691388fa9 %}

Destrinchando nosso arquivo de teste:

* `describe` => é o que chamamos de *suite*. Seu nome, no caso *Hello*, geralmente define um componente da sua aplicação (pode ser uma *classe*, uma função ou qualquer outra coisa). Aceita 2 argumentos: uma *string* que é o nome da *suite* e uma função que é o bloco de código que implementamos o teste.
* `it()` => resumidamente é uma função que diz o que um pequeno pedaço do seu componente deve fazer. No exemplo, demos uma descrição do teste (*says my name*), e esperamos (analogia com o *expect*) que o método `sayHi`, quando chamado com o argumento *Fabeni*, retorne uma determinada *string* (*my name is Fabeni and I'm learning Jasmine!*).

Poderíamos também mudar algumas coisas na organização do código e adicionarmos a função `beforeEach`:

{% gist 05b6347183553c3ddf81b25f293950cd %}

A função `beforeEach` como o próprio nome diz, roda uma vez antes de cada `spec` do `describe` e, também existe o `afterEach` que tem o papel inverso e roda uma vez depois de cada `spec`.

Se abrirmos nosso `index.html` para rodarmos nossos testes, teremos algo assim:

<figure class="loading">
    <img src="https://cloud.githubusercontent.com/assets/1345662/11458112/851b776a-96a0-11e5-9702-2a887ca36753.png" alt="Print da tela mostrando que o teste passou">
    <figcaption>Nosso teste passou! \o/</figcaption>
</figure>

É possível também usar o *Jasmine* para fazer testes em aplicações com *Node.js* através do [Jasmine Node](https://github.com/mhevery/jasmine-node). Depois de instalado, precisaríamos fazer pequenos ajustes no nosso código para testá-lo:

Nosso arquivo `hello.js` ficaria assim:

{% gist 14451fa6ba86d9484a7e0724ec286dc3 %}

E nosso arquivo de testes `hello.spec.js` ficaria assim:

{% gist ec699d7a7f35753b89a4376c50331148 %}

Eaí é só rodarmos nosso teste via terminal:

<figure class="loading">
  <img src="https://cloud.githubusercontent.com/assets/1345662/11458110/85197528-96a0-11e5-97a2-c6dfed6589d2.gif" alt="Gif animado mostrando o teste do jasmine node">
</figure>

## Testes antes?

No exemplo anterior primeiro desenvolvemos nosso código e depois escrevemos nosso teste. No *TDD* ocorre o inverso: primeiro escreveríamos os testes e depois o nosso código. Achou estranho? Vamos tentar brincar.

Comecemos de algo básico: imagine que queremos ter uma função simples que aceita 2 números como argumentos e nos retorna o resultado da adição de ambos. Poderíamos fazer um teste simples assim:

{% gist 37a5c6a5cd391643af20efecd1ed6268 %}

No teste acima, quebramos nosso componente em 2 testes específicos:

* primeiro esperamos que ao passarmos os números *5* e *3*, ele nos retorne *8*, fazendo a soma normalmente.
* segundo, esperamos que se apenas um argumento for passado, esse argumento seja somado a ele mesmo, ou seja, se apenas o número *5* for passado, o resultado deve ser *10*, vindo da operação *5 + 5*.

**Obs.:** Poderíamos ter mais um monte de testes, como verificar se o argumento passado é realmente um número, mas deixemos apenas esses 2 para o exemplo.

Tendo isso em mente, podemos partir pro nosso código:

{% gist c36997a8b364e113d947793fc2fb8b33 %}

Com certeza, de cara já poderíamos imaginar algo assim certo? No entanto como é de se esperar isso vai nos retornar um erro quando rodarmos os testes.

<figure class="loading">
  <img src="https://cloud.githubusercontent.com/assets/1345662/11458111/851a90d4-96a0-11e5-919b-322f79dcc44c.png" alt="Print da tela mostrando que os testes quebraram">
</figure>

Nossos testes quebraram e conseguimos ver exatamente onde: *Calc 1 argument - should calculate the addition using the argument twice*. Isso acontece pois não fizemos nenhum tratamento na nossa função caso recebessemos apenas um argumento. Vamos lá então:

{% gist e6a949aca6edf5b102ea96f578cab27b %}

Agora se rodarmos os testes novamente:

<figure class="loading">
  <img src="https://cloud.githubusercontent.com/assets/1345662/11458109/8519037c-96a0-11e5-8e85-2c36af470449.png" alt="Print da tela mostrando que os testes passaram">
</figure>

Acho que é isso. No próximo post, vou tentar escrever um pouco sobre os *matchers* do *Jasmine* que é uma outra parte bem legal do framework. Deixo aqui meu **valeu** ao [Weslley Araujo](https://twitter.com/_weslleyaraujo) pela revisão do conteúdo!
