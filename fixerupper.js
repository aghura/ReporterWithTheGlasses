$(document).ready(function () {

$("#lib1").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("1.jpg", "1h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("1h.png", "1.jpg");
    });
});
	
$("#lib2").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("2.jpg", "2h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("2h.png", "2.jpg");
    });
});
	
$("#lib3").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("3.jpg", "3h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("3h.png", "3.jpg");
    });
});
	
$("#lib4").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("4.jpg", "4h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("4h.png", "4.jpg");
    });
});
	
$("#lib5").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("5.jpg", "5h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("5h.png", "5.jpg");
    });
});
	
$("#lib6").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("6.jpg", "6h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("6h.png", "6.jpg");
    });
});
	
$("#lib7").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("7.jpg", "7h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("7h.png", "7.jpg");
    });
});
	
$("#lib8").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("8.jpg", "8h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("8h.png", "8.jpg");
    });
});
	
$("#lib9").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("9.jpg", "9h.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("9h.png", "9.jpg");
    });
});
	
$("#nerdyspider").on("click", function() {
  $("#nerdyspidertext").attr("src", function(index, attr){
        return attr.replace("spidertext.svg", "spiderdeadtext.svg");
    });
});
	
$("#nerdyspider").on("click", function() {
  $(this).attr("src", function(index, attr){
        return attr.replace("spider.svg", "spiderdead.svg");
    });
});
	
$("#nerdyspider").on("click", function() {
  $(this).attr("style", function(index, attr){
        return attr.replace("pointer", "auto");
    });
});
	
var video = document.getElementById('topdogvid');
var img = document.getElementById('topdog');
var img2 = document.getElementById('boop');
var img3 = document.getElementById('booplabel');
var img4 = document.getElementById('peedog');
var img5 = document.getElementById('peeboop');
var img6 = document.getElementById('probooper');
	
$("#boop").on("click", function() {
	video.play();
});
	
$("#boop").on("click", function() {
  $(this).attr("style", function(index, attr){
        return attr.replace("pointer", "auto");
    });
});
	
$("#boop").on("click", function setImageVisible(id, visible) {
    img.style.visibility = (visible ? 'visible' : 'hidden');
});
	
$("#boop").on("click", function setImageVisible(id, visible) {
    img2.style.visibility = (visible ? 'visible' : 'hidden');
});
	
$("#boop").on("click", function setImageVisible(id, visible) {
    img3.style.visibility = (visible ? 'visible' : 'hidden');
});
	
$("#peeboop").on("click", function() {
  $(this).attr("style", function(index, attr){
        return attr.replace("pointer", "auto");
    });
});
	
$("#peeboop").on("click", function setImageVisible(id, visible) {
    img5.style.visibility = (visible ? 'visible' : 'hidden');
});
	
$("#peeboop").on("click", function showImage() {
    img4.style.visibility = 'visible';
});
	
$("#peeboop").on("click", function showImage() {
    img6.style.visibility = 'visible';
});
	

})