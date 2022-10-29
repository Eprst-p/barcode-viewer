import {onSuccess, onError, onLoadData} from './success-error';
import {getData} from './server-fetchs';
import { showInModal } from '../utils/show-in-modal';
import { openNewWindow } from '../utils/open-new-window';
import { createImgHrefs } from './create-img-hrefs';
import { dataFromServer } from './server-fetchs';
import { clearImgHrefs } from './clear-img-hrefs';


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
    showInModal(dataFromServer.images[0]);
    //openNewWindow(dataFromServer.images[0]);
    clearImgHrefs();
    createImgHrefs();
}

submitBtn.addEventListener('click', onSubmitBtnClick);

const onCloseBtnClick = () => {
  imgWindow.style.visibility = "hidden";
}

closeBtn.addEventListener('click', onCloseBtnClick);
