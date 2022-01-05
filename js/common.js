// $(document).ready(function () {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    
//     document.documentElement.classList.add("dark");
//   }
// });

window.onload=function(){
  document.getElementById("toggleTheme").addEventListener("click", () => {
    console.log('1')
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
    } else {
        html.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
    }
});

const storedTheme = localStorage.getItem("darkTheme");

if (storedTheme !== null) {
    if (storedTheme === "true") {
        document.documentElement.classList.add("dark");
    }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
}
}