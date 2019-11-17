---
layout: post
title:  Sobre código e simplicidade!
description: ''
type: Post
image: ''
alt: ''
lang: pt-br
category: 'css'
permalink: 'sobre-codigo-e-simplicidade/'
ref: 'codigo-simplicidade'
---

Já vi algumas conversas/discussões (até bem acaloradas) sobre o quanto código deveria se aproximar de _arte_. Não vou entrar muito nesse ponto, mas queria registrar um pouco do que penso sobre simplicidade e um fato curioso que me ajudou a despertar esse pensamento.

## A brincadeira

Algum tempo atrás, soltei um pequeno _desafio/brincadeira_ para o time de front-end da Red Ventures. A idéia era a seguinte: vamos imaginar que temos a seguinte estrutura HTML:

{% gist a69f20ca7ad381c892374673d9b3fb28 %}

Tendo isso em mente, agora vamos imaginar que queremos estilizar a classe `component` quando a classe `hello` tiver um _estado_ mas queremos fazer isso seguindo o aninhamento.

{% gist 35dbb909a3c22ea809f2630afee15843 %}

Senão tivéssemos _a regra_ de seguir o aninhamento