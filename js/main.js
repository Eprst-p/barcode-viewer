
const submitBtn = document.querySelector('.code-text-btn');
const codeTextInput = document.querySelector('.code-text-input');


const onSuccess = () => {
    console.log('fcking OK!!!');
    alert('fcking OK!!!');
}

const onError = () => {
    console.log('Error');
    alert('Error');
}

const onLoadData = () => {
    console.log('загружено!');
    alert('что то сделать с загруженым дерьмом');
}


const sendData = (onSuccess, onError, codeText) => fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: codeText,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        //тут должнен быть запрос на лоад с сервера, по идее
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });

const getData = (onSucces, onLoadData, onError) => {
    fetch('https://24.javascript.pages.academy/kekstagram/data')
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


const onSubmitBtnClick = () => {
    const dataToSend = {
        barcode: codeTextInput.value
    }
    sendData(onSuccess, onError, JSON.stringify(dataToSend));
}

submitBtn.addEventListener('click', onSubmitBtnClick);

