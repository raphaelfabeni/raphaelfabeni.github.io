---
layout: post
title:  "Brincando com Jasmine"
description: "Conheça um pouco do Jasmine: um framework bem intuitivo para testes em JavaScript."
type: Post
date: 2015-03-04
image: 'brincando-jasmine.jpg'
alt: 'Imagem mostra relógios de uma máquina antiga de uma fábrica'
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

{% highlight html %}
├── jasmine (todos os arquivos do framework)
└── hello
    ├── hello.js
    └── spec
        ├── index.html
        └── hello.spec.js
{% endhighlight %}

**Um adendo:** essa foi uma organização só a fim de exemplo.

Então temos nosso menino `spec/index.html`:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Jasmine</title>
  <link rel="shortcut icon" type="image/png" href="../../jasmine/lib/jasmine-2.0.0/jasmine_favicon.png">
  <link rel="stylesheet" type="text/css" href="../../jasmine/lib/jasmine-2.0.0/jasmine.css">

  <script type="text/javascript" src="../../jasmine/lib/jasmine-2.0.0/jasmine.js"></script>
  <script type="text/javascript" src="../../jasmine/lib/jasmine-2.0.0/jasmine-html.js"></script>
  <script type="text/javascript" src="../../jasmine/lib/jasmine-2.0.0/boot.js"></script>

  <script src="../hello.js"></script>
  <script src="hello.spec.js"></script>
</head>
<body>
</body>
</html>
{% endhighlight %}

Aí temos um exemplo simples de arquivo `JavaScript`:

{% highlight js %}
var Hello = function() {};

Hello.prototype.sayHi = function(name) {
  return 'my name is ' + name + ' and I\'m learning Jasmine!';
};
{% endhighlight %}

Observando o arquivo anterior, conseguimos já visualizar o que acontece certo? Mentalmente já esperamos que ao criarmos um **objeto** utilizando `Hello` e chamarmos o **método** `sayHy`, deve-se retornar uma **string** específica com o **argumento** que passarmos.

Passando pra parte testável da coisa. Vamos lá, poderíamos implementar nosso teste assim:

{% highlight js %}
describe('Hello :)', function() {

  var hello = new Hello();

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });

});
{% endhighlight %}

Destrinchando nosso arquivo de teste:

* `describe` => é o que chamamos de *suite*. Seu nome, no caso *Hello*, geralmente define um componente da sua aplicação (pode ser uma *classe*, uma função ou qualquer outra coisa). Aceita 2 argumentos: uma *string* que é o nome da *suite* e uma função que é o bloco de código que implementamos o teste.
* `it()` => resumidamente é uma função que diz o que um pequeno pedaço do seu componente deve fazer. No exemplo, demos uma descrição do teste (*says my name*), e esperamos (analogia com o *expect*) que o método `sayHi`, quando chamado com o argumento *Fabeni*, retorne uma determinada *string* (*my name is Fabeni and I'm learning Jasmine!*).

Poderíamos também mudar algumas coisas na organização do código e adicionarmos a função `beforeEach`:

{% highlight js %}
describe('Hello :)', function() {

  var hello;

  beforeEach(function() {
    hello = new Hello();
  });

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });

});
{% endhighlight %}

A função `beforeEach` como o próprio nome diz, roda uma vez antes de cada `spec` do `describe` e, também existe o `afterEach` que tem o papel inverso e roda uma vez depois de cada `spec`.

Se abrirmos nosso `index.html` para rodarmos nossos testes, teremos algo assim:

<figure class="loading">
    <img src="{{ site.baseurl}}build/img/posts/samples/jasmine-ok.png" alt="Print da tela mostrando que o teste passou">
    <figcaption>Nosso teste passou! \o/</figcaption>
</figure>

É possível também usar o *Jasmine* para fazer testes em aplicações com *Node.js* através do [Jasmine Node](https://github.com/mhevery/jasmine-node). Depois de instalado, precisaríamos fazer pequenos ajustes no nosso código para testá-lo:

Nosso arquivo `hello.js` ficaria assim:

{% highlight js %}
var Hello = function() {};

Hello.prototype.sayHi = function(name) {
  return 'my name is ' + name + ' and I\'m learning Jasmine!';
};

module.exports = Hello;
{% endhighlight %}

E nosso arquivo de testes `hello.spec.js` ficaria assim:

{% highlight js %}
var Hello =  require('./hello.js');

describe('Hello', function() {

  var hello = new Hello();

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });

});
{% endhighlight %}

Eaí é só rodarmos nosso teste via terminal:

<figure class="loading">
    <img src="{{ site.baseurl}}build/img/posts/samples/jasmine-node-hello.gif" alt="Gif animado mostrando o teste do jasmine node">
</figure>

## Testes antes?

No exemplo anterior primeiro desenvolvemos nosso código e depois escrevemos nosso teste. No *TDD* ocorre o inverso: primeiro escreveríamos os testes e depois o nosso código. Achou estranho? Vamos tentar brincar.

Comecemos de algo básico: imagine que queremos ter uma função simples que aceita 2 números como argumentos e nos retorna o resultado da adição de ambos. Poderíamos fazer um teste simples assim:

{% highlight js %}
describe('Calc', function() {

  it('should calculate the addition of two numbers', function() {
    expect(add(5,3)).toEqual(8);
  });

  it('1 argument - should calculate the addition using the argument twice', function() {
    expect(add(5)).toEqual(10);
  });

});
{% endhighlight %}

No teste acima, quebramos nosso componente em 2 testes específicos:

* primeiro esperamos que ao passarmos os números *5* e *3*, ele nos retorne *8*, fazendo a soma normalmente.
* segundo, esperamos que se apenas um argumento for passado, esse argumento seja somado a ele mesmo, ou seja, se apenas o número *5* for passado, o resultado deve ser *10*, vindo da operação *5 + 5*.

**Obs.:** Poderíamos ter mais um monte de testes, como verificar se o argumento passado é realmente um número, mas deixemos apenas esses 2 para o exemplo.

Tendo isso em mente, podemos partir pro nosso código:

{% highlight js %}
function add(x, y) {
  return x + y;
}
{% endhighlight %}

Com certeza, de cara já poderíamos imaginar algo assim certo? No entanto como é de se esperar isso vai nos retornar um erro quando rodarmos os testes.

<figure class="loading">
    <img src="{{ site.baseurl}}build/img/posts/samples/jasmine-erro.png" alt="Print da tela mostrando que os testes quebraram">
</figure>

Nossos testes quebraram e conseguimos ver exatamente onde: *Calc 1 argument - should calculate the addition using the argument twice*. Isso acontece pois não fizemos nenhum tratamento na nossa função caso recebessemos apenas um argumento. Vamos lá então:

{% highlight js %}
function add(x, y) {
  y ? return x + y; : return x + x;
}
{% endhighlight %}

Agora se rodarmos os testes novamente:

<figure class="loading">
    <img src="{{ site.baseurl}}build/img/posts/samples/jasmine-ok-2.png" alt="Print da tela mostrando que os testes passaram">
</figure>

Acho que é isso. No próximo post, vou tentar escrever um pouco sobre os *matchers* do *Jasmine* que é uma outra parte bem legal do framework. Deixo aqui meu **valeu** ao [Weslley Araujo](https://twitter.com/_weslleyaraujo) pela revisão do conteúdo!

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.









