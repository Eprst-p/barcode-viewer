import pdfUrl from '../mocks/pdf/cert.pdf';

const openNewWindow = () => {
    window.open(pdfUrl);
};

export {openNewWindow}
