"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //1st step: add event to button

  //2nd step: add active/hidden class to hidden text region

  //3rd step: if the targeted button has active class we remove it, and add hidden class. if the targeted button has hidden class we remove it and add active class.

  // 4th step: we want a function that opens and closes the targeted button(hidden panel)

  // 5th step: add that function to all accordion btns pass it in as a callback

  const accordionBtns = document.querySelectorAll(".faq__trigger");

  function setPanelState(btn, isOpen) {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const icon = btn.querySelector("img");

    btn.setAttribute("aria-expanded", isOpen);

    panel.classList.toggle("hidden", !isOpen);
    panel.classList.toggle("active", isOpen);
    icon.src = isOpen
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
    icon.alt = isOpen ? "Collapse section" : "Expand section";
  }

  function toggleAccordion(clickedBtn) {
    accordionBtns.forEach((btn) => {
      const isThisBtn = btn === clickedBtn;
      setPanelState(
        btn,
        isThisBtn && btn.getAttribute("aria-expanded") !== "true"
      );
    });
  }

  // ✅ Add event listeners to each accordion button
  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });
});
