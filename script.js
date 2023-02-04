const alunos = [
  ["Gilson", 7, 8, 9, 10],
  ["Elizabte", 8, 9, 10, 10],
  ["Thiago", 8, 9, 10, 10],
  ["João", 8, 9, 10, 10],
  ["Filipe", 8, 9, 10, 10],
  ["Francilene", 7, 8, 9, 10]
];

window.onload = function(e) {

  const grava = document.getElementById("gravar");
  grava.addEventListener("click", fecharModalLancamento);

  iniciar();

}


$(document).ready(function() {

  $('#moda').click(function() {

    $('#exampleModal').modal('show');

  });

});




function fecharModalLancamento() {

  $('#exampleModal').modal('hide');

}


function iniciar() {


  const lista = document.getElementById('itens');

  lista.innerHTML = '';

  let notasalunos = '';

  for (let i = 0; i < alunos.length; i++) {


    let tag_abertura = '<tr><th>' + alunos[i][0] + '</th>';

    let tag_fechamento = '</tr>';

    let item = '';

    let media = 0;

    for (let j = 1; j < 5; j++) {

      item += '<td>' + alunos[i][j].toFixed(2) + '</td>';

      media += Number(alunos[i][j]);

    }


    item = item + "<td>" + (media / 4).toFixed(2) + '</td>';

    item = item + '<td align="center"><button type="button" class="btn btn-danger">Apagar</button></td>';

    item = tag_abertura + item + tag_fechamento;

    notasalunos = notasalunos + item;

  }

  //  console.log(notasalunos);

  lista.innerHTML = notasalunos;


}

