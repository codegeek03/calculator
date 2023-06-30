var dis = document.getElementById("dis");
var buttons = document.getElementsByClassName("num");
var str = "";

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonText = this.innerText;
    
    if (buttonText === "Ans") {
        var expression = dis.innerText;
        var result = eval(expression);
        dis.innerText = result;
        str = result.toString();
    } else if (buttonText === "CLEAR") {
        dis.innerText = "";
        str = "";
    } else if (buttonText === "Del") {
        str = str.slice(0, -1); 
        dis.innerText = str;
    } else {
        str += buttonText;
        dis.innerText = str;
    }
  });
}
