function lock(orientation){
  let de=document.documentElement;
  if(de.requestFullscreen){de.requestFullscreen()}
  else if(de.mozRequestFullscreen){de.mozRequestFullscreen()}
  else if(de.webkitRequestFullscreen){de.webkitRequestFullscreen()}
  else if(de.requestFullscreen){de.requestFullscreen()}
  else if(de.msRequestFullscreen){de.msRequestFullscreen()}
  screen.orientation.lock(orientation);
}
lock('portrait')
$(window).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
       if (scroll > 100) {
        $("#main nav").css("background-color", "rgba(219,219,219,1)");
       } else {
        $("#main nav").css("background-color", "transparent");
       }
     })
     $("#main nav .search .search-btn").click(function(){
      $("#main nav .search input").toggleClass("d-block")
     }) 
     var fileSize;
   $("#formProjectFile").change(function(e){
    fileSize=this.files[0].size;
    if(this.files[0].size > 250000000){
      alert("File is too big!");
      this.value = "";
      $('#formSubmit').prop('disabled', true);
      $("#formProjectFileResult").text("")
   }
   else{
    $("#formSubmit").disabled = false;
    var projectFilePath = e.target.files[0].name;
    $("#formProjectFileResult").text(projectFilePath)
   }
   });
   $("#formSubmit").click(function(){
    if(fileSize>250000000){
      alert("File is too big!");
    }
    else{
      alert("Succes")
    }
   })

   $.each($("#accordion button"),function(key,val){
    
    $(val).click(function(){
      $.each($("#accordion button"),function(key,val){
        $(val).parent().siblings(".d-flex").eq(0).find(".fa-plus").removeClass("d-none");
        $(val).parent().siblings(".d-flex").eq(0).find(".fa-minus").addClass("d-none")
      })
      $(this).parent().siblings(".d-flex").eq(0).find(".fa-plus").addClass("d-none")
      $(this).parent().siblings(".d-flex").eq(0).find(".fa-minus").removeClass("d-none")
      console.log();
      let value=$(this).attr("data-target");
      $.each($("#accordion .collapse"),function(key,item){
        if(value==$(item).attr("id")){
          $(item).addClass("enable")
        }
        else{
          $(item).removeClass("enable");
        }
      })
    })
   })
   })
   
    var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    // if (currentPosition > 0) {
    //     buttons[0].classList.remove('inactive');
    // }
    // if (currentPosition < slidesCount) {
    //     buttons[1].classList.remove('inactive');
    // }
    // if (currentPosition >= slidesCount) {
    //     buttons[1].classList.add('inactive');
    // }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    // if (currentPosition === 0) {
    //     buttons[0].classList.add('inactive');
    // }
    // if (currentPosition < slidesCount) {
    //     buttons[1].classList.remove('inactive');
    // }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    // if (currentPosition == slidesCount) {
    //     buttons[1].classList.add('inactive');
    // }
    // if (currentPosition > 0) {
    //     buttons[0].classList.remove('inactive');
    // }
};
