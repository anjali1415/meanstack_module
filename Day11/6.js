window.addEventListener("load", () => {
    var list1 = [{ firstname: "anjali", lastname: "badgujar" },
    { firstname: "tuashr", lastname: "badg" },
    { firstname: "lina", lastname: "khan" }]

    var parentdiv = document.querySelector("#parentBlockContainer");
    for (i = 0; i < list1.length; i++) {
        let item = list1[i];
        var cloneele = parentdiv.children[0].cloneNode(true);
        cloneele.style.display = "flex";
        cloneele.children[0].innerHTML = item.firstname;
        parentdiv.insertBefore(cloneele, parentdiv.firstChild);
    }

});
