---
layout: post
title:  "Dicas rápidas para projetos WordPress - parte 2"
description: ""
type: Post
date: 2015-07-09
image: ''
imageExternal: true
alt: ''
---

Esse post é a continuação de um outro post que escrevi há uns dias atrás [sobre algumas dicas rápidas para projetos em WP](/dicas-rapidas-wordress).

## Imagens no tamanho correto

Um dos problemas que podemos perceber frequentemente em diversos blogs/sites é em relação as imagens e seus tamanhos. Por exemplo, imaginemos que numa página simples temos uma área destinada a uma imagem que pode ser trocada pelo painel do administrador. O que muitas vezes acontece é essa imagem não receber um tratamento antes de ser renderizada no HTML o que acaba resultando em imagens gigantescas em uma área de 300 ou 400 pixels; eaí o que acaba controlando o seu tamanho é o HTML (*#chateado*) ou o CSS (um pouco menos, mas ainda *#chateado*).

Isso pode ser resolvido através do `add_image_size` do WP onde é possível setar novos *tamanhos de imagens* para serem utilizados ao longo do projeto ([aqui você encontra mais sobre o image size](https://codex.wordpress.org/Function_Reference/add_image_size)). No entanto, muitas vezes acontece durante o projeto de uma parte do layout ou até mesmo ele inteiro mudar eaí o tamanho dessa imagem que comentamos acima muda também. Aí que entra o brother [Regenerate thumbnails](https://wordpress.org/plugins/regenerate-thumbnails/): com ele é possível ajustar todas as imagens do projeto (ou as que você quiser) de acordo com os novos tamanhos.

## Melhore sua busca interna

Uma das coisas mais frustantes em um site é quando nossa busca por algo não retorna nada, sem nenhuma sugestão para auxiliar. Um cara que pode ajudar nisso é o [Relevanssi](https://wordpress.org/plugins/relevanssi/). Com ele é possível customizar uma série de parâmetros

## Repense o seu usuário e senha

Muitas vezes (mais do que a gente pensa) acontece de na correria do desenvolvimento, criarmos um usuário padrão *admin* e sua senha mais criativa ainda como *admin* ou *admin1234* e por aí vai. Até aí tudo bem; o negócio fica feio quando isso vai pra produção pois vira uma porta aberta para ataques. Caso você não tenha controle do banco e da parte dos *assets*, acabei caindo em um plugin que promete ajudar nisso: o [Username Changer](https://wordpress.org/plugins/username-changer/) (não o testei ainda).

## Keep calm and escolha bem

Uma das coisas mais legais do WP é a grande quantidade de temas e plugins disponíveis. E uma das coisas que podem atrapalhar um pouco também é a questão da grande quantidade de temas e plugins disponíveis. Ahn?! Pois é. Se por um lado temos um leque enorme de recursos para se recorrer, temos que sempre pesar e pesquisar a respeito de qualquer plugin/temas a se adicionar no projeto com o objetivo de evitar qualquer problema futuro.

## Resumindo...

Um projeto bem bacana pra quem se interessar na parte de plugins é o [WP Plugins](http://lab.a2comunicacao.com.br/wp-plugins/) da antiga A2 Comunicação, nova [A2ad](http://lab.a2comunicacao.com.br/wp-plugins/). O projeto nasceu como uma idéia de documentar os principais plugins usados nos projetos internos e acabou ficando aberto.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) mencionando o post e vamos conversar.