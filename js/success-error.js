
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

export {onSuccess, onError, onLoadData}
