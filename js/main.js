import {onSuccess, onError, onLoadData} from './success-error';
import {sendData} from './server-fetchs';


const submitBtn = document.querySelector('.code-text-btn');
const codeTextInput = document.querySelector('.code-text-input');


const onSubmitBtnClick = () => {
    const dataToSend = {
        barcode: codeTextInput.value
    }
    sendData(onSuccess, onError, JSON.stringify(dataToSend));
}

submitBtn.addEventListener('click', onSubmitBtnClick);

