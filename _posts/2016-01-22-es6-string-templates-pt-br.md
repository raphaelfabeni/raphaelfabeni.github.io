---
layout: post
title:  "ES6: template strings"
description: "Chega de concatenar. Template strings para a nooooossa alegria"
type: Post
date: 2016-01-22
image: "https://cloud.githubusercontent.com/assets/1345662/12072297/319f5c76-b0bf-11e5-94c3-838746ffca56.jpg"
alt: "Foto mostra quatro caixas de jornais, provavelmente americanos, em bairro residencial"
lang: pt-br
url_en: /es6-string-templates/
url_br: /es6-string-templates-pt-br/
category: 'javascript'
---

Brincar com *strings* muitas vezes pode ser algo um pouco trabalhoso (pode-se ler chato também *இ_இ*). Isso se deve ao fato principalmente de termos que concatenar palavras/frases com variáveis.

```js
let author = 'Tiririca';
let word = 'Worse';

let oldMessage = word + ' than it is, it is impossible. - ' + author;

console.log(oldMessage);
// Worse than it is, it is impossible. - Tiririca
```

*Template strings* para a [nooooooooossa alegria](https://youtu.be/K02Cxo3fAC8?t=1m30s).

```js
let author = 'Tiririca';
let word = 'Worse';

let message = `${word} than it is, it is impossible. - ${author}`;

console.log(message);
// Worse than it is, it is impossible. - Tiririca
```

Meu amigo [Rafael Rinaldi](https://twitter.com/rafaelrinaldi) fez uma boa observacão: é possível utilizar qualquer tipo de expressão e não só variáveis.

```js
const obj = {
  foo: 'bar'
};

const fn = foo => foo;

console.log( `${obj.foo}` );
// bar

console.log( `${fn('aloha')}` );
// aloha
```

[Aqui](http://jsbin.com/qovino/edit?js,console) você encontra um JS Bin com os exemplos acima.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.
