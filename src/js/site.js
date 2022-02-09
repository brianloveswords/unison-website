(() => {
  const all = document.querySelectorAll.bind(document);
  const one = document.querySelector.bind(document);

  [...all(".fold-toggle")].forEach((toggle) => {
    toggle.addEventListener("click", (ev) => {
      const folded = ev.currentTarget.parentNode;
      folded.classList.toggle("is-folded");
    });
  });

  [...all(".tooltip-trigger")].forEach((trigger) => {
    toggle.addEventListener("onMouseOver", (_evt) => {
      const tooltipContent = one(`#${trigger.dataset.tooltipContentId}`);

      if (tooltipContent) {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip", "below", "arrow-middle");

        const bubble = document.createElement("div");
        bubble.classList.add("tooltip-bubble");
        bubble.innerHTML = tooltipContent.innerHTML;

        tooltip.appendChild(bubble);
        trigger.appendChild(tooltip);
      }
    });

    toggle.addEventListener("onMouseOut", (_evt) => {
      [...all(".tooltip")].forEach((tooltip) => {
        tooltip.remove();
      });
    });
  });
})();
