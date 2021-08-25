const api_url= "https://reqres.in/api/users"
const img_file = document.getElementById('fileid')
const img_url = document.getElementById('texturl')
const recogn = document.getElementById('recogn')

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
    fetch(api_url, {
        method: "POST",
        body: img_url
    }).then(response => response.text())
      .then(text_answer => recogn.innerHTML = window.URL.createObjectURL(img_file));
}

function submit_text() {
    fetch(api_url, {
        method: "POST",
        body: img_url
    }).then(response => response.text())
      .then(text_answer => recogn.innerHTML = text_answer);
}
// var objectURL = window.URL.createObjectURL(fileObj);