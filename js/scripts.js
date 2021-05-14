console.log("P2446634");

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

var output = document.getElementById('hometxt');
hometxt.innerHTML = text.home;

var output2 = document.getElementById('textabout');
textabout.innerHTML = text.about;

var btn = document.getElementsByClassName("portfolioitem");
var modal = document.getElementsByClassName("modal");
var close = document.getElementsByClassName("close");
var close2 = document.getElementsByClassName("close2");
var contact1 = document.getElementById('contact1');
var contact2 = document.getElementById('btn');

btn[0].onclick = function() {
  modal[0].style.display = "block";
}
btn[1].onclick = function() {
  modal[1].style.display = "block";
}
btn[2].onclick = function() {
  modal[2].style.display = "block";
}
btn[3].onclick = function() {
  modal[3].style.display = "block";
}
btn[4].onclick = function() {
  modal[4].style.display = "block";
}
btn[5].onclick = function() {
  modal[5].style.display = "block";
}
contact1.onclick = function() {
  modal[6].style.display = "block";
}
contact2.onclick = function() {
  modal[6].style.display = "block";
}
close[0].onclick = function() {
  modal[0].style.display = "none";
}
close[1].onclick = function() {
  modal[1].style.display = "none";
}
close[2].onclick = function() {
  modal[2].style.display = "none";
}
close[3].onclick = function() {
  modal[3].style.display = "none";
}
close[4].onclick = function() {
  modal[4].style.display = "none";
}
close[5].onclick = function() {
  modal[5].style.display = "none";
}
close[6].onclick = function() {
  modal[6].style.display = "none";
}

close2[0].onclick = function() {
  modal[0].style.display = "none";
}
close2[1].onclick = function() {
  modal[1].style.display = "none";
}
close2[2].onclick = function() {
  modal[2].style.display = "none";

}
close2[3].onclick = function() {
  modal[3].style.display = "none";

}
close2[4].onclick = function() {
  modal[4].style.display = "none";

}
close2[5].onclick = function() {
  modal[5].style.display = "none";

}
close2[6].onclick = function() {
  modal[6].style.display = "none";

}
