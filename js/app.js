/* Criando a função */
const inserirTripulante= (event)=> {
  event.preventDefault(); /* Previne que a página recarregue e que os dados sejam inseridos na Url da página */

/* acessando as informações do documento pelo elemento ID na Div  */
  const listaTripulantes = document.getElementById("box-character");
/* acessando as informações do documento(input) de Nome, Patente e Imagem */
  const inputName = document.querySelector("[data-form-name]");
  const inputPatent = document.querySelector("[data-form-patent]");
  const inputImage = document.querySelector("[data-form-img]");

  /* acessando os valores inseridos nos input e seus valores */
  const valorNome = inputName.value;
  const valorPatent = inputPatent.value;
  const valorImage = inputImage.value;
  
  /* criando a nova Div que vai ser responsavel por receber o novo conteúdo inserido no HTML */
  const tripulante = document.createElement("div");
/* criando conteúdo que vai ser inserido */
  const conteudo = 
  ` <div id="btn-all" class="box-image">
    <div class="text-character">
    <h2>${valorNome}</h2>
    <img class="character"
    src="${valorImage}">
    <p>${valorPatent}
    </p>
  </div>
</div>`;

/* inserindo todo conteudo no HTML */
tripulante.innerHTML = conteudo;
/* inserindo no dom os dados HTML e tornando os mesmos filhos na Div box-character na linha 6 */
listaTripulantes.appendChild(tripulante);
/* Tranformando os valores introduzidos pelo usuario em HTML para criar nosso novo tripulante */
valorNome.innerHTML = "";
valorPatent.innerHTML = "";
valorImage.innerHTML = "";
};
/* acessando o botão do nosso formulário */
const novoTripulante = document.querySelector("[data-form-btn]");
/* inserindo o evendo do usuario que ao clicar no botão vai inserir um novo tripulante */
novoTripulante.addEventListener("click", inserirTripulante);

/* inserindo o evendo do usuario que ao clicar no botão vai remover um novo tripulante */
const deleteTripulante = document.querySelector('[data-form-btn-delete]');
deleteTripulante.onclick = function () {
    document.getElementById('btn-all').remove(); 
};

/* É isso */