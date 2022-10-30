
const clearImgHrefs = () => {
    const allImgHrefBlocks = document.querySelectorAll('.img-href-block');
    const imgListField = document.querySelector('.img-list-fieldset');
    for (let i=0; i<allImgHrefBlocks.length; i++) {
        const block = imgListField.querySelector('.img-href-block');
        imgListField.removeChild(block);
    }
}

export {clearImgHrefs}
