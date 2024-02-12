function toggleMode() {
    const html = document.documentElement
  
    /*if (html.classList.contains("light")) {
      html.classList.remove("light")
    } else {
      html.classList.add("light")
    }*/
  
    html.classList.toggle("light")
  
    // pegar a tag imag
    const img = document.querySelector("#profile img")
    
    // substituit a imag
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./asset/AvatarLIGHT.png.png")
    } else {
      // se nao tiver light mode, manter a imagem normal
      img.setAttribute("src", "./asset/Avatar.png")
    }
  }
  