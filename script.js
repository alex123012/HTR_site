const api_url= "https://mts.pythonanywhere.com";
const recogn = document.getElementById('recogn');

document.getElementById('buttonid').addEventListener('click', openDialog);

document.getElementById('button1').addEventListener("click", submit_file);

document.getElementById('button2').addEventListener("click", submit_text);

// const dropArea = document.getElementById('drop-area');

// dropArea.addEventListener('dragover', (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//     // Style the drag-and-drop as a "copy file" operation.
//     event.dataTransfer.dropEffect = 'copy';
// });

// dropArea.addEventListener('drop', (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//     const fileList = event.dataTransfer.files;
//     console.log(fileList);

// });

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
    recogn.innerHTML = 'Wait...'
    fetch(api_url, {
        mode: 'cors',
        method: "POST",
        body: url
    }).then(response => response.json())
      .then(text_answer => recogn.innerHTML = text_answer['prediction']);
}
