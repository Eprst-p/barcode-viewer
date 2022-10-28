import {onSuccess, onError, onLoadData} from './success-error';
import {getData} from './server-fetchs';
import { changeUrl } from './change-img-url';
import { openNewWindow } from '../utils/open-new-window';
import { createImgHrefs } from './create-img-hrefs';
import pdfUrl from '../mocks/pdf/cert.pdf';


const submitBtn = document.querySelector('.code-text-btn');
const codeTextInput = document.querySelector('.code-text-input');
const imgWindow = document.querySelector('.img-window');
const imgListField = document.querySelector('.img-list-fieldset');
const closeBtn = document.querySelector('.close-btn');


const onSubmitBtnClick = () => {
    const dataToSend = {
        barcode: codeTextInput.value
    }
    getData(onSuccess, onLoadData, onError, JSON.stringify(dataToSend));
    imgWindow.style.visibility = "visible";
    imgListField.style.visibility = "visible";
    changeUrl();
    openNewWindow(pdfUrl);
    createImgHrefs(6)
}

submitBtn.addEventListener('click', onSubmitBtnClick);

const onCloseBtnClick = () => {
  imgWindow.style.visibility = "hidden";
}

closeBtn.addEventListener('click', onCloseBtnClick);
