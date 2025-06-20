import './style.scss'

function handleNotFound() {
  if (window.location.pathname !== '/') {
    document.querySelector('#app')!.innerHTML = `
      <div class="intro">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested could not be found.</p>
        <p>Return to <a href="/">homepage</a></p>
      </div>
    `;
  }
}

handleNotFound();