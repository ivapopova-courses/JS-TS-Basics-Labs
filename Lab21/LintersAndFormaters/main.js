console.log('Hello');
fetch('https://example.com')
  .then((r) => r.json())
  .then((data) => console.log(data));
