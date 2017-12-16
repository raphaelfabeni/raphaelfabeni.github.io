---
layout: post
title:  "GitHub: Atualizando seu fork"
description: "Tenha o fork daquele projeto legal que você está contribuindo sempre atualizado e evite problemas"
type: Post
date: 2015-01-12
image: 'https://cloud.githubusercontent.com/assets/1345662/11458213/fff34934-96a2-11e5-9c4d-af162bc71a92.jpg'
alt: 'Mesa de madeira vista de cima, cheia de ferramentas'
lang: pt-br
url_en: /updating-your-fork/
url_br: /atualizando-seu-fork/
---

Contribuir em projetos *open source* é uma das coisas mais legais da área de desenvolvimento. Ano passado, senão me engano no Intercon WP do iMasters, rolou um FEMUG dentro do evento e, um dos temas abordados foi exatamente esse: a contribuição em projetos.

Muitas vezes (senão a maioria) é normal termos receio em contribuir em algum projeto pelo simples fato de achar que não podemos contribuir em nada com o que está ali. E foi exatamente aí que o FEMUG cutucou, incentivando a todos que estavam ali a começar a contribuir, seja com código, ou até mesmo revisão/tradução.

## O processo

Pra quem já está acostumado, o processo de contribuição acaba se tornando automático. Já pra quem ainda está iniciando, algumas partes podem parecer confusas, mas aqui cito uma frase que ouvi do [Daniel Filho](http://twitter.com/danielfilho) que trabalha comigo na Netshoes que é a seguinte: "*Tudo é mais fácil do que parece...*". E é verdade!

O processo de contribuição basicamente é o seguinte:

1. *Fork* do projeto para o seu usuário.
2. *Clone* do projeto *forkado* na sua máquina.
3. *Taca-le pau* ..
4. Atualização do seu projeto com o projeto original.
5. *Commitar* e enviar suas alterações para o seu GitHub.
6. Abrir um *pull request* para o projeto original.

Acho que é isso basicamente! Fazendo é muito mais fácil do que escrevendo (acredite!). Um item que me perdi um pouco logo quando comecei a contribuir em projetos foi o item 4. E é por isso que queria mostrar aqui rapidamente pra que outras pessoas possam pular essa parte que patinei no começo.

## O cara *upstream*

Vamos supor que forkamos um projeto chamado *2015-rocks* para nossa conta pessoal. Então nesse momento temos tanto o **projeto original** como o **fork** no mesmo ponto, idênticos.

Aí começamos a *meter bronca* no projeto local e fazemos um *commit* com essas alterações! Ao mesmo tempo, percebemos que no projeto original, um *pull request* foi aceito. Nesse ponto, os projetos já não são mais iguais; pelo contrário, eles se diferenciam bastante:

* o seu projeto **local** contém todas as mágicas novas que você adicionou;
* e a versão **original** do projeto agora tem uns paranauês novos que vieram do *PR* que foi aceito.

Se você enviar suas alterações para o Github e tentar fazer um *pull request* ele irá notificar que não é possível fazer o *merge* do repositório. Pra isso, precisamos atualizar nosso projeto local de acordo com a versão original. E é aí que entra o tal do *upstream*.

Digamos que você esteja contribuindo para este humilde blog (Valeu [Julio Bitencourt](https://github.com/juliobitencourt) pela [dica](https://github.com/raphaelfabeni/raphaelfabeni.github.io/pull/8)) \o/

Adicionamos um remote com base na versão original do blog:

{% highlight bash %}
$ git remote add upstream https://github.com/raphaelfabeni/raphaelfabeni.github.io.git
{% endhighlight  %}

Após feito isso precisamos atualizar o *upstream*:

{% highlight bash %}
$ git fetch upstream
{% endhighlight  %}

Com o *upstream* atualizado, supondo que estamos no *branch master* do nosso projeto local, fazemos o *merge*:

{% highlight bash %}
$ git merge upstream/master master
{% endhighlight  %}

Como lembrado pelo [Lucas Mazza](https://twitter.com/lucasmazza), aqui podemos também usar o `rebase`, evitando assim a mensagem do *merge*.

Agora caso queira atualizar seu repositório do Github com seu reposítório local antes de fazer suas mudanças e dar seu commit, fazemos:

{% highlight bash %}
$ git push origin master
{% endhighlight  %}

Pronto! Agora nosso projeto local e remoto está sincronizado e atualizado com a versão original e, após enviar suas alterações para o GitHub, conseguimos fazer o *pull request* e torcer para ser aceito.

Gostou? Escrevi alguma groselha? Quer melhorar? Abra uma [issue](https://github.com/raphaelfabeni/raphaelfabeni.github.io/issues) com a hashtag *1postperweek* e vamos conversar.
