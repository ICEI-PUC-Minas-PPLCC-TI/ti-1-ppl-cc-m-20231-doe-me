const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const tipo = params.get("tipo");

const urlUser = `https://data-doeme-jsonserver.catfmcastro.repl.co/user/${id}`;
const urlInst = `https://data-doeme-jsonserver.catfmcastro.repl.co/instituicao/${id}`;
let url = '';

if (tipo === usuario) {
  url = urlUser;
} else if (tipo === instituicao) {
  url = urlInst;
}

// Imagem de Perfil
const inputElement = document.getElementById("imagem-input");
const imageContainer = document.getElementById("imagem-container");

// Chamar a função infosPerfil quando a página for carregada
document.addEventListener('DOMContentLoaded', infosPerfil);

// Adicionar eventos
document.getElementById('edit_btn').addEventListener('click', habilitarEdicao);
document.getElementById('save_btn').addEventListener('click', editarPerfil);

function LerDados() {
  fetch(url)
    .then(response => response.json())
    .then(data => {return data;})
    .catch(error => {
      console.error('Erro:', error);
    });
  
}

function infosPerfil() {
  // Ler os dados do sessionStorage
  let user = LerDados();
  console.log(user)

  if (user) {
    document.getElementById('name').value = user.nome;
    document.getElementById('email').value = user.email;
    document.getElementById('tel').value = user.telefone;
    imageContainer.style.backgroundImage = `url('${user.foto}')`;
  }
}

//avaliação  coletada
var rt = {
  star: [
    {
      rating: '4.3',
    }

  ]
}

//comentários
var lg = {
  comentario: [
    {
      coment: 'Melhor Instituição da cidade!!',
    }

  ]
}

var ns = ``;
for (i = 0; i < lg.comentario.length; i++) {
  ns += `<p class="profilee"><br><b>Comentários:</b> ${lg.comentario[i].coment}<br>`;
}
document.getElementById('comentar').innerHTML = ns;;



//local storage dao comentário
localStorage.setItem('comentar', JSON.stringify(lg))

//mostrar a avaliaçao e calcular as estrelas
var pro = ``;
for (i = 0; i < rt.star.length; i++) {
  pro += `<p><b>Nota da Instituição:</b> ${rt.star[i].rating}<p> `;
}
document.getElementById('nota').innerHTML = pro;;


function colocarEstrelas(rating) {
  let ratingInt = Math.trunc(rating);
  let strRate = '';
  for (let x = 0; x < ratingInt; x++) {
    strRate += '<i class="fa-solid fa-star" style="color: #ffcb0c;"></i></div>';
  }
  if (rating - ratingInt >= 0.5) {
    strRate += '<i class="fa-solid fa-star-half" style="color: #ffcb0c;"></i></div>';
  }
  return strRate;
}

document.addEventListener('DOMContentLoaded', function () {
  var ratingValue = Number(rt.star[0].rating); // Acessando o valor de rating corretamente
  var notaElement = document.getElementById('nota');
  notaElement.innerHTML += colocarEstrelas(ratingValue);
});




//Dados que foram coletados na tela de postagem
var lc = {
  post: [
    {
      imagem: 'https://photos.enjoei.com.br/moletom-vans-83819664/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yOTUzMDQ3OC8yNzM5ODFjYTBmOTU0N2IxNGYzMmYxZDNkNWYxMWViYy5qcGc',
      legenda: 'casaco da vans usado',

    },
    {
      imagem: 'https://photos.enjoei.com.br/chuteira-nike-mercurial-1a-linha-83144100/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yODU0MjY1OC8wYWNmYzRkZmVmM2M3ZDdjNDZiYWE0OWE1ZDZkNzBiYS5qcGc',
      legenda: 'chuteira nike mercurial',

    },
    {
      imagem: 'https://photos.enjoei.com.br/rarissima-bola-jabulani-copa-do-mundo-2010-76211245/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNzU1NDgwMy81MzQwOGIwY2ZkZjQ1NjIyNDA1ZmU3NjZiODQ1NDE4YS5qcGc',
      legenda: 'bola da copa de 2010',

    }
  ]

}

//local storage das postagens
localStorage.setItem('post', JSON.stringify(lc))

//adição dos dados das postagens na tela 
var prot = ``;
for (n = 0; n < lc.post.length; n++) {
  prot += `<div class="profileee"><p>  Doação: ${lc.post[n].legenda}<br> <img class="vans" src="${lc.post[n].imagem}"> <br></div> `;
}
document.getElementById('lista-imagem').innerHTML = prot;