import { serverApi } from "../utils/server-api";
import { response } from '../mocks/response';

let dataFromServer = {};
dataFromServer = JSON.parse(response);

const getData = (onSucces, onLoadData, onError, codeText) => {
    fetch(serverApi.GET, 
      {
        method: 'GET',
        body: codeText,
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

export {getData, dataFromServer}