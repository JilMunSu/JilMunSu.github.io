window.onload=function(){
  // 다크모드
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

  // 다크모드 저장
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

  // 스크롤
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.contain header').css("background", "#333");
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
      $('.contain header').css("background", "none");
    }
  });

  // 새로고침 시 현재 스크롤 위치 기억
  var nowScrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(nowScrollTop);
  if(nowScrollTop > 0) {
    $('.contain header').css("background", "#333");
  } else {
    $('.contain header').css("background", "none");
  }
}

// 스크롤
function goTop() {
  $('html, body').animate({scrollTop:0}, 400);
}

function moveSCF(seq){
  var offset = $("#menu" + seq).offset().top;
  var fixedVal = offset - 70;
  $('html, body').animate({scrollTop : fixedVal}, 400);
  return true
}

function moveSC(seq){
  var offset = $("#menu" + seq).offset().top;
  $('html, body').animate({scrollTop : offset}, 400);
  return true
}