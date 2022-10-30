import shkaf from '../mocks/img/shkaf.jpg';
import stol from '../mocks/img/stol.jpg';
import stul from '../mocks/img/stul.jpg';
import cert from '../mocks/pdf/cert.pdf';
import protocol from '../mocks/pdf/protocol.pdf';
import zayavlenie from '../mocks/pdf/zayavlenie.pdf';

const arrayFromServer = [shkaf, stol, cert, stul, protocol, zayavlenie];

const responseObj = {
    images: arrayFromServer
}

const response = JSON.stringify(responseObj);

export {response}
