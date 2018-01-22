---
layout: post
title:  "ES6: arrow functions em 5 minutos"
description: "5 minutos pra entender como utilizar as arrow functions."
type: Post
date: 2016-01-12
image: "https://cloud.githubusercontent.com/assets/1345662/12060339/882c0d30-af54-11e5-9f10-79da8f4f1f50.jpg"
alt: "Caminho de uma estrada coberta de neve em volta"
lang: pt-br
url_en: /arrow-functions/
url_br: /es6-arrow-functions/
---

As *arrow functions* a princípio podem parecer confusas (experiência própria *(◕︵◕)*), mas depois de um tempo, é possível entender sua sintaxe mais curta e a mágica do escopo do `this`.

## Vários parâmetros

Sem *arrow functions*. 

```js
var oldWay = function(name, nickname) {
  return 'My name is ' + nickname + ', ' + name;
};

console.log( oldWay('James Bond', 'Bond') );
// My name is Bond, James Bond
```

Com *arrow functions*.

```js
let newWay = (name, nickname) => {
  return 'My name is ' + nickname + ', ' + name;
};

console.log( newWay('James Bond', 'Bond') );
// My name is Bond, James Bond
```

Ou de uma maneira um pouco mais curta.

```js
let newWay2 = (name, nickname) => 'My name is ' + nickname + ', ' + name;

console.log( newWay2('James Bond', 'Bond') );
// My name is Bond, James Bond
```

## Apenas um parâmetro

Sem *arrow functions*.

```js
var one = function(what) {
  return 'I ' + what + ' you';
};

console.log( one('hate') );
// I hate you
```

Com *arrow functions*.

```js
var oneNew = what => 'I ' + what + ' you';

console.log( oneNew('hate') );
// I hate you
```

## Escopo

Sem *arrow functions*.

```js
var sandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    var that = this; // (◕︵◕)
    window.setTimeout( function () {
      console.log( that.prepare() );
    }, 100 );
  }
  
};

// sandwich.make();
// I want a sandwich with integral bread and white cheese
```

Com *arrow functions*.

```js
let newSandwich = {
  bread: 'integral',
  cheese: 'white',
  
  prepare: function() {
    return 'I want a sandwich with ' + this.bread + ' bread and ' + this.cheese + ' cheese';
  },
  
  make: function() {
    window.setTimeout( () => console.log(this.prepare()), 100 );
  }
  
};

// newSandwich.make();
// I want a sandwich with integral bread and white cheese
```

## Exemplo com `map`

Sem *arrow functions*.

```js
var sample = [1, 2, 3, 4, 5];

var double = sample.map(function(item) {
  return item * 2;
});

// console.log(double);
// [2, 4, 6, 8, 10]
```

Com *arrow functions*.

```js
let sample = [1, 2, 3, 4, 5];

let newDouble = sample.map(item => item * 2);

// console.log(newDouble);
// [2, 4, 6, 8, 10]
```

[Aqui](http://jsbin.com/nogobe/edit?js,console) você encontra um JS Bin com os exemplos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
