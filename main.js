// <<<<<<<<boton switch para  dark o light>>>>>>>>>>>>>>>>>>>>
/* con window,  obtengo el color preferido del usuario con .matches, si es dark, me devuelve true, segun el windows. sino tiene nada guardado es light*/
const preferedColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";
const slider = document.getElementById("slider");

/*seteo con el slider el data-theme para obtener dark o light*/
const setTheme = (theme) => {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  ); /*document element es la parte raiz del documento, es decir, el html, en ese doc, voy a setear un atributo con setAtribute, que en este caso es el data-theme*/
  /*en theme guardo el modo del usuario*/
  localStorage.setItem(
    "theme",
    theme
  ); /*guarda como preferencia del usuario, es un objeto que se puede usar como almacenaje dentro del browser del usuario y resiste las sesiones, es decir, se guarda*/
};

setTheme(
  localStorage.getItem("theme") || preferedColorScheme
); /*miro si ya tiene guardada una referencia, si no tiene nada guardado porque es la 1ra vez, voy a usar preferedColorSchheme, es decir, dark o light*/

/*me sirve para que si actualizo la pagina, me guarde el modo*/
slider.addEventListener("click", () => {
  let switchToTheme =
    localStorage.getItem("theme") === "dark"
      ? "light" 
      : "dark"; /* lo que esta en el localstorage, voy a obtener con getItem el theme, si este theme es igual a dark, voy a usar el contrario, osea light y viceversa */
  setTheme(switchToTheme);
  slider.classList.toggle("active");
   


});




document.addEventListener("DOMContentLoaded", () => {
  //DECLARACION DE VARIABLES
  const inputGet = document.getElementById("url__image");
  const imageMeme = document.getElementById("image__meme");
  const colorBtn = document.getElementById("btn__bgimagen");
  const selectBg = document.getElementById("select__bg");
  // selecciono el input y la imagen por sus IDs
  const brightnessInput = document.getElementById("brightness");
  const opacityInput = document.getElementById("opacity");
  const contrastInput = document.getElementById("contrast");
  const blurInput = document.getElementById("blur");
  const grayscaleInput = document.getElementById("grayscale");
  const sepiaInput = document.getElementById("sepia");
  const hueInput = document.getElementById("hue");
  const saturateInput = document.getElementById("saturate");
  const negativeInput = document.getElementById("negative");
  const memeImage = document.getElementById("image__meme");
  // Seleccionamos el boton de reset y los inputs de los filtros
  const resetButton = document.getElementById("reset");
  // Obtener el canvas de edición
  const memeCanvas = document.getElementById("canvasMeme");
  //ocultar paneles
  const btnPanelText = document.getElementById("btnPanelText");
  const btnPanelImg = document.getElementById("btnPanelImg");
  const panelTexto = document.getElementById("panelTexto");
  const panelImg = document.getElementById("panel-img");
  //para escribir top text y bottom text
  const inputTextTop = document.getElementById("input__text__top");
  const topText = document.getElementById("top-text");

  const inputTextBottom = document.getElementById("input__text__bottom");
  const bottomText = document.getElementById("bottom-text");
  const checkTextBottom = document.getElementById("check__text__bottom");

  //para ocultar texto superior
  const checkTextTop = document.getElementById("check__text__top");
  //para cambiar la fuente
  const textSelect = document.getElementById("textSelect");
  const selectOptions = textSelect.options;
  const sizeSelect = document.getElementById("size");
  //para justificar textos
  const izqButton = document.getElementById("izq");
  const centralButton = document.getElementById("central");
  const derButton = document.getElementById("der");
  const inputTop = document.getElementById("input__text__top");
  const inputBottom = document.getElementById("input__text__bottom");
  //para cambiar de color textos
  const colorText = document.getElementById("color__text");
  const colorTextSpan = document.getElementById("color__text__span");
  //cambiar color de fondo
  const bgFont = document.getElementById("bg__font");
  const bgFontSpan = document.getElementById("bg__font__span");
  //fondo transparente
  const checkTransparent = document.getElementById("check__transparent");
  //espacio entre caracteres
  const spacingInput = document.getElementById("spacing");
  //interlineado
  const interlineadoInput = document.getElementById("interlineado");
  // coloca la imagen de url en el contenedor de meme
  inputGet.addEventListener("input", () => {
    const imageUrl = inputGet.value;
    imageMeme.style.backgroundImage = `url("${imageUrl}")`;
    imageMeme.style.backgroundSize = "cover";
  });

  //aplica color elegido a mi meme

  colorBtn.addEventListener("input", () => {
    const selectedColor = colorBtn.value;
    imageMeme.style.backgroundColor = selectedColor;
  });

  // Actualizar bgimagen__span con el color seleccionado
  const bgimagenSpan = document.getElementById("bgimagen__span");
  const btnBgimagen = document.getElementById("btn__bgimagen");

  btnBgimagen.addEventListener("input", () => {
    const selectedColor = btnBgimagen.value;
    bgimagenSpan.textContent = selectedColor;
  });

  //<<<<<<<<<<<<<<<<<<<<<filtros a seleccionar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  selectBg.addEventListener("change", () => {
    const selectedOption = selectBg.value;

    // Aplicar estilos según la opción seleccionada
    switch (selectedOption) {
      case "lighten":
        imageMeme.style.filter = "brightness(150%)";
        break;
      case "darken":
        imageMeme.style.filter = "brightness(50%)";
        break;
      case "difference":
        imageMeme.style.filter = "saturate(500%)";
        break;
      case "luminosity":
        imageMeme.style.filter = "brightness(190%)";
        break;
      case "multiply":
        imageMeme.style.filter = "contrast(50%)";
        break;
      default:
        // No hacer nada para la opción "unset"
        imageMeme.style.filter = "none";
        break;
    }
  });

  // <<<<<<<<<<<<<<<<<<<<<<<<<<filtros varios>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // BRILLO
  // escucha el evento "input" del input de brillo
  brightnessInput.addEventListener("input", () => {
    // obtengo el valor actual del brillo
    const brightnessValue = brightnessInput.value;
    // actualizo el estilo de la imagen con el nuevo brillo
    memeImage.style.filter = `brightness(${brightnessValue})`;
  });

  //OPACIDAD
  // escucha el evento "input" del input de opacidad
  opacityInput.addEventListener("input", () => {
    // obtengo el valor actual de la opacidad
    const opacityValue = opacityInput.value;
    // actualizo el estilo de la imagen con la nueva opacidad
    memeImage.style.opacity = opacityValue;
  });

  //CONTRASTE
  // escucha el evento "input" del input de contraste
  contrastInput.addEventListener("input", () => {
    // obtengo el valor actual del contraste
    const contrastValue = contrastInput.value;
    // actualizo el estilo de la imagen con el nuevo contraste
    memeImage.style.filter = `contrast(${contrastValue}%)`;
  });

  //DESENFOQUE
  // escucha el evento "input" del input de desenfoque
  blurInput.addEventListener("input", () => {
    // obtengo el valor actual del desenfoque
    const blurValue = blurInput.value;
    // actualizo el estilo de la imagen con el nuevo desenfoque
    memeImage.style.filter = `blur(${blurValue}px)`;
  });

  //ESCALA DE GRISES
  // escucha el evento "input" del input de escala de grises
  grayscaleInput.addEventListener("input", () => {
    // obtengo el valor actual de la escala de grises
    const grayscaleValue = grayscaleInput.value;
    // actualizo el estilo de la imagen con la nueva escala de grises
    memeImage.style.filter = `grayscale(${grayscaleValue}%)`;
  });

  //SEPIA
  // escucha el evento "input" del input de sepia
  sepiaInput.addEventListener("input", () => {
    // obtengo el valor actual del efecto sepia
    const sepiaValue = sepiaInput.value;
    // actualizo el estilo de la imagen con el nuevo efecto sepia
    memeImage.style.filter = `sepia(${sepiaValue}%)`;
  });

  //HUE
  // escucha el evento "input" del input de hue
  hueInput.addEventListener("input", () => {
    // obtengo el valor actual del matiz (hue)
    const hueValue = hueInput.value;
    // actualizo el estilo de la imagen con el nuevo matiz (hue)
    memeImage.style.filter = `hue-rotate(${hueValue}deg)`;
  });

  //SATURACION
  // escucha el evento "input" del input de saturacion
  saturateInput.addEventListener("input", () => {
    // obtengo el valor actual de la saturacion
    const saturateValue = saturateInput.value;
    // actualizo el estilo de la imagen con la nueva saturacion
    memeImage.style.filter = `saturate(${saturateValue}%)`;
  });

  //NEGATIVO
  // escucha el evento "input" del input de negativo
  negativeInput.addEventListener("input", () => {
    // obtengo el valor actual del efecto negativo
    const negativeValue = negativeInput.value;
    // actualizo el estilo de la imagen con efecto negativo
    memeImage.style.filter = `invert(${negativeValue}%)`;
  });

  //<<<<<<<<<<<<<<<<<<< boton de reset>>>>>>>>>>>>>>>>>
  resetButton.addEventListener("click", () => {
    // Reseteamos todos los filtros a sus valores iniciales
    negativeInput.value = 0;
    saturateInput.value = 100;
    hueInput.value = 0;
    sepiaInput.value = 0;
    grayscaleInput.value = 0;
    blurInput.value = 0;
    contrastInput.value = 100;
    opacityInput.value = 1;
    brightnessInput.value = 1;

    // Aplicamos los cambios en los filtros a la imagen
    applyFilters();
  });

  // <<<<<<<<<<<<<funcion para aplicar los filtros a la imagen>>>>>>>>>>>>
  function applyFilters() {
    const memeImage = document.getElementById("image__meme");
    const negativeValue = negativeInput.value;
    const saturateValue = saturateInput.value;
    const hueValue = hueInput.value;
    const sepiaValue = sepiaInput.value;
    const grayscaleValue = grayscaleInput.value;
    const blurValue = blurInput.value;
    const contrastValue = contrastInput.value;
    const opacityValue = opacityInput.value;
    const brightnessValue = brightnessInput.value;
    memeImage.style.filter = `
      invert(${negativeValue}%)
      saturate(${saturateValue}%)
      hue-rotate(${hueValue}deg)
      sepia(${sepiaValue}%)
      grayscale(${grayscaleValue}%)
      blur(${blurValue}px)
      contrast(${contrastValue}%)
      opacity(${opacityValue})
      brightness(${brightnessValue})
    `;
  }

  //escucha el evento "input" de cada filtro
  negativeInput.addEventListener("input", applyFilters);
  saturateInput.addEventListener("input", applyFilters);
  hueInput.addEventListener("input", applyFilters);
  sepiaInput.addEventListener("input", applyFilters);
  grayscaleInput.addEventListener("input", applyFilters);
  blurInput.addEventListener("input", applyFilters);
  contrastInput.addEventListener("input", applyFilters);
  opacityInput.addEventListener("input", applyFilters);
  brightnessInput.addEventListener("input", applyFilters);

  //<<<<<<<<<<<<<<<<<<<<<<DESCARGAR MEME, no funciona!<<<<<<<<<<<<<<<<<<<<<<
  const downloadButton = document.getElementById("downloaderMeme");
  const meme = document.getElementById("canvasMeme");

  downloadButton.addEventListener("click", () => downloadMeme());

  const downloadMeme = () => {
    /*domtoimage es una biblioteca JavaScript que se utiliza para convertir 
    elementos DOM (Document Object Model) en imágenes. Permite tomar un 
    elemento HTML y convertirlo en una imagen en formato Blob o Data URL, 
    lo que facilita la descarga o visualización del contenido generado.*/
    domtoimage.toBlob(meme).then(function (blob) {
      window.saveAs(blob, "mi-meme.png");
    });
  };


  


  //>>>>>>>>>>>>>>>>>>me oculta panel imagen cuando presiono el boton texto>>>>>>>>>>>>>>>
  btnPanelText.addEventListener("click", () => {
    panelTexto.classList.remove("hidden");
    panelImg.classList.add("hidden");
  });

  btnPanelImg.addEventListener("click", () => {
    panelImg.classList.remove("hidden");
    panelTexto.classList.add("hidden");
  });

  //para escribir el texto superior, top text
  inputTextTop.addEventListener("input", () => {
    topText.innerText = inputTextTop.value;
  });
  //para escribir texto inferior, bottom text
  inputTextBottom.addEventListener("input", () => {
    bottomText.innerText = inputTextBottom.value;
  });

  //>>>>>>>>>>>>>>>>>>me oculta el texto superior>>>>>>>>>>>>>>>>>>>>
  checkTextTop.addEventListener("click", () => {
    if (checkTextTop.checked) {
      topText.style.display = "none";
    } else {
      topText.style.display = "block";
    }
  });

  //>>>>>>>>>>>>>>>>>>me oculta el texto inferior>>>>>>>>>>>>>
  checkTextBottom.addEventListener("click", () => {
    if (checkTextBottom.checked) {
      bottomText.style.display = "none";
    } else {
      bottomText.style.display = "block";
    }
  });

  //<<<<<<<<<<<<<<<<<<<<cambiar fuente>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  textSelect.addEventListener("change", () => {
    const selectedFont = textSelect.value;
    topText.style.fontFamily = selectedFont;
    bottomText.style.fontFamily = selectedFont;
  });

  //<<<<<<<<<<<<<<<<<<<<<<cambia el color con el select<<<<<<<<<<<<<<<<<<
  // funcion para aplicar el color de resaltado al pasar el mouse sobre una opción del select
  function applyHighlightColor(event) {
    const selectedFont = textSelect.value;
    topText.style.fontFamily = selectedFont;
    bottomText.style.fontFamily = selectedFont;
    event.target.style.color = "red"; // cambia el color a rojo cuando se pasa el mouse sobre la opción
  }

  // funcion para restablecer el color original al quitar el mouse de una opción del select
  function resetColor(event) {
    event.target.style.color = ""; // elimina el color para que vuelva al color original
  }

  // agrega el evento "mouseover" a cada opción del select
  for (let i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener("mouseover", applyHighlightColor);
    selectOptions[i].addEventListener("mouseout", resetColor);
  }

  //<<<<<<<<<<<<<<<<cambiar tamaño del texto inferior/superior<<<<<<<<<<<<<<<<
  // funcion para aplicar el tamaño de letra seleccionado
  function applyFontSize() {
    const selectedFontSize = sizeSelect.value;
    topText.style.fontSize = selectedFontSize + "px";
    bottomText.style.fontSize = selectedFontSize + "px";
  }

  // agrega el evento "change" al select para actualizar el tamaño de letra
  sizeSelect.addEventListener("change", applyFontSize);

  //<<<<<<<<<<<<<<<<<<<justificacion de texto>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const btnIzq = document.getElementById("izq");
  btnIzq.addEventListener("click", () => {
    textMeme.style.textAlign = "left";
    bottomText.style.textAlign = "left";
  });

  const btnDer = document.getElementById("der");
  btnDer.addEventListener("click", () => {
    textMeme.style.textAlign = "right";
    bottomText.style.textAlign = "right";
  });

  const btnCentral = document.getElementById("central");
  btnCentral.addEventListener("click", () => {
    textMeme.style.textAlign = "center";
    bottomText.style.textAlign = "center";
  });

  //<<<<<<<<<<<<<<<<<<<cambia de color textos>>>>>>>>>>>>>>>
  colorText.addEventListener("input", () => {
    const selectedColor = colorText.value;
    topText.style.color = selectedColor;
    bottomText.style.color = selectedColor;
    colorTextSpan.textContent = selectedColor;
  });

  //<<<<<<<<<<<<<<<cambia de color el fondo de los textos>>>>>>>>>>>>>
  bgFont.addEventListener("input", () => {
    const selectedColor = bgFont.value;
    topText.style.backgroundColor = selectedColor;
    bottomText.style.backgroundColor = selectedColor;
    bgFontSpan.textContent = selectedColor;
  });

  //<<<<<<<<<<<poner fondo transparente>>>>>>>>>>>>
  checkTransparent.addEventListener("change", () => {
    if (checkTransparent.checked) {
      topText.style.backgroundColor = "transparent";
      bottomText.style.backgroundColor = "transparent";
    } else {
      // Si el checkbox no esta marcado, restaurar el fondo a su valor predeterminado
      topText.style.backgroundColor = ""; // elimina el estilo de fondo agregado
      bottomText.style.backgroundColor = ""; // elimina el estilo de fondo agregado
    }
  });

  //<<<<<<<<<<<contorno textos>>>>>>>>>>>>
  const textMeme = document.querySelector(".text-meme");
  btnNinguno.addEventListener("click", () => {
    textMeme.classList.remove("contorno-claro");
    bottomText.classList.remove("contorno-claro");
    textMeme.classList.remove("contorno-oscuro");
    bottomText.classList.remove("contorno-oscuro");

    textMeme.classList.add("contorno-ninguno");
    bottomText.classList.add("contorno-ninguno");
  });

  const btnClaro = document.getElementById("btnClaro");
  btnClaro.addEventListener("click", () => {
    textMeme.classList.remove("contorno-ninguno");
    bottomText.classList.remove("contorno-ninguno");
    textMeme.classList.remove("contorno-oscuro");
    bottomText.classList.remove("contorno-oscuro");

    textMeme.classList.add("contorno-claro");
    bottomText.classList.add("contorno-claro");
  });

  const btnOscuro = document.getElementById("btnOscuro");
  btnOscuro.addEventListener("click", () => {
    textMeme.classList.remove("contorno-ninguno");
    bottomText.classList.remove("contorno-ninguno");
    textMeme.classList.remove("contorno-claro");
    bottomText.classList.remove("contorno-claro");

    textMeme.classList.add("contorno-oscuro");
    bottomText.classList.add("contorno-oscuro");
  });

  //<<<<<<<<<<<<<<<espacio entre textos>>>>>>>>>>>>>>>>>>>>>

  spacingInput.addEventListener("input", () => {
    const spacingValue = spacingInput.value;
    topText.style.letterSpacing = spacingValue + "px";
    bottomText.style.letterSpacing = spacingValue + "px";
  });

  //<<<<<<<<<<<<<<<<interlineado entre textos>>>>>>>>>>>>>>
  interlineadoInput.addEventListener("input", () => {
    const interlineadoValue = interlineadoInput.value;
    topText.style.lineHeight = interlineadoValue;
    bottomText.style.lineHeight = interlineadoValue;
  });

  //<<<<<<<<<<<cerrar panel, NO FUNCIONA! >>>>>>>>>>>>>>>>
  function ocultarPaneles() {
    const paneles = document.querySelectorAll(".panel");
    paneles.forEach((panel) => {
      if (panel.classList.contains("activo")) {
        panel.classList.remove("activo"); // Remover la clase .activo del panel actualmente mostrado
        panel.classList.add("oculto");
      }
    });
  }
  
  // Obtener el botón y el panel por sus IDs
  const panelCloseButton = document.getElementById("panel-close-button");

  panelCloseButton.addEventListener("click", () => {
    ocultarPaneles();
  });
  



 
  
  //<<<<<<<<<<<<<<<<<<<ocultar paneles, segun en cual me posiciono>>>>>>>>>>
  //obtenemos los elementos de los botones y paneles
  const panel = document.getElementById("panel");

  // Variable para rastrear si el panel de texto está visible o no
  let panelTextoVisible = false;

  // event listener para mostrar el panel de imagen
  btnPanelImg.addEventListener("click", function () {
    panelTexto.classList.add("oculto");
    panelTextoVisible = false;
    panel.classList.toggle("oculto");
    panel.classList.add("activo"); // Agregar la clase .activo al panel actualmente mostrado

  });

  // event listener para mostrar/ocultar el panel de texto
  btnPanelText.addEventListener("click", function () {
    if (!panelTextoVisible) {
      panel.classList.add("oculto");
      panelTextoVisible = true;
      panelTexto.classList.remove("oculto");
      panelTexto.classList.add("activo"); // Agregar la clase .activo al panel actualmente mostrado

    }
  });
});
