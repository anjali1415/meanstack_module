

window.addEventListener("load", () => {
    console.log("vhjh");
    var ele1 = document.querySelector("#parentBlockContainer");
    console.log(ele1);
    for (i = 0; i < 20; i++) {
        var ref = ele1.children[0].cloneNode(true);
        ref.style.display = "flex";
        ref.children[0].innerHTML = "anjali" + i;
        ele1.insertBefore(ref, ele1.firstChild);
    }
});