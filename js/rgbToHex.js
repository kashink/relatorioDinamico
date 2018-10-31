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
