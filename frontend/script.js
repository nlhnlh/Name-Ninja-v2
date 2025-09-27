document.getElementById('helloBtn').addEventListener('click', async () => {
  const response = await fetch('/api/hello');
  const data = await response.json();
  document.getElementById('helloMsg').textContent = data.message;
});