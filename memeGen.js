
let memeInput = document.querySelector("#memelink") 
let topTextInput = document.querySelector("#toptext") 
let botTextInput = document.querySelector("#bottomtext") 
const body = document.querySelector("body")
const form = document.querySelector("#memeGen")
const containers = document.querySelectorAll("container")

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let memePic = document.createElement('div');
    memePic.classList.add("container");
    memePic.addEventListener("dblclick", function(e) {
        e.target.parentElement.remove();
    })

    let memeSource = document.createElement('img');
        memeSource.setAttribute("src", memeInput.value)
        memeSource.classList.add("img");
        memePic.append(memeSource);
        body.append(memePic);
        memeInput.value = ""

    let topText = document.createElement('div');
        topText.classList.add("newtopText")
        topText.innerText = topTextInput.value
        memePic.append(topText);
        topTextInput.value = ""

    let botText = document.createElement('div');
        botText.classList.add("newbotText")
        botText.innerText = botTextInput.value
        memePic.append(botText);
        botTextInput.value = "";
})





















    // function makeContainer () {
    //     let memePic = document.createElement('div');
    //     memePic.classList.add("container");
    // }



    // //This function needs to create a div and set the background of the div to the link sbmitted in the form
    // function makeBackground() {
    //     let memeSource = document.createElement('img');
    //     memeSource.setAttribute("src", memeInput.value)
    //     memeSource.classList.add("img");
    //     memePic.append(memeSource);
    //     body.append(memePic);
    //     memeInput.value = ""
    // };
    // //This function needs to take the text submitted in the form and place it over the top of the image
    // function addTopText() {
    //     let topText = document.createElement('div');
    //     topText.classList.add("newtopText")
    //     topText.innerText = topTextInput.value
    //     memePic.append(topText);
    //     topTextInput.value = ""
    // };
       
    // function addBotText() {
    //     let botText = document.createElement('div');
    //     botText.classList.add("newbotText")
    //     botText.innerText = botTextInput.value
    //     memePic.append(botText);
    //     botTextInput.value = "";
    // };
