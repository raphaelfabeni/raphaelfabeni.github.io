---
layout: post
title:  "Brincando com Jasmine"
description: ""
type: Post
date: 2015-03-05
image: 'brincando-jasmine.jpg'
alt: '----'
---

Você testa seu código **JS**?  Se a resposta foi não, nunca é tarde pra começar.

## O tal do **Jasmine**

**Jasmine** é um framework *behavior-driven development* para testar nossos paranauês em *JavaScript.* Uma das coisas legais que particularmente achei dele é que a sintaxe é bem intuitiva o que faz com que escrever testes se torne uma tarefa fácil.

### Na prática..

Mostrar na prática é bem melhor que só teoria. Então vamos lá.. Primeiro faça o download da [última versão do Jasmine](https://github.com/jasmine/jasmine/tree/master/dist) (recomendo seguir o [passo a passo deles no GitHub](https://github.com/jasmine/jasmine#installation), super tranquilo).

Eu criei uma pasta específica para essa brincadeira, e dentro dela criei duas pastas: uma com o nome *jasmine* onde joguei todos os arquivos do *framework* e outra chamada *hello* onde vamos jogar os arquivos desse primeiro exemplo rápido. 

Dentro dessa pasta vamos ter 3 arquivos:

* *index.html* => para podermos visualizar o resultado dos nossos testes;
* *hello.js* => nossa mágica;
* *hello.spec.js* => nossos testes.

**Um adendo:** essa foi uma organização só a fim de exemplo, geralmente tudo relacionado a teste fica em uma pasta separada (como por exemplo *tests*) e seu arquivo `.js` da aplicação não é movido pra lá, ele permanece no local de origem. 

Então temos nosso menino `.index.html`:

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Teste</title>
  <link rel="shortcut icon" type="image/png" href="../jasmine/lib/jasmine-2.0.0/jasmine_favicon.png">
  <link rel="stylesheet" type="text/css" href="../jasmine/lib/jasmine-2.0.0/jasmine.css">

  <script type="text/javascript" src="../jasmine/lib/jasmine-2.0.0/jasmine.js"></script>
  <script type="text/javascript" src="../jasmine/lib/jasmine-2.0.0/jasmine-html.js"></script>
  <script type="text/javascript" src="../jasmine/lib/jasmine-2.0.0/boot.js"></script>

  <script src="hello.js"></script>
  <script src="helloSpec.js"></script>
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

Nosso teste ficaria assim:

Aí temos um exemplo simples de arquivo `JavaScript`:

{% highlight js %}
describe('Hello :)', function() {

  var hello = new Hello();

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });
  
});
{% endhighlight %}

Destrinchando nosso arquivo de teste:

* `describe` => é o que chamamos de *suite*. Seu nome, no caso *Hello)*, geralmente define um componente da sua aplicação (pode ser uma *classe*, uma função ou qualquer outra coisa). Aceita 2 argumentos: uma *string* que é o nome da *suite* e uma função que é o bloco de código que implementamos o teste.
* `it()` => resumidamente é uma fußnção que diz o que um pequeno pedaço do seu componente deve fazer. No exemplo, demos uma descrição do teste (*says my name*), e esperamos (analogia com o *expect*) que o método `sayHi`, quando chamado com o argumento *Fabeni*, retorne uma determinada *string* (*my name is Fabeni and I'm learning Jasmine!*).

Se abrirmos nosso `index.html`, vamos ter algo assim:

<figure class="loading">
    <img src="{{ site.baseurl}}build/img/posts/samples/jasmine-ok.png" alt="Print da tela mostrando que o teste passou">
    <figcaption>Nosso teste passou! \o/</figcaption>
</figure>







