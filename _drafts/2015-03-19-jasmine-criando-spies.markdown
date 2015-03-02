---
layout: post
title:  "Jasmine: criando spies"
description: ""
type: Post
date: 2015-03-19
image: 'spies-jasmine.jpg'
alt: ''
---

Há algum tempo atrás, escrevi umas groselhas sobre *Jasmine*: [um post foi mais uma introdução sobre o framework](/brincando-com-jasmine) e o [outro post foi sobre os matchers que o Jasmine nos oferece](/jasmine-entendendo-matchers).

## O que são os `spies`?

Basicamente quando usamos *Jasmine* especificamos nos testes como nosso código deve (ou deveria) funcionar. Ao usar um `spy` conseguimos fazer com que ele *fique de olho* em partes do nosso programa, assim essa parte pode ser substituída por um `spy` (que pode ser uma *função* ou *objeto*). Confuso? Vamos lá...

