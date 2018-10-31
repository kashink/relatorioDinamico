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
