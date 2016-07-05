'use strict'
import loadImageCallbacked
from './load-image-callbacked'


// loadImageCallbacked('images/cat4.jpg',
//     (error, img) => {
//         let imgElement = document.createElement("img");
//         imgElement.src = img.src;
//         document.body.appendChild(imgElement);
//     });


let addImg = (src) => {
    let imgElement = document.createElement("img");
    imgElement.src = src;
    document.body.appendChild(imgElement);
};

loadImageCallbacked('images/cat1.jpg', (error, img1) => {
    if(error) throw error;
    addImg(img1.src);
    loadImageCallbacked('images/cat2.jpg', (error, img2) => {
        if(error) throw error;
        addImg(img2.src);
        loadImageCallbacked('images/cat3.jpg', (error, img3) => {
            if(error) throw error;
            addImg(img3.src);
        });
    });
});
