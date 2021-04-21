import Axios from "axios";

async function download(fileUrl, name = 'file') {
    let fileName = name;
    const arreglo = fileUrl.split('.');
    const extension = arreglo[arreglo.length - 1];
    fileName = fileName + '.' + extension;

    try {
        await Axios({
            url: `/apimuni/download?fichero=${fileUrl}`, //url
            method: 'GET',
            responseType: 'blob', // importante
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); //detalle
            document.body.appendChild(link);
            link.click();
        });
    } catch (error) {
        console.log(error);
    }
}

export default download;