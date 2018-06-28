function signUp(){
	document.getElementById("sign-up").style.background="rgba(0, 0, 0, 0.8)";
    document.getElementById("sign-up").style.cursor= "default";
    document.getElementById("sign-up").style.fontWeight= "bold";
    document.getElementById("sign-up").style.color= "white";
    document.getElementById("sign-up").style.borderBottom="0";
    document.getElementById("sign-in").style.borderBottom="1px solid #f1b62c";
    document.getElementById("sign-in").style.cursor= "pointer";
    document.getElementById("sign-in").style.backgroundColor="rgba(0, 0, 0, 0.95)";
    document.getElementById("sign-in").style.fontWeight= "600";
    document.getElementById("sign-in").style.color= "#7d97ad";
    document.getElementById("move1").innerHTML= "Delevry Order";
    document.getElementById("butt").innerHTML= "Order Now";
}
function signIn(){
	document.getElementById("sign-in").style.background="rgba(0, 0, 0, 0.8)";
    document.getElementById("sign-in").style.cursor= "default";
    document.getElementById("sign-in").style.fontWeight= "bold";
    document.getElementById("sign-in").style.color= "white";
    document.getElementById("sign-in").style.borderBottom="0";
    document.getElementById("sign-up").style.borderBottom="1px solid #f1b62c";
    document.getElementById("sign-up").style.cursor= "pointer";
    document.getElementById("sign-up").style.backgroundColor="rgba(0, 0, 0, 0.95)";
    document.getElementById("sign-up").style.fontWeight= "600";
    document.getElementById("sign-up").style.color= "#7d97ad";
    document.getElementById("move1").innerHTML= "Booking Online";
    document.getElementById("butt").innerHTML= "Reservation";
}