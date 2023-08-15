const form = document.getElementById("subscription");
const messageContainer = document.getElementById("message-container");
const resultMessage = document.getElementById("result");
const otherDiv = document.getElementById("other");
const emailMessage = document.getElementById("email-valid");
const upperDiv = document.getElementById("upper");
const lowerDiv = document.getElementById("lower");
const mainDiv = document.getElementById("main");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const enteredEmail = emailInput.value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(enteredEmail)) {
        emailMessage.innerHTML = "Valid email required";
        return;
    }

    lowerDiv.style.display = "none";
    upperDiv.style.display = "none";

    messageContainer.style.display = "block";

    resultMessage.innerHTML = `A confirmation email has been sent to email: <strong>${enteredEmail}</strong>. Please open it and click the button inside to confirm your subscription.`;

    mainDiv.style.display = "none";
    
        const newDiv = document.createElement("div");
        otherDiv.style.display = "block";
        otherDiv.appendChild(newDiv);
        
    });

    function showDivs() {
    
    mainDiv.style.display = "block";
    lowerDiv.style.display = "block";
    upperDiv.style.display = "block";

    if (window.innerWidth > 375) {
        mainDiv.style.display = "flex";
    }
    
    upperDiv.style.backgroundImage = "url('illustration-sign-up-mobile.svg')";

    otherDiv.style.display = "none";
    messageContainer.style.display = "none";
}

    const revertButton = document.getElementById("button2");
revertButton.addEventListener("click", function() {
    buttonClicked = true;
    emailMessage.innerHTML = "";

    if (window.innerWidth > 375) {
    mainDiv.style.width = "auto";
    mainDiv.style.margin = "0 auto";
    mainDiv.style.padding = "20px";
    }
    if (window.innerWidth < 375) {
        upperDiv.style.backgroundImage = "";
    }

    showDivs();
});


let buttonClicked = false; 
window.addEventListener("resize", function() {
    if (buttonClicked) {
    if (window.innerWidth > 375 ) {
        mainDiv.style.display = "flex";
    } else {
        mainDiv.style.display = "block";
    }
}
});
