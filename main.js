
// boton switch para  dark o light
/* con window,  obtengo el color preferido del usuario*/
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');


/*seteo el data-theme para obtener dark o light*/
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme',theme);/*document element es la parte raiz del documento, es decir, el html, en ese doc, voy a setear un atributo con setAtribute, que en este caso es el data-theme*/
  /*en theme guardo el modo del usuario*/
  localStorage.setItem('theme', theme);/*guarda como preferencia del usuario, es un objeto que se puede usar como almacenaje dentro del browser del usuario y resiste las sesiones, es decir, se guarda*/
}

setTheme(localStorage.getItem('theme') || preferedColorScheme);/*miro si ya tiene guardada una referencia, si no tiene nada guardado porque es la 1ra vez, voy a usar preferedColorSchheme, es decir, dark o light*/

slider.addEventListener('click', ()  => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
});




















// coloca la imagen de url en el contenedor de meme
document.addEventListener('DOMContentLoaded', () => {
  const inputGet = document.getElementById('url__image');
  const imageMeme = document.getElementById('image__meme');

  inputGet.addEventListener('input', () => {
    const imageUrl = inputGet.value;
    imageMeme.style.backgroundImage = `url("${imageUrl}")`;
    imageMeme.style.backgroundSize = 'cover';
  });
});





//aplica color elegido a mi meme
document.addEventListener('DOMContentLoaded', () => {
  const inputGet = document.getElementById('url__image');
  const imageMeme = document.getElementById('image__meme');
  const colorBtn = document.getElementById('btn__bgimagen');

  inputGet.addEventListener('input', () => {
    const imageUrl = inputGet.value;
    imageMeme.style.backgroundImage = `url("${imageUrl}")`;
    imageMeme.style.backgroundSize = 'cover';
  });

  colorBtn.addEventListener('input', () => {
    const selectedColor = colorBtn.value;
    imageMeme.style.backgroundColor = selectedColor;
  });
});



















//filtros a seleccionar
document.addEventListener('DOMContentLoaded', () => {
  const inputGet = document.getElementById('url__image');
  const imageMeme = document.getElementById('image__meme');
  const selectBg = document.getElementById('select__bg');

  inputGet.addEventListener('input', () => {
    const imageUrl = inputGet.value;
    imageMeme.style.backgroundImage = `url("${imageUrl}")`;
    imageMeme.style.backgroundSize = 'cover';
  });

  selectBg.addEventListener('change', () => {
    const selectedOption = selectBg.value;

    // Aplicar estilos según la opción seleccionada
    switch (selectedOption) {
      case 'lighten':
        imageMeme.style.filter = 'brightness(150%)';
        break;
      case 'darken':
        imageMeme.style.filter = 'brightness(50%)';
        break;
      case 'difference':
        imageMeme.style.filter = 'saturate(500%)';
        break;
      case 'luminosity':
        imageMeme.style.filter = 'brightness(190%)';
        break;
      case 'multiply':
        imageMeme.style.filter = 'contrast(50%)';
        break;
      default:
        // No hacer nada para la opción "unset"
        imageMeme.style.filter = 'none';
        break;
    }
  });
});










//descarga el meme
const downloaderMeme = () => {
  domtoimage.toBlob($('canvasMeme')).then(function (blob) {
    saveAs(blob, 'miMeme.png')
  })
}



const inicializarPaneles = () => {
  $('buttonImg').addEventListener('click', () => {
    mostrarPanelImagen()
    mostrarPanel()
  })
  $('text-panel-button').addEventListener('click', () => {
    mostrarPanelTexto()
    mostrarPanel()
  })
  $('panel-close-button').addEventListener('click', ocultarPanel)
}













document.addEventListener('DOMContentLoaded', () => {
  const textPanelButton = document.getElementById('text-panel-button');
  const textPanel = document.querySelector('.text__panel');

  textPanelButton.addEventListener('click', () => {
    textPanel.classList.toggle('hidden');
  });
});
