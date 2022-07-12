window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("title").innerHTML = "Fabi";
    document.getElementById("subtitle").style.display = "none";
  } else {
    document.getElementById("title").innerHTML = "Fabian Frey";
    document.getElementById("subtitle").style.display = "inline";
  }
}

function nationalparkFunction() {
  if (document.getElementById("nationalpark-bilder").style.display == "none"){
    document.getElementById("nationalpark-bilder").style.display = "flex";
    document.getElementById("nationalpark").innerHTML = "<br>- Bilder<br>";
  } else {
    document.getElementById("nationalpark-bilder").style.display = "none";
    document.getElementById("nationalpark").innerHTML = "<br>+ Bilder<br>";
  }
}

function degFunction() {
  if (document.getElementById("deg-bilder").style.display == "none"){
    document.getElementById("deg-bilder").style.display = "flex";
    document.getElementById("deg").innerHTML = "<br>- Bilder<br>";
  } else {
    document.getElementById("deg-bilder").style.display = "none";
    document.getElementById("deg").innerHTML = "<br>+ Bilder<br>";
  }
}

function jetFunction() {
  if (document.getElementById("jet-bilder").style.display == "none"){
    document.getElementById("jet-bilder").style.display = "flex";
    document.getElementById("jet").innerHTML = "<br>- Bilder<br>";
  } else {
    document.getElementById("jet-bilder").style.display = "none";
    document.getElementById("jet").innerHTML = "<br>+ Bilder<br>";
  }
}

function fogoFunction() {
  if (document.getElementById("fogo-bilder").style.display == "none"){
    document.getElementById("fogo-bilder").style.display = "flex";
    document.getElementById("fogo").innerHTML = "<br>- Bilder<br>";
  } else {
    document.getElementById("fogo-bilder").style.display = "none";
    document.getElementById("fogo").innerHTML = "<br>+ Bilder<br>";
  }
}

function pulaFunction() {
  if (document.getElementById("pula-bilder").style.display == "none"){
    document.getElementById("pula-bilder").style.display = "flex";
    document.getElementById("pula").innerHTML = "<br>- Bilder<br>";
  } else {
    document.getElementById("pula-bilder").style.display = "none";
    document.getElementById("pula").innerHTML = "<br>+ Bilder<br>";
  }
}

