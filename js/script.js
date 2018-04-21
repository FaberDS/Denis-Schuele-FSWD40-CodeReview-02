function myFunction(){
	document.getElementById("navbar").classList.toggle("visible");
	// $$$$$$$$$$$$$$$$$--------------have to fix that the content move to the header while navbar is hidden
	// document.getElementById("content").classList.toggle("margin-top-10");
}
var priceAmster = parseFloat(1189.99);
var priceLondon = parseFloat(2359.99);
var tripA = "Weed-Trip-to-Amsterdam";
var tripL = "Super-City-Trip-to-London";
var priceSum = priceLondon + priceAmster;
priceSum = priceSum.toFixed(2);
var discount1 = priceSum * 0.05;
var bothTrips =""
discount1 = discount1.toFixed(2)
var discountPrize = priceSum * 0.95;
discountPrize = discountPrize.toFixed(2)
var discountGold = priceSum * 0.90;
discountGold = discountGold.toFixed(2);
var discountGoldPart = priceSum * 0.10;
discountGoldPart = discountGoldPart.toFixed(2);


function bookLondon(){
	document.getElementById("price-london").style.backgroundColor=("white");
	document.getElementById("price-london").style.width=("65%");
	document.getElementById("price-london").style.border=("3px dotted #003680");
	document.getElementById("price-london").style.padding=("8px");
	document.getElementById("price-london").innerHTML = "Your<mark><em>" + tripL + "</em></mark> just comes up to <h1>" + priceLondon + " €</h1>";

}	
function bookAmsterdam(){
	document.getElementById("price-amsterdam").style.backgroundColor=("white");
	document.getElementById("price-amsterdam").style.width=("65%");
	document.getElementById("price-amsterdam").style.border=("3px dotted #003680");
	document.getElementById("price-amsterdam").style.padding=("8px");
	document.getElementById("price-amsterdam").innerHTML = "Your<mark><em>" + tripA + "</em></mark> just comes up to <h1>" + priceAmster + " €</h1>";
}

function timeMsgL(){
var t=setTimeout("alertMsgL()",3000);
}
function alertMsgL(){
alert("Book also the " + tripA + " and just pay " + discountPrize + "€ all together!");
}
function timeMsgA(){
var t=setTimeout("alertMsgA()",3000);
}
function alertMsgA(){
alert("Book also the " + tripL + " and just pay " + discountPrize + "€ all together!");
}
function timeMsg2(){
var t=setTimeout("alertMsg2()",6000);
}
function alertMsg2(){
alert(" This means you have to pay " + discount1 + " € less!");
}

function goldenRabatt(){
	alert("If you own a GoldenCard you have to pay " + discountGoldPart + "€ less!");
}
function bookBoth(){
	document.getElementById("price-both").style.backgroundColor=("white");
	document.getElementById("price-both").style.width=("90%");
	document.getElementById("price-both").style.border=("3px dotted #003680");
	document.getElementById("price-both").style.padding=("8px");
	document.getElementById("price-both").innerHTML = "Your<mark><em>" + tripA + " </em></mark> and <mark> <em> " + tripL + "</em></mark> just comes up to <h1>" + priceSum + " €</h1>";
}
function timeMsgGolden(){
var t=setTimeout("alertMsgGolden()",4000);
}
function alertMsgGolden(){
alert("It would be " + discountGoldPart + " € less! If you would own a GoldenCard");
}
// function discountL(){
// 	alert("Book also the" + tripA + " and just pay " + discountPrize + "€!");
// 	alert(" This means you have to pay " + discount1 + " € less!");
// }

// function discountA(){
// 	alert("Book also the" + tripL + " and just pay " + discountPrize + "€! This means you have to pay " + discount1 + " € less");
// }
// document.write()
// function bookAmsterdam(){
// 	document.write("navbar").classList.toggle("visible");
// 	;
// }
// function book() {
//     var myWindow = window.open("", "MsgWindow", "width=200,height=100");
//     myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
// }
