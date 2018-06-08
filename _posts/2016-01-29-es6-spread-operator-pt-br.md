---
layout: post
title:  "ES6: spread operator"
description: "Expanda os dados de um array sorrindo! o/"
type: Post
date: 2016-01-29
image: "https://cloud.githubusercontent.com/assets/1345662/12072840/6360f8ae-b0de-11e5-8584-b748798c95c3.jpg"
alt: "Fogos de artifício coloridos em um céu escuro"
lang: pt-br
url_en: /es6-spread-operator/
url_br: /es6-spread-operator-pt-br/
category: 'javascript'
---

O carinha *spread* nos permite extrair/expandir dados de um array agilizando a nossa vida. Confuso? Acho que não consegui explicar. Vamos à prática. Imaginemos os seguintes arrays:

```js
let mortalKombat = ['Scorpion', 'Sub Zero', 'Liu Kang'];
let newCharacters = ['Reptile', 'Kitana'];
```

Se tivéssemos que adicionar os novos *lutadores* ao *array* principal, poderíamos tentar algo assim:

```js
mortalKombat.push(newCharacters);

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', ['Reptile', 'Kitana']]
```

Adicionou mas não ficou do jeito que queríamos. Teríamos então que tratar isso antes, algo mais ou menos assim:

```js
newCharacters.forEach(function(fighter) {
  mortalKombat.push(fighter);
});

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', 'Reptile', 'Kitana']
```

O operador *spread* chega *chutando a porta* e deixando tudo bonitão.

```js
mortalKombat.push(...newCharacters);

console.log(mortalKombat);
// ['Scorpion', 'Sub Zero', 'Liu Kang', 'Reptile', 'Kitana']
```

[Aqui](http://jsbin.com/cubiko/edit?js,console) você encontra um JS Bin com os exemplos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
