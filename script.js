document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" &&
    !window.document.URL.split(".com/")[1].includes("home")){
    window.history.back();
  }
});
