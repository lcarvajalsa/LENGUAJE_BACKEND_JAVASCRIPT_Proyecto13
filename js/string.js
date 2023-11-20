let progreo = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avance = 0;
let tiempo = setInterval(() => {
    avance += 1;
    progreo.style.width = `${avance}%`
    if (avance === 100) {
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent = `${avance}`
}, 75);