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
