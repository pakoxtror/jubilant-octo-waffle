document.addEventListener("DOMContentLoaded", function () {
  //Flores tooltip
  const flores = document.querySelectorAll(".flower");
  const frases = [
    "Si pudiera, te regalaría un campo lleno de flores amarillas, pero por ahora, espero que este pequeño ramo te recuerde cuánto iluminas mi vida y cuánto me divierto a tu lado.",
    "Estas flores amarillas son solo un pequeño reflejo de la luz que le das a mi vida. Y sí, ¡Casi tan divertidas como tú!",
    "En este 21 de septiembre, te regalo un ramo de sonrisas amarillas, también conocidas como flores. ¡Espero que te hagan sonreír tanto como tú a mí!",
    "Si cada flor amarilla representara una sonrisa que me has sacado, ¡necesitaríamos un jardín entero!",
    "Te regalo flores amarillas porque, al igual que tú, tienen ese toque especial que alegra mis días y llena de color mis momentos.",
  ];

  flores.forEach((flor, index) => {
    const tooltip = flor.querySelector(".tooltip");
    tooltip.textContent = frases[index % frases.length];
  });
});
