// Archivo base para animaciones o interactividad

// ---------- Animación de entrada (fade-in + slide) ----------
window.addEventListener("DOMContentLoaded", () => {
    const elementosAnimados = document.querySelectorAll(".animate");

    elementosAnimados.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`;

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    });
});

// ---------- Botón Wiki ----------
const botonWiki = document.querySelector(".intro button");

if (botonWiki) {
    botonWiki.addEventListener("mouseenter", () => {
        botonWiki.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.9)";
        botonWiki.style.transform = "scale(1.08)";
    });

    botonWiki.addEventListener("mouseleave", () => {
        botonWiki.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        botonWiki.style.transform = "scale(1)";
    });
}

// ---------- Tarjetas de proyectos ----------
const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "scale(1.1) rotate(2deg)";
        tarjeta.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        tarjeta.style.boxShadow = "0 0 25px rgba(0, 200, 255, 0.8)"; // brillo celeste
    });

    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "scale(1) rotate(0deg)";
        tarjeta.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.5)"; // sombra normal
    });

    // Pequeño "rebote" al hacer click
    tarjeta.addEventListener("click", () => {
        tarjeta.style.transform = "scale(0.95)";
        tarjeta.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.9)"; // destello rápido
        setTimeout(() => {
            tarjeta.style.transform = "scale(1)";
            tarjeta.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.5)";
        }, 200);
    });
});

console.log("Animaciones listas: entrada + botón + tarjetas con brillo ✨");
