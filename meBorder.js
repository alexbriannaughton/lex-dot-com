function changeBorderToYellow() {
    const image = document.getElementById("me");
    image.style.border = "8.5px ridge #FFFDD0";
}

window.addEventListener("load", function () {
    setTimeout(changeBorderToYellow, 100);
});