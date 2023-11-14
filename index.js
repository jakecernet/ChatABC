function sendMessage() {
    document.getElementById("header").style.display = "none";

    message = document.getElementById("textbox").value;

    if (message != "") {
        document.getElementById("textbox").value = "";
        document.getElementById("chat").innerHTML += "<div class='message'><a>" + message + "</a></div>";
    }

    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}

function checkForTextEntered() {
    //if there is no text in the input field, the button is disabled
    if (document.getElementById("textbox").value == "") {
        document.getElementById("send").style.cursor = "not-allowed";
        document.getElementById("send").style.color = "#636262";
    } else {
        document.getElementById("send").style.cursor = "pointer";
        document.getElementById("send").style.color = "#a0a0a0";
    }
}

//listen for enter key
document.getElementById("textbox").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        sendMessage();
    }
});

checkForTextEntered();