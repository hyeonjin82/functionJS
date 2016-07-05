'use strict'
import loadImagePromised
from './load-image-promised'

// loadImagePromised('images/cat2.jpg')
//     .then((img) => {
//         var imgElement = document.createElement("img");
//         imgElement.src = img.src;
//         document.body.appendChild(imgElement);
//     });

let whenCatLoaded =  loadImagePromised('images/cat2.jpg');

whenCatLoaded.then((img) => {
    let imgElement = document.createElement("img");
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
});
