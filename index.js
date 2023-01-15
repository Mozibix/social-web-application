// VARIABLES FOR (...)

//BODY
const body = document.querySelector(".body");

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
