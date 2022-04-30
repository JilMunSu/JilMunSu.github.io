$(document).ready(function(){

  // rem 계산기
  $('#remResult').click(function() {
    const usePx = $('.remCal .usePx').val();
    const perPx = $('.remCal .perPx').val();
    const resRem = usePx/perPx;
    $('.remCal .result').text(resRem.toFixed(2));
  });


  //폴더 이미지 불러오기
  var sel_files = [];
 
  $(document).ready(function() {
    $(".inputImgs").on("change", handleImgFileSelect);
  }); 

  function handleImgFileSelect(e) {
    // 이미지 정보들을 초기화
    sel_files = [];
    $(".imgsWrap").empty();
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    var index = 0;
    filesArr.forEach(function(f) {
      if(!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        return;
      }
      sel_files.push(f);
      var reader = new FileReader();
      reader.onload = function(e) {
        var html = "<a href=\"javascript:void(0);\" id=\"img_id_"+index+"\"><img src=\"" + e.target.result + "\" data-file='"+f.name+"' class='selProductFile popupOpen' name='popB'></a>";
        $(".imgsWrap").append(html);
        index++;  
      }
      reader.readAsDataURL(f);
    });
  }
});