var max=100; 
$('textarea').keyup(function(){
    var len = $(this).val().length;
    var total = max - len;
    console.log(len);
    if (total >= 0) {
        $("#chars").text(total);
    } else {
        $("#chars").text("you have 100 only");
    }
})



$(".openNav").click(function(){
    $(".openNav").animate({marginLeft :'250px'},50,function() {
        $("#leftMenu").animate({ width:'250px'},50)
    })
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50,function(){
        $(".openNav").animate({marginLeft :'0px'},50)
    })
})

$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});




function ToGetTime() {
    let futureDate = new Date("1 october 2024 9:00:00");
    futureDate = (futureDate.getTime());

    let timeNow = new Date();
    timeNow = (timeNow.getTime());

    betweenTime = (futureDate - timeNow);
    // console.log(betweenTime);

    // Extract individual units (seconds, minutes, hours, days)
    const seconds = Math.floor((betweenTime / 1000) % 60);
    const minutes = Math.floor((betweenTime / (1000 * 60)) % 60);
    const hours = Math.floor((betweenTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(betweenTime / (1000 * 60 * 60 * 24));

    // console.log("Days:", days);
    // console.log("Hours:", hours);
    // console.log("Minutes:", minutes);
    // console.log("Seconds:", seconds);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)

}
setInterval(_=>{
    ToGetTime()
},1000)

