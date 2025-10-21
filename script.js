(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function() {
    answer.textContent = "Loading..."
    await new Promise(resolve => setTimeout(resolve, 1000));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        const listItems = array.map(post => `
          <li class="post">
            <strong> ${post.title}</strong><br>
            <p> ${post.body}</p>
          </li>
        `).join('');
        answer.innerHTML = `<ul>${listItems}</ul>`;
      })
  })

  cw2.addEventListener("click", async function() {
    answer.textContent = "Loading..."
    await new Promise(resolve => setTimeout(resolve, 1000));
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const title = data.title;
        const body = data.body;
        const listItems = `<li><strong>${title}</strong><p>${body}</p></li>`;
        answer.innerHTML = `<ul>${listItems}</ul>`;
      })
  })

  cw3.addEventListener("click", function() {
    answer.textContent = "Processing...";

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Nowy post',
        body: 'To jest treść posta',
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.id)
        answer.innerHTML = `<p>Dodano nowy post o ID = ${data.id}</p>`;
      })
      .catch(error => {
        answer.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });

})();