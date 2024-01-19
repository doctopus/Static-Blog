// markdownRenderer.js
function renderMarkdown(targetElementId, markdownUrl) {
    const targetElement = document.getElementById(targetElementId);
    fetch(markdownUrl)
      .then(response => response.text())
      .then(markdown => {
        const html = marked(markdown);
        targetElement.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching and rendering markdown:', error);
      });
  }
  