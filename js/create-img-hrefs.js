import { dataFromServer } from './server-fetchs';
import { openNewWindow } from '../utils/open-new-window';
import { showInModal } from '../utils/show-in-modal';
import { extensions } from '../utils/constants';
import pdfIcon from '../public/icons/pdf.png';
import openWindowIcon from '../public/icons/open-new-window.png'

const images = dataFromServer.images;


const createImgHref = (element, url) => {
    element.src = url;
    const onImgHrefClick = (evt) => {
        evt.preventDefault();
        showInModal(url);
    }
    element.addEventListener('click', onImgHrefClick);
}

const createPdfHref = (element, url) => {
    element.src = pdfIcon;
    const onPdfHrefClick = (evt) => {
        evt.preventDefault();
        openNewWindow(url);
    }
    element.addEventListener('click', onPdfHrefClick);
}

const createImgHrefs = () => {
    const imgHrefTemplate = document.querySelector('#img-href-template').content;
    const imgHrefBlock = imgHrefTemplate.querySelector('.img-href-block');
    const imgHrefsContainer = document.querySelector('.img-list-fieldset');
    const imgHrefFragment = document.createDocumentFragment();

    images.forEach((imgUrl) => {
        const block = imgHrefBlock.cloneNode(true);
        const img = block.querySelector('.img-href');
        const btn = block.querySelector('.open-new-window-btn');
        btn.src = openWindowIcon;
        const ext = imgUrl.slice(-3);
        switch (ext) {
            case extensions.PDF :
                console.log('pdf-logick', ext);
                createPdfHref(img, imgUrl);
                break;
            default :
                console.log('img-logick', ext);
                createImgHref(img, imgUrl);
                break;
        }
        const onNewWindowBtnfClick = (evt) => {
            evt.preventDefault();
            openNewWindow(imgUrl);
        }
        btn.addEventListener('click', onNewWindowBtnfClick);

        imgHrefFragment.appendChild(block);
    })
    imgHrefsContainer.appendChild(imgHrefFragment);
}

export {createImgHrefs}
