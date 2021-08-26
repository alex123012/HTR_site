const api_url = "https://mts.pythonanywhere.com";
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

    submit(img_url);
    
}


function submit(url) {
    recogn.innerHTML = 'Wait...';
    fetch(api_url, {
        mode: 'no-cors',
        method: "POST",
        headers : { 
            'Content-Type': "image/*",
            'Accept': 'application/json'
        },
        body: url
    }).then(response => recogn.innerHTML = response.json()['prediction'])

}
