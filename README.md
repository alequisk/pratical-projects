# Sistemas
## Agenda telefônica – 20 pontos

Uma simples agenda telefônica, com nome, telefone, email e talvez alguns dados a mais.
- O usuário acessa/instala e seus dados ficam salvos
- Deve ser possível realizar buscas por qualquer campo
- Se for web ou mobile, botão para abrir whatsapp com o contato

## Coisas emprestadas – 25 pontos

Sistema para você não esquecer para quem emprestou cada coisa.

- O usuário acessa/instala e seus dados ficam salvo
- Deve receber o item emprestado, data que foi emprestado, e contato do amigo
- Opcionalmente pode haver a data de devolução combinada
- A tela inicial lista as coisas emprestadas e permite clicar em botão para incluir novo empréstimo
- Após a data combinada o item deve ficar destacado na lista de coisas emprestadas
- Quando algo for devolvido, deve ser marcado no sistema que irá salvar a data

## Ranking dos amigos – 25 pontos

Quem são seus melhores amigos? Tenha uma lista com cada um deles.

- O usuário acessa/instala e seus dados ficam salvo
- A tela inicial é a lista de amigos por ordem de posição no seu ranking
- Cada novo amigo é incluído e informada a posição dele no ranking
- Opção fácil de trocar um amigo de ordem, diretamente pela lista de amigos

Ranking de qualquer coisa – 30 pontos

Melhor que ter um ranking só de amigos, seria poder criar um ranking de qualquer coisa. Melhores amigos, melhores programadores, melhores jogadores de futebol, melhores séries… o usuário é quem sabe o que quer rankear. Os recursos devem ser o mesmo do projeto anterior, porém com algo mais.

    O usuário acessa/instala e seus dados ficam salvo
    O sistema deve aceitar a criação de rankings, com um título informado pelo usuário
    Cada ranking terá itens ordenados
    A tela inicial mostra cada ranking, e os três primeiros itens em cada um deles

Lista de tarefas – 30 pontos

A proposta é um sistema “to-do” simples, que ajuda o usuário a controlar suas tarefas, coisas para fazer.

    O usuário acessa/instala e seus dados ficam salvo
    Cada tarefa pode ter data para iniciar terminar
    A tela inicial lista as tarefas por fazer
    O usuário pode facilmente marcar uma tarefa como concluída
    Deve ser fácil trocar a ordem das tarefas na lista, colocando no alto as mais importantes
    Tarefas atrasadas devem ficar em destaque na lista

Filmes favoritos – 35 pontos

O sistema lista os filmes favoritos do usuário, obtendo dados de uma API externa.

    O usuário acessa/instala e seus dados ficam salvo
    Ao incluir um filme, uma busca deverá ser feita em uma API de filmes
    Salvar os dados do filme obtido via API, e a avaliação do usuário
    Na tela inicial apresentar o título, capa e avaliação de cada filme incluído

Bandas favoritas – 35 pontos

Semelhante ao item acima, porém, obtendo dados de uma API que permita busca por banda, tal como a do Spotify.
Livros favoritos – 35 pontos

Semelhante ao item acima, porém, obtendo dados de uma API que permita busca por livros.
Previsão do tempo da sua cidade – 30 pontos

Exibir ao usuário qual a previsão do tempo para seu local atual.

    Assim que acessar o sistema, deve-se pedir ao usuário permissão para obter sua localização
    A partir da localização, obter via API a previsão do tempo para hoje e os próximos dias

Inspire-se – 40 pontos

Site com conteúdos inspiracionais, podem ser textos curtos, longos ou imagens.

    Listar no site os conteúdos para o visitante se sentir inspirado
    Poder navegar por categorias
    O sistema de ter uma área administrativa para inclusão das categorias e conteúdos
    Outros sites poderão obter um pequeno código javaScript (tipo isso), para exibirem ao seus visitantes um item inspirador a cada visita
    Na URL de chamada deverá ser informado se é um texto curto, longo ou imagem

Meus Favoritos – 50 pontos

É a junção dos três projetos acima, em um só, porém listando usuários semelhantes. Alguma outra categoria poderia ser incluída?

    Só permitir incluir uma categoria, que possa ter seus dados localizados via API
    Para cada item favorito meu, posso ver outros usuários que também incluíram o mesmo item
    Permitir ver o perfil de outros usuários, com seus itens favoritos

Email anônimo – 40 pontos

Sabe quando um amigo está com mau hálito, está sendo chato, ou apenas tem algo sobre o qual você gostaria de falar mas não sabe como?

    O usuário acessa/instala e seus dados ficam salvos
    O usuário poderá enviar um email anônimo informando seu endereço
    Existirão alguns tópicos pré-definidos, como “Mau hálito”, “Sua namorada está te traindo”, que já trará um assunto e texto prontos, os quais o usuário poderá alterar
    Após editar o assunto e texto o usuário clica em enviar, então o conteúdo é enviado ao destinatário, sem que o remetente tenha que se identificar

Issues sociais – 40 pontos

Listar issues abertas em uma lista de repositórios informados. No caso, seriam informados repositórios ligados a projetos sociais. Assim a pessoa que quiser ajudar pode facilmente ver onde existe algo para ser feito.
Cotação de crypto moedas – 50 pontos

Obter a cotação de agora das principais cryptocoins através de qualquer API.

    O usuário acessa/instala e seus dados ficam salvos
    Opção de selecionar quais moedas deseja ver a cotação em tempo real
    Opção de definir um alerta selecionado a cryptomoeda, o valor, quando passar pelo valor subindo ou descendo

Vai chover – 70 pontos

Um dispositivo que percebe quando vai chover, exatamente onde ele está.

    O dispositivo deve ter um sensor de temperatura, um de umidade e outro de pressão atmosférica
    Cada um destes dados deve ser capturado a cada 5 ou 10 minutos e salvo em um banco de dados
    O usuário informará ao sistema quando chover, atualizando os registros acima, dizendo que chovia
    A partir do padrão de pressão e umidade principalmente, dos momentos em que houve chuva, o sistema deve perceber quando uma chuva se aproxima

Distância em músicas – 60 pontos

Um sistema para medir o tempo de locomoção entre dois pontos, porém, ao invés de informar em minutos/horas, informar em músicas de um determinado artista. “Dois beethovens” de distância seria muito maior que “cinco justin biebers”.

    O usuário acessa/instala e seus dados ficam salvo
    É informado a origem e destino, que deverá exibir o resultado da busca de cada campo usando a API do Google Maps
    É escolhida então uma banda (obtida através de outra API)
    Apresenta-se então ao usuário a quantas músicas de distância, do seu artista favorito, ele está do seu destino

Meu spotify – 60 pontos

Um spotify simplicado, para buscar e marcar seus itens favoritos.

    O usuário acessa/instala e seus dados ficam salvo
    Permite ao usuário pesquisar bandas, albuns, playlists e músicas
    Qualquer um dos dados acima poderá ser incluído nos favoritos do usuário
    Permitir dar play em qualquer item através da API do spotify (certamente ele tocará no app do spotify ou em algum dispositivo próximo)

Meus Rádios – 65 pontos

Lista das rádios online que o usuário mais gosta.

    O usuário acessa/instala e seus dados ficam salvo
    Poderá realizar uma busca por nome, estilo e os demais dados que a API fornecer
    O usuário poderá escutar cada rádio, e também adicionar aos favotiros
    A tela inicial apresenta as rádios favoritas para rápido acesso e a opção de busca

Busca de imagens – 50 pontos

Uma alternativa a busca de imagens do Google.

    O usuário digita qualquer termo na busca, que acessa alguma API de imagens (o google não fornece estes dados) e apresenta ao usuário os resultados da busca

Controle de gastos – 80 pontos

Um sistema completo para controlar contas a pagar e receber, e controlar seus gastos pessoais.

    O usuário acessa/instala e seus dados ficam salvo
    Podem ser incluídos lançamentos, que terão data, valor, se é crédito ou débito
    O sistema irá ajudar a acompanhar o que foi pago/recebido e o que está atrasado
    Opção de ter lançamento recorrente, que se repete a cada semana, quinzena, mês, bimestre.. etc
    Opção de incluir categorias de despesas/receitas para melhor organização
    Relatório de movimento por período, por categoria

Obter twittes da sua cidade – 55 pontos

O que as pessoas de sua cidade estão falando no twitter agora?

    O usuário acessa/instala e seus dados ficam salvo
    Assim que acessar o sistema, deve-se pedir ao usuário permissão para obter sua localização
    Obter então os twittes enviados em um radio ao redor da localização do usuário
    Manter a lista atualizada, obtendo os novos twittes de tempo em tempo, ou em tempo real
    Mostrar a distância de cada twitte, da localização do usuário
    Permitir reduzir ou ampliar o raio de filtro, para ver apenas twittes bem próximos, ou mais distantes
