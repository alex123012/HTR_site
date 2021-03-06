const api_url = "https://mtshw.pythonanywhere.com";
// const api_url = "http://127.0.0.1:5000";
const recogn = document.getElementById('recogn');

document.getElementById('buttonid').addEventListener('click', openDialog);

document.getElementById('button1').addEventListener("click", submit_file);

document.getElementById('button2').addEventListener("click", submit_text);

function openDialog() {
    document.getElementById('fileid').click();
}
    
function submit_file() {
    const img_file = document.getElementById('fileid').files[0];
    let formData = new FormData();
    formData.append("file", img_file);

    submit(formData);
}

function submit_text() {
    const img_url = document.getElementById('texturl').value;
    console.log(img_url);
    let formData = new FormData();
         
    formData.append("url", img_url);

    submit(formData);
    
}


function submit(url) {
    recogn.innerHTML = 'Wait...';
    fetch(api_url, {
        method: "POST",
        // headers : { 
        //     'Content-Type': "image/*",
        //     'Accept': 'application/json'
        // },
        body: url
    })
    .catch(error => console.log(error))
    .then(response => recogn.innerHTML = response.json())
    .catch(error => console.log(error))
    .then(text_a => recogn.innerHTML = text_a['prediction'])

}
