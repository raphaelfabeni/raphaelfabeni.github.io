---
layout: post
type: Post
lang: pt-br
title: 'Google Web Vitals: CLS'
category: user-experience
description: Entenda um pouco mais sobre CLS, uma das novas métricas do Google Web
  Vitals.
date: 2020-11-17
image: https://user-images.githubusercontent.com/1345662/99195028-37fb9180-2751-11eb-9551-a40efe970757.jpg
alt: Foto tirada de um drone de uma estrada com neve.
permalink: google-web-vitals-cls/
ref: web-vitals-cls
published: false

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
<figcaption>Vídeo mostra uma pessoa clicando no botão errado devido à pagina web se mover (retirado do site web.dev).</figure>

## Evitando e corrigindo o CLS

Na verdade não existe fórmula mágica para corrigir e evitar problemas com _CLS_. Indo direto ao ponto: **certifique-se de que qualquer conteúdo** que é carregado na sua página **tenha espaço suficiente para ser exibido**, evitando assim que caso quando ele carregue, e seja maior do que o espaço disponível, empurre a página para baixo. Algumas dicas:

* _volte duas casas_ e adicione os atributos de tamanho (largura e altura em vídeos e imagens). Ou uma outra dica legal que o pessoal do web.dev cita ainda é uma técnica antiga mas que funciona muito bem que é o [aspect ratio boxes](https://css-tricks.com/aspect-ratio-boxes/).
* quando for usar `transition` ou `animation`, use em conjunto com `transform`.
* tome cuidado com testes A/B. Passei por uma situação há alguns meses atrás onde estava adicionando um banner no topo de uma página, sem deixar o espaço necessário e estava empurrando a página inteira para baixo, afetando drasticamente o CLS.

Se você quiser saber mais, [a página sobre CLS no web.dev](https://web.dev/cls/ "Link para a página sobre CLS no web.dev") é bem legal (mas é em Inglês).