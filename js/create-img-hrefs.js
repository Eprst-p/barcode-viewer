import defaultImgUrl from '../mocks/img/default.jpg';
import { openNewWindow } from '../utils/open-new-window';

const createImgHrefs = (imgAmount) => {
    const imgHrefTemplate = document.querySelector('#img-href-template').content;
    const imgHrefElement = imgHrefTemplate.querySelector('.img-href');
    const imgHrefsContainer = document.querySelector('.img-list-fieldset');
    const imgHrefFragment = document.createDocumentFragment();

    for (let i=0; i<imgAmount; i++) {
        const current = imgHrefElement.cloneNode(true);
        current.href = defaultImgUrl;
        current.textContent = defaultImgUrl;
        const onHrefClick = (evt) => {
            evt.preventDefault();
            openNewWindow(defaultImgUrl);
        }
        current.addEventListener('click', onHrefClick);
        imgHrefFragment.appendChild(current);
    }
    imgHrefsContainer.appendChild(imgHrefFragment);
}

export {createImgHrefs}
