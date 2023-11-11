const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    console.log(inputVal);

    if(e.key == "Enter" && inputVal.length> 0){
    console.log("valid");
    }
});