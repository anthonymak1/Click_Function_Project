$(".kevin").hide();
$(".dylan").hide();
$(".jackie").hide();
$(".ben").hide();
$(".donut").hide();
$(".bank").hide();
$(".button").click(function() {
    $(".button").hide();
    $(".kevin").show();
    $(".hehehe").text("Is this Ben? Click on the forehead to check.");
});
$(".kevin").click(function() {
    $(".hehehe").text("Nope, this isin't Ben. Click on the text above to contunue");
});
$(".hehehe").click(function() {
    $(".kevin").hide();
    $(".dylan").show();
    $(".hehehe").text("Is this Ben? Click on the donut to check.");
});
$(".dylan").click(function() {
    $(".donut").show();
    $(".hehehe").text("Nope, this isin't Ben. Click on under the photo to contunue.");
});
$(".donut").click(function() {
    $(".dylan").hide();
    $(".jackie").show();
    $(".donut").hide();
    $(".hehehe").text("Is this Ben? Click on the acne to check.");
});
$(".jackie").click(function() {
    $(".bank").show();
    $(".hehehe").text("Nope, this is not Ben. Click on his debt to continue.");
});
$(".bank").click(function() {
    $(".jackie").hide();
    $(".ben").show();
    $(".bank").hide();
    $(".hehehe").text("Is this Ben? Click on his pencil to continue");
});
$(".ben").click(function(){
$(".hehehe").text("Yay! You found him");
});










