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
   })
   
   