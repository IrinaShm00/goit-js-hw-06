const fontSizeControl = document.getElementById('font-size-control');
const abracadabra = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px';
    abracadabra.style.fontSize = fontSize;
});