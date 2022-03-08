window.onload=function(){
  // 다크모드
  const togglebutton = $("#toggleTheme"); 
  togglebutton.click(function(){
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("darkTheme", "false");
      togglebutton.children().text('OFF');
    } else {
      html.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
      togglebutton.children().text('ON');
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
  const head = $('.contain header');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      head.css("background", "#C8BA7B");
      head.css("border-bottom", "1px solid #C8BA7B");
      $('#btnGoTop').fadeIn();
    } else {
      $('#btnGoTop').fadeOut();
      head.css("background", "none");
      head.css("border-bottom", "none");
    }
  });

  // 새로고침 시 현재 스크롤 위치 기억
  var nowScrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(nowScrollTop);
  if(nowScrollTop > 0) {
    head.css("background", "#C8BA7B");
    head.css("border-bottom", "1px solid #C8BA7B");
  } else {
    head.css("background", "none");
    head.css("border-bottom", "none");
  }
}

// 스크롤
function goTop() {
  $('html, body').animate({scrollTop:0}, 400);
}

// 네비게이션
function moveSCF(seq) {
  var offset = $("#menu" + seq).offset().top;
  var fixedVal = offset - 70;
  $('html, body').animate({scrollTop : fixedVal}, 400);
  return true
}

function moveSC(seq) {
  var offset = $("#menu" + seq).offset().top;
  $('html, body').animate({scrollTop : offset}, 400);
  return true
}