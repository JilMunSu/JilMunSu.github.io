window.onload=function(){
  const togglebutton = document.getElementById("toggleTheme"); 
  togglebutton.addEventListener("click", () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("darkTheme", "false");
      console.log('lightMode');
    } else {
      html.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
      console.log('darkMode');
    }
  });

  const storedTheme = localStorage.getItem("darkTheme");
  if (storedTheme !== null) {
    if (storedTheme === "true") {
      document.documentElement.classList.add("dark");
      togglebutton.checked = true;
      console.log('darkMode');
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      togglebutton.checked = false;
      console.log('lightMode');
  }
}