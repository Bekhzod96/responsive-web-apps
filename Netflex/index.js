const next = document.querySelectorAll(".next");
const imgWrapper = document.querySelectorAll(".img-wrapper");
const iconSearch = document.querySelector("#search-pre");
const barSearch = document.querySelector("#search-bar");

next.forEach((el) => {
  el.onclick = () => {
    imgWrapper.forEach((el) => el.classList.add("move"));
  };
});

iconSearch.onmouseover = () => {
  barSearch.classList.add("d-block");
  iconSearch.classList.remove("d-flex");
  iconSearch.classList.add("d-none");
};

barSearch.onmouseout = () => {
  barSearch.classList.remove("d-block");
  iconSearch.classList.add("d-flex");
  iconSearch.classList.remove("d-none");
};
