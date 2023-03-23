const directoryLinks = document.querySelectorAll('.directory-link');

directoryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const path = event.target.dataset.path;
    window.location.href = path;
  });
});
