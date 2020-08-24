// let callxml = () => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

//     xhr.setRequestHeader("accept", "application/xml");
//     // we can use onredystateexchange.
//     xhr.onload = () => {
//         //console.log(xhr.responseXML);
//         let xmldoc = xhr.responseXML;
//         xmlDomHandler(xmldoc);
//     };
//     xhr.send();

// };
let callAjaxXML = function () {
    let xhr = new XMLHttpRequest();

    // REQUEST_METHOD, REQUEST_URL
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    // i m looking for xml :: MIME Type
    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let xmldoc = xhr.responseXML;

        // painting of the page will be done by this method
        // xmlDomHandlerV1(xmldoc);
        xmlDomHandler(xmldoc);
    };

    xhr.send();
};

let xmlDomHandler = (xmlDoc) => {
    const authorList = xmlDoc.querySelectorAll("Author");

    for (let i = 0; i < authorList.length; i++) {
        const author = authorList[i];

        const firstName = author.children[0].innerHTML;

        const parent = document.querySelector("#parent");
        const newElement = parent.children[0].cloneNode(true);
        newElement.innerHTML = firstName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};

/* let xmldomlogic = (xmldoc) => {
   console.log(xmldoc);

   //console.log(parent);
   const parentElement = xmldoc.querySelector("ArrayOfAuthor");
   console.log(parentElement);

   for (i = 0; i < parentElement.children.length; i++) {
       let authorItem = parentElement.children[i];
       let firstName = authorItem.children[0].innerHTML;
       let lastName = authorItem.children[3].innerHTML;
       // html dom
       const parent = document.querySelector('#parent1');
       let cloneele = parent.children[0].cloneNode(true);
       //cloneele.style.display = "flex";
       cloneele.innerHTML = firstName + " " + lastName;
       parent.insertBefore(cloneele, parent.firstChild);
   };
}; */


