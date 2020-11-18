---
layout: post
type: Post
lang: pt-br
title: 'Google Web Vitals: CLS'
category: user-experience
description: Entenda um pouco mais sobre CLS, uma das novas métricas do Google Web
  Vitals.
date: 
image: https://user-images.githubusercontent.com/1345662/99195028-37fb9180-2751-11eb-9551-a40efe970757.jpg
alt: Foto tirada de um drone de uma estrada com neve.
permalink: google-web-vitals-cls
ref: web-vitals-cls

---
Há algum tempo o Google lançou uma iniciativa chamada _Web Vitals_ que tem como objetivo principal fornecer métricas para que possamos melhorar a optimizar a qualidade das nossas aplicações web. Até aí, tudo certo né? Nada muito diferente do velho e famoso _Lighthouse_. Pois é, o pulo do gato aqui é que eles começaram a levar a **experiência do usuário em conta**.

Senão me engano, recentemente o Google ainda anunciou que vai considerar essas métricas como um dos fatores que podem influenciar no rankeamento das páginas a partir de maio de 2021. Para um contexto maior, o [web.dev](https://web.dev/) define _Web Vitals_ da seguinte maneira:

> Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Uma dessas métricas é chamada **CLS** (**c**umulative **l**ayout **s**hift) e vamos falar um pouco sobre ela por aqui.

## Entendendo o CLS

De uma forma bem clara, a métrica _CLS_ é totalmente relacionada à **estabilidade visual**. Um exemplo clássico que você provavelmente já presenciou e quis jogar o celular no chão ou dar um soco na tela (ok, exagerei!): você está lendo um artigoo e **do nada a tela dá aquela sambada**, e você precisa achar onde estava. Isso acontece, geralmente porque algum conteúdo, localizado entre partes do texto que você estava lendo, terminou de ser carregado e **por não ter um tamanho prévio definido**, empurrou parte do conteúdo para baixo.  

<figure>
<video autoplay="" controls="" loop="" muted="" class="w-screenshot" poster="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability-poster.png" width="658" height="510">
    <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm" type="video/webm; codecs=vp8">
    <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.mp4" type="video/mp4; codecs=h264">
  </video>
</figure>