
const clearImgHrefs = () => {
    const allImgHrefs = document.querySelectorAll('.img-href');
    const imgListField = document.querySelector('.img-list-fieldset');
    for (let i=0; i<allImgHrefs.length; i++) {
        const href = imgListField.querySelector('.img-href');
        imgListField.removeChild(href);
    }
}

export {clearImgHrefs}
