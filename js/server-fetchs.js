import { serverApi } from "../utils/server-api";
import { response } from '../mocks/response';

let dataFromServer = {};
dataFromServer = JSON.parse(response);

const getData = (onSucces, onLoadData, onError, codeText) => {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Origin','http://192.168.68.102:5294/api/BarcodeDataItems');

  fetch(serverApi.GET, 
    {
      method: 'GET',
      headers: headers,
      body: codeText,
      mode: 'no-cors',
    },      
  )
    .then((response) => response.json())
    .then((data) => {
    onSucces(data);
    })
    .then(() => {
    onLoadData();
    })
    .catch(() => {
    onError();
    });
};

const sendData = (onSucces, onError, data) => {
  fetch(serverApi.POST, 
    {
      method: 'POST',
      body: data,
    },      
  )
    .then((response) => response.json())
    .then((data) => {
    onSucces(data);
    })
    .then(() => {
    onLoadData();
    })
    .catch(() => {
    onError();
    });
  };

export {getData, sendData, dataFromServer}