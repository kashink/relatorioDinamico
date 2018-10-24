var difLeft;
var difTop;

function setDif(inDifLeft,inDifTop){
  difleft = inDifLeft;
  difTop = inDifTop;
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

function alteraElem(){
  //resgata elemento real e exemplo
  var elemExe = document.getElementById('exemplo');
  var alterElem = document.getElementById(elemExe.className);

  //tamanho da fonte
  var fontSize = document.getElementById('tamFont').value;
  fontSize = fontSize.replace('px','');
  fontSize = fontSize + 'px';

  //texto
  var txtValue = document.getElementById('txtValue').value;

  //largura
  var widthValue = document.getElementById('widthElem').value;
  widthValue = widthValue.replace('px','');
  widthValue = widthValue + 'px';

  //largura
  var srcImgValue = document.getElementById('srcImgElem').value;

  //z-index
  var zIndexElem = document.getElementById('zIndexElem').value;

  //color
  var colorElem = document.getElementById('colorElem').value;

  //background color
  var bgColorElem = document.getElementById('bgColorElem').value;

  //font family
  var fontElem = document.getElementById('fontElem').value;

  //estilo da borda
  var borderStyleElem = document.getElementById('borderStyleElem').value;

  //tamanho borda
  var borderWidthValue = document.getElementById('borderWidthElem').value;
  borderWidthValue = borderWidthValue.replace('px','');
  borderWidthValue = borderWidthValue + 'px';

  //border color
  var borderColorElem = document.getElementById('borderColorElem').value;

  //border radius
  var borderRadiusElem = document.getElementById('borderRadiusElem').value;
  borderRadiusElem = borderRadiusElem.replace('px','');
  borderRadiusElem = borderRadiusElem + 'px';

  //altera Elemento
  alterElem.style.fontSize = fontSize;
  elemExe.style.fontSize = fontSize;

  alterElem.innerHTML = txtValue;
  elemExe.innerHTML = txtValue;

  alterElem.style.width = widthValue;
  elemExe.style.width = widthValue;

  alterElem.src = srcImgValue;
  elemExe.src = srcImgValue;

  alterElem.style.zIndex = zIndexElem;
  elemExe.style.zIndex = zIndexElem;

  alterElem.style.color = colorElem;
  elemExe.style.color = colorElem;

  alterElem.style.backgroundColor = bgColorElem;
  elemExe.style.backgroundColor = bgColorElem;

  alterElem.style.fontFamily = fontElem;
  elemExe.style.fontFamily = fontElem;

  alterElem.style.borderStyle = borderStyleElem;
  elemExe.style.borderStyle = borderStyleElem;

  alterElem.style.borderWidth = borderWidthValue;
  elemExe.style.borderWidth = borderWidthValue;

  alterElem.style.borderColor = borderColorElem;
  elemExe.style.borderColor = borderColorElem;

  alterElem.style.borderRadius = borderRadiusElem;
  elemExe.style.borderRadius = borderRadiusElem;
}

//alimenta os valores da div de propriedades do elemento selecionado
function setPropValues(inElem){
  document.getElementById('tamFont').value = inElem.style.fontSize;
  document.getElementById('txtValue').value = inElem.innerHTML;
  document.getElementById('widthElem').value = inElem.style.width;
  document.getElementById('srcImgElem').value = inElem.src;
  document.getElementById('zIndexElem').value = inElem.style.zIndex;

  document.getElementById('colorElem').value = rgbToHex(inElem.style.color);
  document.getElementById('colorPicker').innerHTML = rgbToHex(inElem.style.color);
  document.getElementById('colorPicker').style.backgroundColor = inElem.style.color;

  document.getElementById('bgColorElem').value = rgbToHex(inElem.style.backgroundColor);
  document.getElementById('bgColorPicker').innerHTML = rgbToHex(inElem.style.backgroundColor);
  document.getElementById('bgColorPicker').style.backgroundColor = inElem.style.backgroundColor;

  document.getElementById('fontElem').value = inElem.style.fontFamily;
  document.getElementById('borderStyleElem').value = inElem.style.borderStyle;
  document.getElementById('borderWidthElem').value = inElem.style.borderWidth;
  document.getElementById('borderRadiusElem').value = inElem.style.borderRadius;

  document.getElementById('borderColorElem').innerHTML = rgbToHex(inElem.style.borderColor);
  document.getElementById('borderColorPicker').innerHTML = rgbToHex(inElem.style.borderColor);
  document.getElementById('borderColorPicker').style.backgroundColor = inElem.style.borderColor;
}

//CONVERTE COR R,G,B EM HEX
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

//TRATA ENTRADA RGB PRA TRANSFORMAR EM HEX
function rgbToHex(hexColor) {
    var r = '';
    var g = '';
    var b = '';
    var index = 0;

    hexColor = hexColor.substring(4,hexColor.length);
    index = hexColor.search(',');
    r = hexColor.substring(0,index);

    hexColor = hexColor.substring(index + 2,hexColor.length);
    index = hexColor.search(',');
    g = hexColor.substring(0,index);

    hexColor = hexColor.substring(index + 2,hexColor.length);
    index = hexColor.search(',');
    b = hexColor.substring(0,index);

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//eventos disparados pelos elementos jsColor
function setBorderColor(picker) {
	document.getElementById('borderColorElem').value = '#' + picker.toString();
  document.getElementById('borderColorPicker').innerHTML = '#' + picker.toString();
}

function setColor(picker) {
	document.getElementById('colorElem').value = '#' + picker.toString();
  document.getElementById('colorPicker').innerHTML = '#' + picker.toString();
}

function setBgColor(picker) {
	document.getElementById('bgColorElem').value = '#' + picker.toString();
  document.getElementById('bgColorPicker').innerHTML = '#' + picker.toString();
}

//controla visibilidade da div das propriedades do elemento selecionado
function closeProp(){
  document.getElementById('propriedades').style.display = 'none';
}

function showProp(){
  document.getElementById('propriedades').style.display = 'unset';
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
