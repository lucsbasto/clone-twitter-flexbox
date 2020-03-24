var logo = document.getElementById("logo");
var body = document.getElementsByName("body")[0];
var header = document.getElementById("header");
var bar = document.getElementById("bar");

let is_dark_mode = false;
logo.addEventListener("click", modifyClass);

function modifyClass() {
  list_class = header.classList;
  if (is_dark_mode) {
    if (
      header.classList.contains("dark") &&
      bar.classList.contains("dark") &&
      body.classList.contains("dark")
    ) {
      header.classList.remove("dark");
      bar.classList.remove("dark");
      body.classList.remove("dark");
    }
    bar.classList.add("light");
    header.classList.add("light");
    body.classList.add("light");
    is_dark_mode = !is_dark_mode;
  } else {
    if (
      header.classList.contains("light") &&
      bar.classList.contains("light") &&
      body.classList.contains("light")
    ) {
      header.classList.remove("light");
      bar.classList.remove("light");
      body.classList.remove("light");
    }
    bar.classList.add("dark");
    header.classList.add("dark");
    header.classList.add("dark");
    body.classList.add("dark");
    is_dark_mode = !is_dark_mode;
  }
}
