document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");

  if (!toggle) {
    return;
  }

  const closeDropdown = () => {
    dropdown.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.blur();
  };

  const openDropdown = () => {
    dropdown.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const shouldOpen = !dropdown.classList.contains("is-open");

    document.querySelectorAll(".nav-dropdown.is-open").forEach((item) => {
      item.classList.remove("is-open");
      const itemToggle = item.querySelector(".nav-dropdown-toggle");
      if (itemToggle) {
        itemToggle.setAttribute("aria-expanded", "false");
      }
    });

    if (shouldOpen) {
      openDropdown();
    } else {
      closeDropdown();
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (window.matchMedia("(hover: hover)").matches) {
      closeDropdown();
    }
  });
});

document.addEventListener("pointerdown", (event) => {
  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      dropdown.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.blur();
      }
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      dropdown.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
