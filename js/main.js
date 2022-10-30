import {onSuccess, onError, onLoadData} from './success-error';
import {getData, sendData} from './server-fetchs';
import { showInModal } from '../utils/show-in-modal';
import { openNewWindow } from '../utils/open-new-window';
import { createImgHrefs } from './create-img-hrefs';
import { dataFromServer } from './server-fetchs';
import { clearImgHrefs } from './clear-img-hrefs';
import { extensions } from '../utils/constants';


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
    sendData(onSuccess, onError, JSON.stringify(dataToSend));
    imgListField.style.visibility = "visible";
    const firstFileExt = dataFromServer.images[0].slice(-3);
    switch (firstFileExt) {
      case extensions.PDF:
         openNewWindow(dataFromServer.images[0]);
         break;
      default:
        showInModal(dataFromServer.images[0]);
        break;
    }
    clearImgHrefs();
    createImgHrefs();
}

submitBtn.addEventListener('click', onSubmitBtnClick);

const onCloseBtnClick = () => {
  imgWindow.style.visibility = "hidden";
}

closeBtn.addEventListener('click', onCloseBtnClick);
