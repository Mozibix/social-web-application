// VARIABLES FOR (...)

//BODY
const body = document.querySelector(".body");

// PRELOADER
const loader = document.querySelector("#preloader");

// SIDEBAR-MENU
const menu = document.querySelectorAll(".menu-item");

//MESSAGE-MENU-SECTION
const messageMenu = document.querySelector("#message-notification");
const messageBox = document.querySelector(".messages");
const message = messageBox.querySelectorAll(".message");
const messageSearch = messageBox.querySelector("#message-search");

//THEME CUSTOMIZATION

const themeMenu = document.querySelector("#theme-menu");
const themeModal = document.querySelector(".customize-theme");
//FONTS
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
// COLORS
const colorPalette = document.querySelectorAll(".choose-color span");
// BG-COLORS
const bgColor1 = document.querySelector(".bg-1");
const bgColor2 = document.querySelector(".bg-2");
const bgColor3 = document.querySelector(".bg-3");

// PRELOADER FUNCTIONS
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// SIDE-BAR FUNCTIONS
const changeActiveClass = () => {
  menu.forEach((props) => {
    props.classList.remove("active");
  });
};

menu.forEach((props) => {
  props.addEventListener("click", () => {
    changeActiveClass();
    props.classList.add("active");
    if (props.id != "theme-menu") {
      themeModal.style.display = "none";
    } else {
      themeModal.style.display = "block";
    }
    if (props.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }

    setTimeout(() => {
      document.querySelector(".notification-count").style.display = "block";
    }, 20000);
  });
});

//MESSAGES FUNCTIONS
//SEARCH-BAR VALUES FUNCTION
const searchValue = () => {
  const value = messageSearch.value.toLowerCase();
  message.forEach((props) => {
    let name = props.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(value) != -1) {
      props.style.display = "flex";
    } else {
      props.style.display = "none";
    }
  });
};

// SEARCH CHATS
messageSearch.addEventListener("keyup", searchValue);

//HIGHLIGHT FUNCTIONS AND NOTIFICATION COUNT FUNCTIONS
messageMenu.addEventListener("click", () => {
  messageBox.style.boxShadow = "0 0.2rem 1.3rem var(--color-primary)";
  setTimeout(() => {
    messageBox.style.boxShadow = "none";
  }, 2000);

  messageMenu.querySelector(".notification-count").style.display = "none";
  setInterval(() => {
    messageMenu.querySelector(".notification-count").style.display = "block";
  }, 15000);
});

//THEME CUSTOMIZATION FUNCTIONS

// OPEN MODAL
const openModal = () => {
  themeModal.style.display = "grid";
};

themeMenu.addEventListener("click", openModal);

// CLOSE MODAL
const closeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  } else {
    themeModal.style.display = "grid";
  }
};

themeModal.addEventListener("click", closeModal);

// FONTS FUNCTIONS
// REMOVING ACTIVE CLASS FROM SPANS OR SELECTORS
const removeActive = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSizes.forEach((size) => {
  size.addEventListener("click", (e) => {
    removeActive();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "1rem");
      root.style.setProperty("--sticky-top-right", "1rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", ".5rem");
      root.style.setProperty("--sticky-top-right", "0.5rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "0rem");
      root.style.setProperty("--sticky-top-right", "inherit");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
      root.style.setProperty("--sticky-top-left", "inherit");
      root.style.setProperty("--sticky-top-right", "inherit");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "20px";
      root.style.setProperty("--sticky-top-left", "-40rem");
      root.style.setProperty("--sticky-top-right", "-40rem");
    }
    // CHANGE FONT SIZE OF THE ROOT HTML ELEMENT
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//COLOR CHANGE FUNCTIONS
const changeActiveColor = () => {
  colorPalette.forEach((colorSelector) => {
    colorSelector.classList.remove("active");
  });
};
//CHANGE PRIMARY COLORS
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    changeActiveColor();
    let primaryHue;
    let primarySaturation;
    let primaryLight;

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
      primarySaturation = "75%";
      primaryLight = "60%";
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
      primarySaturation = "75%";
      primaryLight = "60%";
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
      primarySaturation = "95%";
      primaryLight = "65%";
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
      primarySaturation = "75%";
      primaryLight = "60%";
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
      primarySaturation = "75%";
      primaryLight = "60%";
    }

    color.classList.add("active");

    root.style.setProperty("--primary-hue", primaryHue);
    root.style.setProperty("--primary-saturation", primarySaturation);
    root.style.setProperty("--primary-light", primaryLight);
  });
});

//BACKGROUND VALUES
let lightColor;
let whiteColor;
let darkColor;

//CHANGE BAGCKGROUND FUNCTION
const changeBg = () => {
  root.style.setProperty("--light-main", lightColor);
  root.style.setProperty("--white-main", whiteColor);
  root.style.setProperty("--dark-main", darkColor);
};

//CHANGE BG-COLOR
bgColor1.addEventListener("click", () => {
  lightColor = "95%";
  whiteColor = "100%";
  darkColor = "17%";

  //ADDING ACTIVE CLASS
  bgColor1.classList.add("active");
  //REMOVING ACTIVE CLASS FROM OTHER SPAN ELEMENT
  bgColor2.classList.remove("active");
  bgColor3.classList.remove("active");
  changeBg();
});

bgColor2.addEventListener("click", () => {
  lightColor = "15%";
  whiteColor = "20%";
  darkColor = "95%";

  //ADDING ACTIVE CLASS
  bgColor2.classList.add("active");
  //REMOVING ACTIVE CLASS FROM OTHER SPAN ELEMENT
  bgColor1.classList.remove("active");
  bgColor3.classList.remove("active");
  changeBg();
});

bgColor3.addEventListener("click", () => {
  lightColor = "0%";
  whiteColor = "10%";
  darkColor = "95%";

  //ADDING ACTIVE CLASS
  bgColor3.classList.add("active");
  //REMOVING ACTIVE CLASS FROM OTHER SPAN ELEMENT
  bgColor1.classList.remove("active");
  bgColor2.classList.remove("active");
  changeBg();
});
