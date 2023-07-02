const postContainer = document.querySelector('.post-container');
const instContainer = document.querySelector('.inst-container');
const searchBox = document.querySelector('#searchInput');


let posts = [];

// Mostra os dados de POSTAGENS em JSON no template
fetch('https://data-doeme-jsonserver.catfmcastro.repl.co/postagens')
.then((response) => response.json())
.then((data) => {
    data.map((post) => {
        const postElement = tmplCard.content.cloneNode(true);
        const title = postElement.querySelector('.cardTitle');
        const desc = postElement.querySelector('.cardDescription');
        const tags = postElement.querySelector('.cardTags');

        title.textContent = post.titulo;
        desc.textContent = post.descricao;
        tags.textContent = post.tag;

        postElement.querySelector('.card').classList.add("post-value")
        postContainer.appendChild(postElement);
    });
})

// Mostra os dados de INSTITUIÇÕES em JSON no template
fetch("https://data-doeme-jsonserver.catfmcastro.repl.co/instituicao")
    .then((response) => response.json())
    .then((data) => {
        data.map((page) => {
            const postElement = tmplCardInst.content.cloneNode(true);
            const title = postElement.querySelector('.cardTitle');
            const desc = postElement.querySelector('.cardDescription');
            const tags = postElement.querySelector('.cardTags');

            title.textContent = page.nome;
            desc.textContent = page.descricao;
            tags.textContent = page.tag;

            postElement.querySelector('.card').classList.add("inst-value")
            instContainer.appendChild(postElement);
    });
})



// Funcionalidade do sistema de Tags POSTAGENS
function filterProductPost(value) {
    //Seleção de botões post-tags
    let buttons = document.querySelectorAll(".button-value-post");
    let tags = document.querySelectorAll(".cardTags");
    
    //  Tags ativadas
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
    
    // Retira .active dos botões post-inst
    let buttonInst = document.querySelectorAll(".button-value-inst");
    buttonInst.forEach((button) => {
        button.classList.remove("active");
    })

    // Retira mensagem de erro
    let msgErro = document.getElementById("msgErro");
    msgErro.classList.add("hide");
    
    //Seleciona todos os cards
    let elements = document.querySelectorAll(".card");
    
    //Loop pelos cards
    elements.forEach((element) => {
        //Mostra todos os Posts no clique do botão 'all'
        if (value == "allPost") {
            element.classList.remove("hide");
        }
        else {
            let cardTags = element.querySelector(".cardTags").innerText.toLowerCase();
            let selectedTags = value.toLowerCase();
            
            //Checa se o elemento possui a Tag
            if (cardTags.includes(selectedTags)) {
                //Mostra elementos com base na tag
                element.classList.remove("hide");
            }
            else {
                //Esconde outros elementos
                element.classList.add("hide");
            }
        }
    });
    
    // Remove Instituições da tela
    let cardsInst = document.querySelectorAll(".inst-value");
    cardsInst.forEach((card) => {
        if (value) {
            card.classList.add("hide");
        } else {
            card.classList.remove("hide");
        }
    });
}


// Funcionalidade do sistema de Tags INSTUIÇÕES
function filterProductInst(value) {
    
    //Button class code
    let buttonsInst = document.querySelectorAll(".button-value-inst");
    let tags = document.querySelectorAll(".cardTags");
    
    // Tags ativadas
    buttonsInst.forEach((button) => {
        //  Tags ativadas
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
    
    // Retira .active dos botões post-tags
    let buttonPost = document.querySelectorAll(".button-value-post");
    buttonPost.forEach((button) => {
        button.classList.remove("active");
    })
    
    // Retira mensagem de erro
    let msgErro = document.getElementById("msgErro");
    msgErro.classList.add("hide");
    
    //Seleciona todos os cards
    let elements = document.querySelectorAll(".card");
    
    //Loop pelos cards
    elements.forEach((element) => {
        //Mostra todos os Posts no clique do botão 'all'
        if (value == "allInst") {
            element.classList.remove("hide");
        }
        else{
            let cardTags = element.querySelector(".cardTags").innerText.toLowerCase();
            let selectedTags = value.toLowerCase();
            
            //Checa se o elemento possui a Tag
            if (cardTags.includes(selectedTags)) {
                //Mostra elementos com base na tag
                element.classList.remove("hide");
            }
            else {
                //Esconde outros elementos
                element.classList.add("hide");
            }
        }
    });
    
    // Remove Posts da tela
    let cardsPosts = document.querySelectorAll(".post-value")
    cardsPosts.forEach((card) => {
        if (value) {
            card.classList.add("hide");
        } else {
            card.classList.remove("hide");
        }
    });
}

// Funcionalidade do clique no botão de pesquisa
document.getElementById("btnPesquisar").addEventListener("click", () => {
    // Inicializações
    let pesquisa = document.getElementById("searchInput").value.toLowerCase();
    let elements = document.querySelectorAll(".card");
    let description = document.querySelectorAll(".cardBody");
    let msgErro = document.getElementById("msgErro");

    let matchingPosts = false;

    //Loop para percorrer todos os posts
    elements.forEach((element, index) => {

        // Verifica se o texto do post corresponde a pesquisa
        if (element.textContent.toLowerCase().includes(pesquisa)) {
            elements[index].classList.remove("hide"); // Mostra os posts que correspondem a pesquisa
            matchingPosts = true;
        }
        else {
            elements[index].classList.add("hide"); // Esconde os posts que não correspondem a pesquisa
        }
        
        // Mostra mensagem de erro, caso não haja posts que correspondam a pesquisa
        if (matchingPosts == false) {
            msgErro.classList.remove("hide");
        }
        else {
            msgErro.classList.add("hide");
        }
    });

});

// Funcionalidade do ENTER no campo de pesquisa
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Impede o comportamento padrão do ENTER (submit do formulário)
      document.getElementById("btnPesquisar").click(); // Dispara o evento de clique no botão de pesquisa
    }
  });

// Mostra todo o conteúdo assim que a página é carregada
window.onload = () => {
    cards[index].classList.remove("hide");
};