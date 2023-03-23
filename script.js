const directories = document.querySelectorAll('.directory');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const fileContent = document.querySelector('#file-content');

directories.forEach(directory => {
  directory.addEventListener('click', event => {
    event.preventDefault();
    const fileName = event.target.innerText;
    modal.style.display = 'flex';
    fileContent.value = `Contenido del archivo ${fileName}`;
  });
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

modalContent.addEventListener('submit', event => {
  event.preventDefault();
  console.log(fileContent.value);
  modal.style.display = 'none';
});
