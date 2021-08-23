const formData = new FormData();
const fileField = document.querySelector('input[type="text"]');

formData.append('lol', fileField.files[0]);

try {
  const response = fetch('https://reqres.in/api/products/3', {
    method: 'PUT',
    body: formData
  });
  const result = await response.json();
  console.log('Успех:', JSON.stringify(result));
} catch (error) {
  console.error('Ошибка:', error);
}