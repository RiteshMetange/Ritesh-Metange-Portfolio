document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const target = button.dataset.section;
      const section = card.querySelector(target);

      if (!section) return;

      // remove active classes
      buttons.forEach(btn => btn.classList.remove("is-active"));
      sections.forEach(sec => sec.classList.remove("is-active"));

      // add active classes
      button.classList.add("is-active");
      section.classList.add("is-active");

      // update card state
      card.setAttribute("data-state", target);

      if (target !== "#about") {
        card.classList.add("is-active");
      } else {
        card.classList.remove("is-active");
      }

    });

  });

});