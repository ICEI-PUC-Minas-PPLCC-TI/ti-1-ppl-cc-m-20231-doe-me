# Informações do Projeto
`TÍTULO DO PROJETO`  

DOE.ME

`CURSO`

CIÊNCIA DA COMPUTAÇÃO (MANHÃ)

TRABALHO INTERDISCIPLINAR I: FRONT-END - 3581100


## Participantes

> Os membros do grupo são: 
> - Catarina França de Moura Castro
> - Thiago Rezende Aguiar
> - Oliver Haas Böttcher
> - Fernando Gonçalves Oliveira Costa
> - Filipe Lorenzato Cardoso Rodrigues
> - Luan Carlos Coelho Garrido
> - Luigi Louback de Oliveira

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A aplicação busca resolver a dificuldade de conectar pessoas que querem doar ou reciclar objetos com organizações e indivíduos que precisam desses itens. Muitas vezes, as pessoas não sabem onde podem doar ou reciclar objetos específicos e acabam jogando-os fora, o que contribui para o aumento do lixo e do desperdício. Além disso, há pessoas e organizações que precisam de doações específicas, mas não têm acesso a uma plataforma que facilite essa conexão.

A aplicação será utilizada por pessoas e organizações que querem doar, reciclar ou receber doações de objetos variados. O contexto de uso inclui empresas, organizações sem fins lucrativos e indivíduos que desejam contribuir para a sustentabilidade do meio ambiente e para a melhoria da vida de pessoas necessitadas. As tecnologias utilizadas na aplicação incluem bancos de dados, sistemas de busca, mapas e recursos de comunicação.

## Objetivos

O objetivo geral deste trabalho é desenvolver uma aplicação que facilite e dinamize o processo de doação, reciclagem e reutilização de objetos variados, conectando doadores e beneficiários.

Como objetivos específicos, podem ser listados:
1. Desenvolver um sistema de busca eficiente que permita aos usuários encontrar organizações, pessoas e pontos de coleta específicos para os itens que desejam doar ou reciclar.
2. Permitir que os usuários possam postar pedidos por doações específicas, facilitando a conexão entre doadores e beneficiários e tornando o processo mais dinâmico e interativo.
3. Facilitar o processo de doação de itens que não são mais necessários para seus proprietários, conectando-os com organizações e indivíduos que possam fazer uso dos mesmos, ajudando a reduzir o desperdício e contribuindo para a sustentabilidade ambiental.

Esses objetivos permitirão que a aplicação atenda às necessidades dos usuários de forma eficiente e eficaz, tornando o processo de doação e reciclagem de objetos mais fácil e acessível para todos.

## Justificativa

Segundo o Laboratório de Desigualdades, Pobreza e Mercado de trabalho da PUC-RS, [11,7 milhões de brasileiros entraram em situação de pobreza nos anos de 2020 e 2021, durante a pandemia da COVID 19](https://www.pucrs.br/datasocial/wp-content/uploads/sites/300/2023/02/Estudo-Pobreza-Social-19.01_final.pdf). Isso implica em um aumento de 5,5 pontos percentuais na taxa de pobreza social, que alcançou 30,4% da população. Tal situação é consequência de problemas sociais de complexidade imensa, como a desigualdade social, o preconceito de classe, o racismo, entre outros.

Visto isso, a equipe percebeu a necessidade de busca por soluções. Notou-se que, por mais que a situação estivesse fora do alcance de estudantes universitários, era possível utilizar das habilidades de Programação e Lógica Computacional a fim de possibilitar um caminho que trouxesse benefícios para dois setores sociais distintos: aqueles que precisam se livrar de objetos sem uso em suas casas, e aqueles que passam por dificuldades financeiras e sociais e podem fazer uso desses objetos. Além disso, a ideia de se livrar de objetos permitiu que também fossem implementados funcionalidades relacionados a reciclagem e a reutilização de lixo.

Assim, concretizou-se o Doe.me, a plataforma de comunicação entre doador e beneficente. Por mais que a aplicação em si não seja suficiente para solucionar o problema de desigualdade e de pobreza no Brasil, é um caminho que permite que a própria população tenha ação direta sobre o problema e ainda tenha benefícios ao o fazer.


## Público-Alvo

O público alvo do Doe.me consiste em dois grupos distintos: pessoas que precisam se livrar de objetos sem uso e pessoas que precisam desses objetos devido a dificuldades financeiras e sociais.

* O primeiro grupo abrange pessoas de classe média e de classe alta, homens e mulheres, entre 18 e 70 anos de idade, que estão inseridos minimamente no contexto da internet. Esse público busca se livrar de objetos sem uso em suas casas, a fim de viver uma vida mais organizada e/ou de ajudar pessoas necessitadas.
* O segundo grupo é composto por pessoas de classe baixa, em situação e vulnerabilidade social e/ou de pobreza. São homens e mulheres entre 18 e 70 anos de idade, que devido ao contexto social que estão inseridos, dependem de ajuda financeira e material, e podem usufruir das funcionalidades da aplicação como forma de apoio.
 
# Especificações do Projeto

  Nesse projeto, nosso grupo visa, através de um aplicativo de doações, alcançar e ajudar pessoas que precisam ganhar espaço e organização nas suas casas e principalmente, repassar esses itens doados para pessoas que necessitam em suas vidas.
  Identificamos as dores das pessoas, para saber mais precisamente do que elas precisavam, fizemos isso através de entrevistas com várias cidadãos, pais e mães, homens e mulheres na faixa etária dos seus 35 à 50 anos. Por meio dessas entrevistas, podemos concluir que aquilo que as pessoas mais precisam, é de ajuda para saber como descartar ou doar vários de seus itens que já não são utilizados, como roupas antigas, mobíbilas que já não tem mais espaço em suas casas e também produtos eletrônicos, que necessitam de um tipo de descarte específico.
  Portanto, atráves do nosso aplicativo doe.me, as pessoas teriam mapas com pontos de descarte nas suas cidades e também poderiam colocar seus itens em forma de "anúncio", assim caso alguém que necessite daquele item, tiver interesse, eles poderam conversar através do chat do aplicativo, facilitando assim sua comunicação e ajudando ambas partes.

## Personas, Empatia e Proposta de Valor

As personas do nosso projeto estão inseridos em diferentes contextos sociais e dessa forma também possuem pensamentos distintos entre si.
Aqui estão algumas informações a respeito de cada uma das personas presentes em nosso projeto.

![Persona 1 : Vanessa](images/personaVanessa)


![Persona 2: Neide](images/personaNeide)


![Persona 3: Inácio](images/personaInacio)


> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/proposta_valor.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Mãe solteira de 2 filhos  | Doar roupas e brinquedos velhos dos meus filhos           | Para organizar melhor a casa               |
|Empregada doméstica       | Apoio financeiro/material                 | Ajudar nas dificuldades financeiras habituais |
|Aposentado preocupado com o meio ambiente       | Uma forma melhor de reciclar meu lixo                 | Ajudar mais o meio ambiente |

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário crie uma conta | ALTA | 
|RF-002| Permitir que o usuário realize postagens   | ALTA |
|RF-003| Sistema de chat entre doador e donatário   | ALTA |
|RF-004| Acesso a um mapa com organizações próximas ao usuário   | MÉDIA |
|RF-005| Sistema de categorias/tags  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve ser visualmente intuitivo, para usuários de maior idade |  ALTA |
|RNF-003| Sistema de recomendações de segurança  | ALTA |
|RNF-004| Aba de informações |  MÉDIA | 
|RNF-005| Limitador de quantas doações um usuário pode receber |  MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| É preciso ter conhecimento prévio sobre HTML, CSS e JavaScript |
|04| É preciso que instituições que recebem doações concordem em participar do projeto |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

A metodologia adotada pelo nosso grupo para o desenvolvimento da aplicação de doações foi baseada em metodologias ágeis, com ênfase na implementação do Framework Scrum.

1. **Processo de Design Thinking:**
Antes de iniciarmos o desenvolvimento da aplicação, passamos por um processo de Design Thinking para entender as necessidades dos usuários e definir os requisitos do produto. Essa fase foi conduzida por todo o grupo que buscou entender o público-alvo do programa.
Durante essa etapa, realizamos entrevistas e coletamos feedbacks. Com base nessas informações, realizamos um brainstorming para gerar ideias e, em seguida, selecionamos as melhores ideias para serem implementadas. Dessa forma, garantimos que a protótipo atendesse às necessidades dos usuários.

2. **Framework Scrum:**
Para gerenciar o desenvolvimento da aplicação, implementamos o Framework Scrum. Definimos o Scrum Master, que será responsável por liderar o processo.
Durante as sprints, realizamos reuniões semanais de acompanhamento do projeto, nas quais discutíamos o andamento das tarefas e possíveis impedimentos. As sprints eram planejadas com base nas listas de prioridades, e a equipe se comprometia a entregar as tarefas planejadas para cada sprint.

3. **Ferramentas:**
Para acompanhar o andamento do projeto e a execução das tarefas, utilizamos o Google Drive e seus Documentos, ferramentas onlines de compartilhamento de textos. Nesse ambiente, criamos um arquivo com as listas "A fazer", "Concluído" e "Projetos Futuros", para acompanharmos o status de cada tarefa.
Para a gestão de configuração do projeto, utilizamos o GitHub. A aplicação foi hospedada no Git, e cada desenvolvedor trabalhava em seu próprio escopo local, adicionando commits antes de fazer o merge com a branch principal. Dessa forma, garantimos que as mudanças feitas por cada desenvolvedor fossem revisadas antes de serem integradas ao código principal.

Ao adotarmos metodologias ágeis como o Scrum, e utilizar ferramentas como o GitHub, conseguimos manter o projeto organizado e com um bom ritmo de desenvolvimento. A gestão de configuração do projeto via GitHub também permitiu que pudéssemos trabalhar de forma colaborativa e garantir a qualidade do código produzido.

## Divisão de Papéis

**Product Owner:** Professores da disciplina 

**Scrum Master:** Catarina F. M. Castro

**Equipe:**
* Thiago Rezende Aguiar
* Oliver Haas Bottcher
* Fernando Gonçalves Oliveira Costa
* Filipe Lorenzato Cardoso Rodrigues
* Luan Carlos Coelho Garrido
* Luigi Louback de Oliveira

## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|:---:      |:---:                    |          :---:|
|Processo de Design Thinking  | Miro |  [https://miro.com](https://miro.com/app/board/uXjVMYD9yIU=/?openNotes) | 
|Repositório de código | GitHub | [https://github.com](https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20231-doe-me) |  
|Protótipo Interativo | Figma | [https://figma.com](https://www.figma.com/proto/OybBWroxTq8trEZTc0lEaM/TI?node-id=103-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=103%3A2) | 
| Editor de Código | Visual Code Studio | [https://code.visualstudio.com](https://code.visualstudio.com/) |
| Plataforma de Comunicação | Discord | [https://discord.com](https://discord.com/) |

As ferramentas empregadas no projeto são:

* Editor de código
* Ferramentas de comunicação
* Ferramentas de diagramação

O Visual Studio Code e o GitHub foram escolhido como plataformas para edição do código devido a sua integração fácil e modelo intuitivo. O discord foi utilizado como ferramenta de comunicação, por causa do sistema de separação de canais de texto e de audio. O Figma foi escolhido como plataforma de criação de wireframes por causa da interface intuitiva e do acesso fácil ao código em CSS. E, por fim, para criar diagramas, foi utilizado o Miro, por causa da capacidade de trabalho em conjunto.

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

[BAGOLIN, Izete Pengo; SALATA, André; MATTOS, Ely José de. **Pobreza Social no Brasil: 2012-2021.** Laboratório de Desigualdades, Pobreza e Mercado de Trabalho – PUCRS Data Social. Porto Alegre, 2022.](https://www.pucrs.br/datasocial/wp-content/uploads/sites/300/2023/02/Estudo-Pobreza-Social-19.01_final.pdf)

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
