import { response } from "../mocks/response";

const imgByCode = document.querySelector('.img-by-code');

const url = JSON.parse(response).path;

const changeUrl = () => {
    imgByCode.src = url;
}

export {changeUrl}
