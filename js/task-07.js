const fontSizeControl = document.getElementById('font-size-control');
const abracadabra = document.getElementById('text');

abracadabra.style.fontSize = fontSizeControl.value + 'px';
function updateFontSize() {
    const fontSize = fontSizeControl.value + 'px';
    abracadabra.style.fontSize = fontSize;
};
fontSizeControl.addEventListener('input', updateFontSize);

