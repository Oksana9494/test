//timer
let remain_bv   = 1800;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;
    let mins = Math.floor(timestamp/60);
    let secs = Math.floor(timestamp - mins*60); 
        
    if(String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if(String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);            
    }
        
$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
    }, 1000);
});
//anchors
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();      
      let sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      
      $('html, body').animate({scrollTop: dn}, 1000);
    });
});



//carousel
$(document).on('click', ".arrow_right",function(){ 
	let carousel = $(this).parents('.carousel');
	right_carousel(carousel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".arrow_left",function(){ 
	let carousel = $(this).parents('.carousel');
	left_carousel(carousel);
	return false;
});
function left_carousel(carousel){
   let block_width = $(carousel).find('.carousel__list-item').outerWidth();
   $(carousel).find(".carousel__list .carousel__list-item").eq(-1).clone().prependTo($(carousel).find(".carousel__list")); 
   $(carousel).find(".carousel__list").css({"left":"-"+block_width+"px"});
   $(carousel).find(".carousel__list .carousel__list-item").eq(-1).remove();    
   $(carousel).find(".carousel__list").animate({left: "0px"}, 200);    
}
function right_carousel(carousel){
   let block_width = $(carousel).find('.carousel__list-item').outerWidth();
   $(carousel).find(".carousel__list").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carousel).find(".carousel__list .carousel__list-item").eq(0).clone().appendTo($(carousel).find(".carousel__list")); 
      $(carousel).find(".carousel__list .carousel__list-item").eq(0).remove(); 
      $(carousel).find(".carousel__list").css({"left":"0px"}); 
   }); 
}