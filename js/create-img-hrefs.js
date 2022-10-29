import { dataFromServer } from './server-fetchs';
import { openNewWindow } from '../utils/open-new-window';
import { showInModal } from './show-in-modal';

const images = dataFromServer.images;

const createImgHrefs = () => {
    const imgHrefTemplate = document.querySelector('#img-href-template').content;
    const imgHrefElement = imgHrefTemplate.querySelector('.img-href');
    const imgHrefsContainer = document.querySelector('.img-list-fieldset');
    const imgHrefFragment = document.createDocumentFragment();

    images.forEach((imgUrl) => {
        const current = imgHrefElement.cloneNode(true);
        current.href = imgUrl;
        current.textContent = imgUrl;
        const onHrefClick = (evt) => {
            evt.preventDefault();
            openNewWindow(imgUrl);
            showInModal(imgUrl);
        }
        current.addEventListener('click', onHrefClick);
        imgHrefFragment.appendChild(current);
    })
    imgHrefsContainer.appendChild(imgHrefFragment);
}

export {createImgHrefs}
