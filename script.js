document.getElementById("lucky_btn").addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = "I";
    input.name = "btnI";
    input.hidden = "true";
    document.querySelector("form").appendChild(input);
});