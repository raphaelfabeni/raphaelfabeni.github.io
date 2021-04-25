---
layout: post
title:  "Dicas rápidas para projetos WordPress - parte 1"
description: "Dicas rápidas que podem ser úteis para projetos em WordPress."
type: Post
date: 2015-07-16
image: 'https://cloud.githubusercontent.com/assets/1345662/8713520/ffe24dec-2b3f-11e5-9899-662498a8a3f5.jpg'
alt: 'Imagem de uma igreja ou estação de trem vista de uma perspectiva mostrando sua próxima do chão'
lang: pt-br
category: 'tech'
permalink: 'dicas-rapidas-wordpress/'
ref: 'dicas-wp'
---

Você já fez algum projeto usando WordPress? Pois é! Eu também. Gostando ou não, você já deve ter se deparado com algum WP na sua vida. Seja num projeto no trabalho, *freela*, ou até mesmo aquele blog que você costuma ler, possa ter sido feito em WP.

Acredito que o WordPress seja tão popular pelo fácil aprendizado de ambos os lados: cliente e desenvolvedor. Falando do lado do cliente, acredito que seja a plataforma pra blog mais conhecida e admito que já ouvi falar (inclusive já aconteceu comigo) de falarem que tal pessoa precisava de um *wordpress*. Do lado do desenvolvedor, acredito eu que ele seja uma solução escolhida principalmente pela facilidade em se criar coisas; talvez você não precise de um conhecimento tão avançado em programação para conseguir o que você queira (talvez isso não seja algo bom, da mesma maneira que já vi alguns programadores não falando muito bem do *core* do WP, mas isso pode ficar pra depois).

Da mesma maneira que é fácil de *construir* qualquer coisa com WP, surgem também muitas aberturas a falhas no projeto que lá na frente podem trazer sérias dores de cabeça.

## Tenha uma cópia do projeto (*assets* e banco)

Sempre tenha uma cópia do seu projeto, tanto dos *assets* como do banco de dados. Para os assets, acredito que a já estamos acostumados com um [GitHub](https://www.github.com) ou [BitBucket](https://www.bitbucket.org) da vida. Para o banco, existem alguns plugins como [ManageWP](https://managewp.com/) e o [WP DB Backup](https://wordpress.org/plugins/wp-db-backup/) onde é possível gerenciar e agendar rotinas de backup. Acredite, é importante! Só daremos importância a isso quando perdemos tudo!

## Tenha cautela nas atualizações

Principalmente quando seu projeto não é pessoal e uma outra pessoa (provavelmente um cliente) que administra o site. Atualizações saem quase que semanalmente, e a ansiedade por ter tudo *atualizado* geralmente é grande. Por isso é natural, que muitas vezes, a pessoa que administra o site clique para fazer todas as atualizações *sem dó*. Aí que temos que tomar cuidado pois muitas vezes aquele *plugin* mega legal que você está usando não foi testado com a nova versão do WP eaí lascou! Quebra tudo e em produção! Acho que a melhor saída talvez seja tirar essa opção de atualização para determinados usuários do projeto e, que só uma pessoa (provavelmente o *dev*) tenha o poder de fazer essas atualizações (e mesmo assim recomendo sempre fazer uma boa homologação antes).

## Capriche no SEO

Você (e provavelmente seu cliente, caso freela) quer que seu projeto seja visto, correto? Uma das táticas, e que é *grátis*, para atacar é o SEO. Tem um cara chamado [WordPress SEO by Yoast](https://wordpress.org/plugins/wordpress-seo/) que é bem famoso. Ele te ajuda a configurar praticamente tudo: `title`, `meta tags`, detalhes de compartilhamento e por aí vai.

## Ative os *permalinks*

A estrutura de links padrão do WP é algo meio feio. Não é fácil de entender por uma pessoa normal e também não é nada bacana do ponto vista de SEO. Você já deve ter visto algo do tipo => *www.nomedosite.com.br/?p=123*. Não ficaria melhor algo como *www.nomedosite.com.br/sobre* ?
