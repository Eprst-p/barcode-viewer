
const imgByCode = document.querySelector('.img-by-code');
const imgWindow = document.querySelector('.img-window');


const showInModal = (url) => {
    imgWindow.style.visibility = "visible";
    imgByCode.src = url;
}

export {showInModal}
