import {onSuccess, onError, onLoadData} from './success-error';
import {getData} from './server-fetchs';
import { changeUrl } from './change-img-url';
import { openNewWindow } from './window-pdf';

const submitBtn = document.querySelector('.code-text-btn');
const codeTextInput = document.querySelector('.code-text-input');
const imgWindow = document.querySelector('.img-window');
const closeBtn = document.querySelector('.close-btn');


const onSubmitBtnClick = () => {
    const dataToSend = {
        barcode: codeTextInput.value
    }
    getData(onSuccess, onLoadData, onError, JSON.stringify(dataToSend));
    imgWindow.style.visibility = "visible";
    changeUrl();
    openNewWindow();
}

submitBtn.addEventListener('click', onSubmitBtnClick);

const onCloseBtnClick = () => {
  imgWindow.style.visibility = "hidden";
}

closeBtn.addEventListener('click', onCloseBtnClick);
