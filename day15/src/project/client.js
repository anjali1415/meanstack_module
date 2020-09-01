let showTemp = () => {

    //let cityName = $("#inputid").val();
    url = "http://localhost:5600/"
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = () => {
        //console.log(xhr.responseText);
        let op = xhr.responseText;
        let op2 = JSON.parse(xhr.responseText);
        mylogic(op2);
    }
    xhr.send();

}
let mylogic = (op2) => {
    console.log(op2);
    let clonele = document.querySelector("#parent");
    console.log(op2[0].temp);
}