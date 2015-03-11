---
layout: post
title:  "Dicas de bolso de JavaScript"
description: "Dicas rápidas de JavaScript, uma linguagem beeem legal mas cheia de pegadinhas do malandro."
type: Post
date: 2015-03-26
image: 'js-tips.jpg'
alt: 'Cadeira de madeira vermelha em um quintal coberto de neve'
---

## Guarde o tamanho do array

Com nossos brothers loops `for`, conseguimos iterar em arrays ou também em objetos semelhantes a arrays. Semelhantes? Como assim!? Por exemplo os objetos `arguments` e `HTMLCollection`. Provavelmente você já deve ter se deparado com um loop `for` (já deve ter escrito alguns):

{% highlight js %}
for(var i = 0; i < arrayFabeni.length; i++) {
    // magic
}
{% endhighlight %}

De bate pronto, conseguimos perceber algo não tão bacana no código acima. O comprimento (`length`) do array é acessado em toda iteração do loop. Isso não fica tão legal quando por exemplo, o objeto é um `HTMLCollection`. Lembra o que são esses caras? São os caras que são retornados quando a gente chama:

* `getElementsByName()`
* `getElementsByClassName()`
* `getElementsByTagName()`

Tá! Legal! Mas eaí né?! A zica mesmo é que toda vez que a gente itera sobre esses caras significa que estamos consultando o nosso *DOM* ao vivo e a cores, e a *toda hora*, o que não é nada bacana.

Com base nisso, uma solução que podemos chegar seria *guardarmos* o comprimento do array; algo parecido com isso: 

{% highlight js %}
for(var i = 0, max = arrayFabeni.length;  i < max; i++) {
    // magic
}
{% endhighlight %}

O que fizemos acima foi armazenar o valor da propriedade `length`, evitando assim ter que calculá-la a cada iteração do loop.puta m

## Verifique se a propriedade pertence àquele objeto

Além do nosso amigo do exemplo anterior temos o loop `for-in` que usamos pra iterar em objetos. Uma coisa bacana de se fazer e que pode evitar que algo que você não queira aconteça, é usar o método `hasOwnProperty()`. Esse método simplesmente vai filtrar apenas as propriedades do objeto em si, excluindo as propriedades herdadas pelo `prototype`.

Um exemplo rápido:

{% highlight js %}
var burger = {
    queijo: 'cheddar',
    pao: 'integral',
    hamburguer: 'picanha',
    molho: 'barbecue'
};
{% endhighlight %}

Aí em uma parte obscura, aparece algo que adiciona uma propriedade a todos os objetos.

{% highlight js %}
if(!Object.prototype.feijao) {
  Object.prototype.feijao = 'preto';
}
{% endhighlight %}

O que aconteceu acima foi que verificarmos se existe a propriedade `feijao` em `Object` e, caso ela não exista definimos ela com o valor `preto`. Aí que está o negócio da coisa, nosso objeto `burger`, já herda a propriedade `feijao` via `prototype`. 

Com isso, para evitarmos que `feijao` apareça quando listarmos as propriedades de `burger` (até porque feijão, na minha opinião, não combina muito com hamburguer), fazemos o seguinte: 

{% highlight js %}
for(var i in burger) {
  if(burger.hasOwnProperty(i)) {
     console.log(i + ' => ' burger[i]);
  }
}

// Resultará no seguinte:
// queijo => cheddar
// pao integral
// hamburguer picanha
// molho barbecue
{% endhighlight %}

Do contrário, caso não fizéssemos essa verificação, teríamos algo assim:

{% highlight js %}
for(var i in burger) {
    console.log(i + ' => ' burger[i]);
}

// Resultará no seguinte:
// queijo => cheddar
// pao integral
// hamburguer picanha
// molho barbecue
// feijao preto
{% endhighlight %}

## Criação de um array

Alguém usa o construtor `new Array()`? Eu particularmente não uso, mas quando vi isso, achei legal deixar registrado pois era algo que não sabia e vai que no dia a dia encontramos algum código com isso.

Se criamos um array através do `new Array()` passando argumentos entre os parênteses, temos um array com esses valores que foram passados. Algo assim:

{% highlight js %}
var megaSena = new Array(20, 29, 32, 45, 55, 58);
{% endhighlight %}

Seria o mesmo caso fizéssemos isso:

{% highlight js %}
var megaSena = [20, 29, 32, 45, 55, 58];
{% endhighlight %}

E se passássemos apenas um valor como argumento? Teríamos um array com apenas um item, certo? *Mahomenos...* Aí que vem a pegadinha do *JavaScript* malandro. Se criarmos usando a sintaxe literal, realmente temos um array com apenas um item:

{% highlight js %}
var megaSena = [20];

console.log(megaSena.length); // 1
console.log(megaSena[0]); // 20
{% endhighlight %}

Agora se criarmos usando `new Array()` o que acontece é que esse *único* valor passado como argumento vira o comprimento do array e não um item dele.

{% highlight js %}
var megaSena = new Array(20);

console.log(megaSena.length); // 20
console.log(megaSena[0]); // undefined
{% endhighlight %}

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.

## Funções imediatas e parâmetros

Já ouvimos bastante a respeito de funções imediatas, correto? Recapitulando rapidamente, ela permite que uma função seja executada assim que ela seja definida. Isso é bom principalmente pelo fato de fornecer um escopo temporário para a mágica que você vai fazer, sem a necessidade de poluir seu escopo global.

{% highlight js %}
(function() {
  // some magic
}());
{% endhighlight %}

Uma coisa bacana é que podemos passar argumentos para as funções imediatas. Podemos ter algo assim:

{% highlight js %}
(function(name, hobby) {
  console.log('Hi, my name is ' + name + ' and I like ' + hobby );
}('Fabeni', 'to travel'));

// "Hi, my name is Fabeni and I like to travel"
{% endhighlight %}

## `call` e `apply` sem medo

Esses dois caras são bem semelhantes; na verdade o que muda de um para outro é apenas um detalhe em relação ao segundo parâmetro que vai ser nosso objeto `arguments`. Resumidamente o que `call` e `apply` fazem é aplicar uma determinada função em um outro contexto e com os argumentos que você passar como valores pra eles. Não sou muito bom com as palavras, vamos tentar na prática.

