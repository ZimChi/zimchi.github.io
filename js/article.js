document.querySelectorAll('.tldr').forEach(tldr => {

  tldr.addEventListener('click', () => {
    console.log("click")
    const target = document.getElementById(tldr.dataset.target);
    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  });
});
