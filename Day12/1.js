let callAjax = function () {

    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        //console.log(xhr.responseText);
        const refjason = JSON.parse(xhr.responseText);
        domlogic(refjason);
    };
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.send();
};

let domlogic = function (refjason) {
    console.log(refjason);
    let parent = document.querySelector('#parent1');
    for (i = 0; i < refjason.data.length; i++) {
        var ele1 = refjason.data[i];
        let newele = parent.children[0].cloneNode(true);
        newele.style.display = "flex";
        newele.innerHTML = ele1.id + " " + ele1.first_name;
        parent.insertBefore(newele, parent.firstChild);
    }

}
// to get ad comapny
/* let domlogic = function (refjason) {
   console.log(refjason);
   let parent = document.querySelector('#parent1');
   var ele1 = refjason.ad;
   let newele = parent.children[0].cloneNode(true);
   newele.style.display = "flex";
   newele.innerHTML = ele1.company;
   parent.insertBefore(newele, parent.firstChild);
} */