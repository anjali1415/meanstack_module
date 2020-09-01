// call by get method

const { json } = require("express");

// sending url to server
let registerUserVer = () => {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
    if (username === "") {
        document.querySelector("#username").style.borderColor = "red";
        return;
    }
    let url = `http://localhost:5600/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        const res = xhr.responseText();
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
        username,
        passwaord,
        email,
        mobile
    }
    const url = "http://localhost:5600/adduser";
    await fetch(url, {
        method: "post",
        body: json.stringify(input),
        headers: {
            "Content-Type": "application/json",
        },
    });

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
}