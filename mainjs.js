var difLeft;
var difTop;

function setDif(inDifLeft,inDifTop){
  difleft = inDifLeft;
  difTop = inDifTop;
}

//controla visibilidade da div das propriedades do elemento selecionado
function closeProp(){
  document.getElementById('propriedades').style.display = 'none';
}

function showProp(){
  document.getElementById('propriedades').style.display = 'unset';
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

  var elemDrag = document.getElementById(ev.target.id);

  //calcula posição do mouse pra fazer o drop do elemento certo
  difTop = ev.clientY - elemDrag.offsetTop;
  difLeft = ev.clientX - elemDrag.offsetLeft;

  setDif(difLeft,difTop);
}

function drop(ev) {
    ev.preventDefault();

    var newId; //id do elemento de dentro da area de drop
    var data = ev.dataTransfer.getData("text"); //resgata id do elemento "arrastado"
    var elemData = document.getElementById(data); //carrega elemento

    //trata diferente quando o drag vem da toolbar ou de dentro da tela
    var novoElem = data.search('clone');

    if (novoElem > 0){
      //coloca o elemento na posição certo
      var width = elemData.offsetWidth;
      width = ev.clientX - difLeft;

      var height = elemData.offsetHeight;
      height = ev.clientY - difTop;

      elemData.style.left = width.toString() + 'px';
      elemData.style.top = height.toString() + 'px';

      newId = data;
    } else {
      //clona elemento da toolbar
      var cln = elemData.cloneNode(true);

      var auxClassName = cln.className;
      var qtdElem = document.getElementsByClassName(auxClassName);
      newId = data + 'clone(' + qtdElem.length.toString() + ')'
      cln.id = newId;
      cln.style.position = 'absolute';

      ev.target.appendChild(cln);

      var width = cln.offsetWidth;
      width = ev.clientX - difLeft;

      var height = cln.offsetHeight;
      height = ev.clientY - difTop;

      cln.style.left = width.toString() + 'px';
      cln.style.top = height.toString() + 'px';

      cln.onclick= function() {
        //cria elemento display

        showProp();

        if (document.getElementById('exemplo') != null){
          document.getElementById('exemplo').remove();
        }

        var clnDsp = this.cloneNode(true);
        clnDsp.id = 'exemplo';
        clnDsp.className = newId;
        clnDsp.style.margin = '0px';

        var editElem = document.getElementById('editElem');
        editElem.appendChild(clnDsp);
        clnDsp.style.position = 'unset';

        setPropValues(clnDsp);
      }
    }
}

function dropOut(ev) {
    ev.preventDefault();

    //deleta elementos de dentro da area de drop
    var data = ev.dataTransfer.getData("text");
    var isClone = data.search('clone');

    if (isClone > 0){
      var data = ev.dataTransfer.getData("text");
      document.getElementById(data).remove();
    }
}
