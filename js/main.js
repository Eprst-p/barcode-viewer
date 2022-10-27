import {onSuccess, onError, onLoadData} from './success-error';
import {sendData} from './server-fetchs';
import { changeUrl } from './change-img-url';

const submitBtn = document.querySelector('.code-text-btn');
const codeTextInput = document.querySelector('.code-text-input');
const imgWindow = document.querySelector('.img-window');
const closeBtn = document.querySelector('.close-btn');


const onSubmitBtnClick = () => {
    const dataToSend = {
        barcode: codeTextInput.value
    }
    sendData(onSuccess, onError, JSON.stringify(dataToSend));
    imgWindow.style.visibility = "visible";
    changeUrl();
}

submitBtn.addEventListener('click', onSubmitBtnClick);

const onCloseBtnClick = () => {
  imgWindow.style.visibility = "hidden";
}

closeBtn.addEventListener('click', onCloseBtnClick);
