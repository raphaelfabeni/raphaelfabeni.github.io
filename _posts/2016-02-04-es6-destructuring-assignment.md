---
layout: post
title:  "ES6: destructuring assignment"
description: "Pegando dados de um jeito mais bonito e fácil."
type: Post
date: 2016-02-04
image: "https://cloud.githubusercontent.com/assets/1345662/12071845/13d407d4-b0a9-11e5-8a14-95a3bac85cf1.jpg"
alt: "Brinquedo pebolim visto de cima com jogadores nas cores preta e amarela"
lang: pt-br
url_en: /es6-destructuring-assignment
url_br: /es6-destructuring-assignment
---

Conheci o grande *destructuring assignment* através do meu brother [Weslley Araujo](https://twitter.com/_weslleyaraujo), e confesso que achei coisa linda. Ele nada mais é que uma expressão que nos permite *pegar* dados de *objetos* ou *arrays* de uma maneira bem mais simples.

Para pegarmos uma propriedade de um objeto, poderíamos fazer algo assim:

{% highlight js %}
var movieStar = {
  name: 'James Bond',
  nickname: 'Bond',
  profession: 'Federal Agent'
};

console.log(movieStar.name);
// James Bond
{% endhighlight %}

Com o mano novo, podemos fazer algo assim: 

{% highlight js %}
var movieStar = {
  name: 'James Bond',
  nickname: 'Bond',
  profession: 'Federal Agent'
};

let { name, profession } = movieStar;

console.log(name, profession);

// James Bond
// Federal Agent
{% endhighlight %}

##  Com arrays

Se quiséssemos, por exemplo, pegar o primeiro item do `array`, poderíamos fazer algo do tipo:

{% highlight js %}
var mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

console.log(mortalKombat[0]);
// Scorpion
{% endhighlight %}

Com o mano *destructuring*, podemos fazer algo assim:

{% highlight js %}
let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [user1, user2] = mortalKombat;

console.log(user1, user2);
// Scorpion
// Liu Kang
{% endhighlight %}

Ainda é possível, brincar um pouco mais:

{% highlight js %}
let mortalKombat = ['Scorpion', 'Liu Kang', 'Sub Zero', 'Johnny Cage'];

let [userA, , userB] = mortalKombat;
let [user, ...users] = mortalKombat;

console.log(userA, userB);
// Scorpion
// Sub Zero

console.log(user, users);
// Scorpion
// ['Liu Kang', 'Sub Zero', 'Johnny Cage']
{% endhighlight %}

## Usando ao importar arquivos

Uma coisa muito legal de se usar o *mano* **destructuring assignment** é quando precisamos importar *coisas* para os nossos arquivos. Imaginemos que tenhamos um arquivo genérico, como um arquivo *helpers*, algo mais ou menos assim:

{% highlight js %}
// helpers.js
export function getNext(arr) {
  return (arr.length);
};

export function makeMoney() {
  ...
};
...
{% endhighlight %}

Legal! Agora em um outro arquivo, vamos imaginar que só iremos precisar dessas duas funções, e não do arquivo inteiro. Podemos fazer algo assim:

{% highlight js %}
import { getNext, makeMoney } from '../helpers';

// Agora temos acesso as duas funções no nosso arquivo
// getNext([1, 2, 3]);
// makeMoney();
{% endhighlight %}

## Aplicando ao `forEach`

Podemos também utilizar no famoso `forEach`. Imaginemos que tenhamos o seguinte cara:

{% highlight js %}
var movieStars = [
  {
    name: 'James Bond',
    nickname: 'Bond',
    profession: 'Federal Agent'
  },
  {
    name: 'Dominic Toretto',
    nickname: 'Toretto',
    profession: 'Driver'
  },
  {
    name: 'John Rambo',
    nickname: 'Rambo',
    profession: 'Killer'
  }
];
{% endhighlight %}

Com isso, poderíamos fazer algo assim:

{% highlight js %}
movieStars.forEach(function(star) {
  console.log(star.nickname);
});

// Bond
// Toreto
// Rambo
{% endhighlight %}

Utilizando um combo de [arrow-functions](/es6-arrow-functions) e *destructuring*, poderíamos fazer algo assim: 

{% highlight js %}
movieStars.forEach( ({nickname}) => console.log(nickname) );

// Bond
// Toreto
// Rambo
{% endhighlight %}

## Criando objetos

Podemos criar um objeto assim:

{% highlight js %}
let username = 'Raphael Fabeni';
let nickname = 'Fabeni';

var oldGuy =  {
  username: username,
  nickname: nickname
};

console.log(oldGuy);
// {
//   nickname: "Fabeni",
//   username: "Raphael Fabeni"
// }
{% endhighlight %}

Dá pra ficar mais legal. *◕‿◕*

{% highlight js %}
let username = 'Raphael Fabeni';
let nickname = 'Fabeni';

let newGuy = { username, nickname };

console.log(newGuy);
// {
//   nickname: "Fabeni",
//   username: "Raphael Fabeni"
// }
{% endhighlight %}

[Aqui](http://jsbin.com/qejoyo/edit?js,console) você encontra um JS Bin com os exemplos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
