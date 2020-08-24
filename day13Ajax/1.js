function showWeather() {

    var cityName = document.querySelector("#inputid").value || "pune";
    console.log(cityName);

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=2822b923e2da52ea45e08b4f499c3783&units=metric&q=" +
        cityName;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        console.log(refjson);
        demooperation(refjson);
    };
    xhr.send();
};

function demooperation(refjson) {
    console.log(refjson);
    console.log(refjson.name);
    let name = refjson.name;
    let maxtemp = refjson.main.temp_max;
    const parent = document.querySelector("#parent");
    const newele = parent.children[0]; // by this changes will be made in same div
    //const newele = parent.children[0].cloneNode(true);
    newele.innerHTML = name + " " + maxtemp;
    newele.style.display = "flex";
    parent.insertBefore(newele, parent.firstChild);
    document.querySelector("#inputid").value = "";
}