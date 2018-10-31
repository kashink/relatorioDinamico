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
