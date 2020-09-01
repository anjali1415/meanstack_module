// call by get method



// sending url to server
let registerUserVer = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
    if (username === "") {
        document.querySelector("#username").style.borderColor = "red";
        return;
    }
    let url = `http://localhost:3100/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const res = xhr.responseText;
        console.log(res);
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#mobile").value = "";
    };
    xhr.send();
};

let registerUsingPost = async () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;

    const input = {
        username: username,
        password,
        email,
        mobile,
    };
    const url = "http://localhost:3100/adduser";
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
            "Content-Type": "application/json",
        },
    });

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
};