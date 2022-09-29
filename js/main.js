const iconLinkedin = document.getElementById("iconLinkedin");
const toggleMenu = document.getElementById("toggle-menu");
const menu = document.querySelector(".menu-responsive");

toggleMenu.addEventListener("click", openOrClose);

toggleMenu.addEventListener("mouseover", () => {
  let container = document.querySelector(".container");

  container.addEventListener("click", () => {
    if (toggleMenu.dataset.status == "open") {
      menu.classList.remove("menu-responsive-active");
      toggleMenu.dataset.status = "close";
    }
  });
});

iconLinkedin.addEventListener("mouseover", () => {
  iconLinkedin.classList.remove("bx-flashing");

  iconLinkedin.addEventListener("mouseleave", () => {
    iconLinkedin.classList.add("bx-flashing");
  });
});

function openOrClose() {
  if (toggleMenu.dataset.status == "close") {
    menu.className += " menu-responsive-active";
    toggleMenu.dataset.status = "open";
    return;
  }

  if (toggleMenu.dataset.status == "open") {
    menu.classList.remove("menu-responsive-active");
    toggleMenu.dataset.status = "close";
  }
}

const responsive = () => {
  if (window.innerWidth > 992 || window.innerWidth < 600) {
    let content = document.querySelector(".about__content");
    let about_img = document.querySelector(".about__img");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let p = document.getElementById("parraf");
    let list = document.querySelector(".list");
    about_img.removeChild(subtitle);
    about_img.removeChild(title);
    about_img.removeChild(p);
    content.removeChild(list);
    content.appendChild(subtitle);
    content.appendChild(title);
    content.appendChild(p);
    content.appendChild(list);
  }
  // Responsive Laptop
  if (window.innerWidth < 992) {
    // About
    let content = document.querySelector(".about__content");
    let about_img = document.querySelector(".about__img");
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle");
    let p = document.getElementById("parraf");
    let img = document.getElementById("img_about");
    content.removeChild(title);
    content.removeChild(subtitle);
    content.removeChild(p);
    about_img.removeChild(img);
    about_img.appendChild(subtitle);
    about_img.appendChild(title);
    about_img.appendChild(p);
    about_img.appendChild(img);
  }

  // Responsive Tablet
  if (window.innerWidth < 768 && window.innerWidth > 600) {
    let content = document.querySelector(".services");
    let title = document.getElementById("title_services");
    content.removeChild(title);
  }
};

window.onload = () => responsive();
window.onresize = () => responsive();
