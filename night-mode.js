'use strict';
var d = getVarDate();
var n = d.getHours();

if(true){
    if($(".white-bg").hasClass("day")){
        $(".white-bg").removeClass("day");
    }
    $(".white-bg").addClass("night");
    if($(".card").hasClass("dwhite")){
        $(".card").removeClass("dwhite");
    }
    $(".card").addClass("nwhite");
} else {
    if($(".white-bg").hasClass("night")){
        $(".white-bg").removeClass("night");
    }
    $(".white-bg").addClass("day");
    if($(".card").hasClass("nwhite")){
        $(".card").removeClass("nwhite");
    }
    $(".card").addClass("dwhite");
}