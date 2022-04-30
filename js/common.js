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

  // a태그 url 숨기기
  $("body").on('mouseover', 'a', function (e) {
    var $link = $(this),
    href = $link.attr('href') || $link.data("href");

    $link.off('click.chrome');
    $link.on('click.chrome', function () {
       window.location.href = href;
    }).attr('data-href', href)
    .css({ cursor: 'pointer' })
    .removeAttr('href'); 
  });

  // 토글버튼 동작
  $('.btnToggle').click(function() {
    $(this).toggleClass('toggleOn');
    if($(this).hasClass('typeB') == true && $(this).hasClass('noText') == false) {
      if($(this).hasClass('toggleOn')) {
        $(this).css("padding-right", "25px");
        $(this).css("padding-left", "0");
      } else {
        $(this).css("padding-right", "0");
        $(this).css("padding-left", "25px");
      }
    }
  });

  // 확장버튼 동작
  $('.btnExpan').click(function() {
    $(this).toggleClass('toggleOn');
    if($(this).hasClass('toggleOn')) {
      $(this).next().css("display", "block");
    } else {
      $(this).next().css("display", "none");
    }
  });

  // 탭 메뉴
  $('.tabs li .tabMenu').click(function(){
    tabMenu.call($(this));
  });

  $('.idolTabs li .idolTabMenu').click(function(){
    tabMenu.call($(this));
  });

  // 햄버거 메뉴
  if($(this).hasClass('toggleOn')) {
    $('.hamMenu a, .hamMenu button').attr('tabindex', '0');
  } else {
    $('.hamMenu a, .hamMenu button').attr('tabindex', '-1');
  }

  // 체크박스 전체선택
  $(".checkAlls").click(function() {
    checkAll.call($(this));
  });

  $("input[name=checkTypeB]").click(function() {
    chkAllSense.call($(this));
  });

  // input, select 탭 키 엔터
  $('body').on('keydown', 'input, select', function(e) {
    if (e.key === "Enter") {
      if($(this).is(":checked")) {
        $(this).prop("checked", false);
        if($(this).hasClass('checkAlls')) {
          checkAll.call($(this));
        } else if ($(this).attr('name') === 'checkTypeB') {
          chkAllSense.call($(this));
        }
      } else {
        $(this).prop("checked", true);
        if($(this).hasClass('checkAlls')) {
          checkAll.call($(this));
        } else if ($(this).attr('name') === 'checkTypeB') {
          chkAllSense.call($(this));
        }
      }
    }
  });

  // 팝업   
  $(".popupOpen").click(function(e){
    var btnName = $(this).attr("name");
    
    $(".popWrap").css("display", "block");
    $(".popWrap").children('.' + btnName).css("display", "block")
    $("body").css("overflow", "hidden");
  });

  $(".popCloseBtn").click(function(e){
     $(".popWrap, .popup").css("display", "none");
     $("body").css("overflow", "auto");
  });
}

// 스크롤
function goTop() {
  $('html, body').animate({scrollTop:0}, 400);
}

// 네비게이션 헤더있는 경우
function moveSCF(seq) {
  var offset = $("#menu" + seq).offset().top;
  var fixedVal = offset - 70;
  $('html, body').animate({scrollTop : fixedVal}, 400);
  return true;
}

// 네비게이션 헤더없는 경우
function moveSC(seq) {
  var offset = $("#menu" + seq).offset().top;
  $('html, body').animate({scrollTop : offset}, 400);
  return true;
}

// 체크박스 전체선택
function checkAll() {
  if($(this).is(":checked")) {
    $(this).parent().nextAll().children('input').prop("checked", true);
  }
  else { 
    $(this).parent().nextAll().children('input').prop("checked", false);
  } 	
}

// 체크박스 전체선택 감지
function chkAllSense() {
  var total = $(this).parent().parent().find('input[name=checkTypeB]').length;
  var checked = $(this).parent().parent().find('input[name=checkTypeB]:checked').length;

  if(total != checked) {
    $(this).parent().parent().children(':first-child').find('input').prop("checked", false);
  } else {
    $(this).parent().parent().children(':first-child').find('input').prop("checked", true);
  }
}

function tabMenu() {
  var tabCont = $(this).attr('data-tab');
  $(this).parent().siblings().children().removeClass('current');
  $(this).parent().parent().nextAll().removeClass('current');
  $(this).addClass('current');
  $("#" + tabCont).addClass('current');
}