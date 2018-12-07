/* ========================= Style Cards Page Start ============================= */
$("img#false").hide();
$("li#null").hide();

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
/* ========================= Style Cards Page End =============================== */