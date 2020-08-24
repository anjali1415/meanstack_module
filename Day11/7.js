window.addEventListener("load", () => {
    processing();
    // step 1
    let xhr = new XMLHttpRequest();

    // step 2
    const url = `https://reqres.in/api/users?page=2`;
    xhr.open("GET", url);
    // step 3
    xhr.send();

    // step 4
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
        }
    }


})



processing = function () {
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
}
