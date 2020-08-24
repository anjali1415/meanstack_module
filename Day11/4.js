// window.addEventListener("load", () => {
//     console.log("I.AM.CALLED.ONCE.THE.PAGE.LOADS");

//     // We can read BODY Elment Once the page is loaded.
//     const pbc = document.querySelector("#parentBlockContainer");
//     console.log(pbc);

//     for (let i = 0; i < 20; i++) {
//         const newElement = pbc.children[0].cloneNode(true);
//         newElement.style.display = "flex"; // none
//         pbc.insertBefore(newElement, pbc.firstChild);
//     }
// });

window.addEventListener("load", () => {
    console.log("vhjh");
    var ele1 = document.querySelector("#parentBlockContainer");
    console.log(ele1);
    for (i = 0; i < 20; i++) {
        var ref = ele1.children[0].cloneNode(true);
        ref.style.display = "flex";
        ele1.insertBefore(ref, ele1.firstChild);
    }
});