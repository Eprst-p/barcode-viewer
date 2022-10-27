import { serverApi } from "../utils/server-api";

const sendData = (onSuccess, onError, codeText) => fetch(
    serverApi.POST,
    {
      method: 'POST',
      body: codeText,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        //тут должнен быть запрос на лоад с сервера, по идее. После удачной отправки
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });

const getData = (onSucces, onLoadData, onError) => {
    fetch(serverApi.GET)
        .then((response) => response.json())
        .then((data) => {
        onSucces(data);
        allPhotos = data;
        })
        .then(() => {
        onLoadData();
        })
        .catch(() => {
        onError();
        });
    };

export {sendData, getData}