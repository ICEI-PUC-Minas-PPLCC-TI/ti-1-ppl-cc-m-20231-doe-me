// Imagem de Perfil

const inputElement = document.getElementById("imagem-input");
const imageContainer = document.getElementById("imagem-container");

inputElement.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageDataURL = e.target.result;
        imageContainer.style.backgroundImage = `url('${imageDataURL}')`;
    };

    reader.readAsDataURL(file);
});


// Chamar a função infosPerfil quando a página for carregada
document.addEventListener('DOMContentLoaded', function(){
const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  // Chamar a função getDetails() com o nome de usuário obtido
  getDetails(username);

  // Chamar a função infosPerfil() para preencher os dados do perfil
  infosPerfil();
});
// Adicionar eventos
document.getElementById('edit_btn').addEventListener('click', habilitarEdicao);
document.getElementById('save_btn').addEventListener('click', editarPerfil);

function LerDados() {
  let strDados = sessionStorage.getItem('user');
  let objDados = JSON.parse(strDados)
  return objDados;
}

function infosPerfil() {
  // Ler os dados do sessionStorage
  let user = LerDados();

  if (user) {
    document.getElementById('username').value = user.username;
    document.getElementById('name').value = user.nome;
    document.getElementById('lastname').value = user.sobrenome;
    document.getElementById('email').value = user.email;
    document.getElementById('tel').value = user.telefone;
    document.getElementById('cpf').value = user.cpf;
    document.getElementById('cep').value = user.cep;
    document.getElementById('descricao').value = user.descricao;
  }
}



function habilitarEdicao() {
  // Tirar o atributo readonly dos inputs
  document.getElementById('username').removeAttribute('readonly');
  document.getElementById('name').removeAttribute('readonly');
  document.getElementById('lastname').removeAttribute('readonly');
  document.getElementById('email').removeAttribute('readonly');
  document.getElementById('tel').removeAttribute('readonly');
  document.getElementById('cpf').removeAttribute('readonly');
  document.getElementById('cep').removeAttribute('readonly');
  document.getElementById('descricao').removeAttribute('readonly');

  // Ocultar o edit_btn
  document.getElementById('edit_btn').style.display = 'none';

  // Exibir o save_btn
  document.getElementById('save_btn').style.display = 'block';
}



function desabilitarEdicao() {
  // Adicionar o atributo readonly nos inputs
  document.getElementById('username').setAttribute('readonly', 'readonly');
  document.getElementById('name').setAttribute('readonly', 'readonly');
  document.getElementById('lastname').setAttribute('readonly', 'readonly');
  document.getElementById('email').setAttribute('readonly', 'readonly');
  document.getElementById('tel').setAttribute('readonly', 'readonly');
  document.getElementById('cpf').setAttribute('readonly', 'readonly');
  document.getElementById('cep').setAttribute('readonly', 'readonly');
  document.getElementById('descricao').setAttribute('readonly', 'readonly');

  // Exibir o edit_btn
  document.getElementById('edit_btn').style.display = 'block';

  // Ocultar o save_btn
  document.getElementById('save_btn').style.display = 'none';
}



// Editar o perfil
function editarPerfil() {

  // Ler os dados do localStorage
  let user = LerDados();

  if (user) {
    // Obter os novos valores dos campos de input
    let username = document.getElementById('username').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let descricao = document.getElementById('descricao').value;

    // Atualizar os valores do perfil
    user.username = username;
    user.nome = name;
    user.sobrenome = lastname;
    user.email = email;
    user.telefone = tel;
    user.cpf = cpf;
    user.cep = cep;
    user.descricao = descricao;

    // Salvar os dados atualizados no sessionStorage
    SalvaDados(user);

    console.log('perfil atualizado');
  }

  desabilitarEdicao();
}

function SalvaDados(dados) {
  // Salvando o JSON no sessionStorage
  sessionStorage.setItem('user', JSON.stringify(dados))
  const userId = dados.id;

  fetch(`https://data-doeme-jsonserver.catfmcastro.repl.co/user/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
    .then(response => {
      if (response.ok) {
        console.log('Perfil atualizado com sucesso');
      } else {
        throw new Error('Erro ao atualizar o perfil');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

function getDetails(username) {
  fetch(`https://data-doeme-jsonserver.catfmcastro.repl.co/postagens?username=${username}`)
    .then(res => res.json())
    .then(json => {
      let html = '';
      json.forEach(postagem => {
        html += `
          <div id="mobile" class="row">
            <div class="col-6">
              <div class="row">
                <img src="data:image/jpeg;charset=utf-8;base64,${postagem.foto}" class="detailsImg">
              </div>
            </div>
            <div class="col-6">
              <h1>${postagem.titulo}</h1>
              <h6>${postagem.username?.toUpperCase()}</h6>
              <p>${postagem.descricao}</p>
              <p>${postagem.localizacao}</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-success"><i class="bi bi-bag-plus"></i></button>
              </div>
            </div>
          </div>
        `;
      });

      document.getElementById('lista-imagem').innerHTML = html;
    })
};