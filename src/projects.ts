import axios from 'axios';

const urls = [
  'https://vue-todo-app-seven-sepia.vercel.app/',
  'https://vue-ip-address-tracker-iota.vercel.app/',
  'https://vue-rest-countries-five.vercel.app/',
  'https://vue-age-calculator-six.vercel.app/',
];

async function fetchProjects() {
  try {
    const projects = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await axios.get(
            `https://api.microlink.io/?url=${encodeURIComponent(url)}`
          );
          return {
            title: response.data.data.title || 'Untitled Project',
            description: response.data.data.description || 'No description available',
            image: response.data.data.image?.url || '/placeholder-image.jpg',
            url,
          };
        } catch (error) {
          return {
            title: 'Error loading project',
            description: 'Could not load project details',
            image: '/placeholder-image.jpg',
            url,
          };
        }
      })
    );
    renderProjects(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    // Fallback: Render with placeholder data
    renderProjects(
      urls.map((url) => ({
        title: "Project",
        description: "Description not available",
        image: "/placeholder-image.jpg",
        url,
      }))
    );
  }
}

function renderProjects(projects: any) {
  const projectsContainer = document.querySelector("#projects");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = projects
    .map(
      (project: any) => `
      <details class="project" data-show-print="true" data-show-web="true">
        <summary class="project-info project-list">
          <div class="project-meta">
            <p class="project-role">${escapeHtml(project.title)}</p>
            <div class="project-details">
              <p class="project-headline">${escapeHtml(project.description)}</p>
              <p class="project-link">
                <a href="${escapeHtml(project.url)}" rel="noopener" target="_blank">
                  ${escapeHtml(project.url)}
                </a>
              </p>
            </div>
          </div>
          <div class="project-img">
            <img 
              alt="${escapeHtml(project.title)}" 
              loading="lazy"
              onerror="this.onerror=null; this.src='/placeholder-image.jpg'"
              src="${escapeHtml(project.image)}"
              style="object-position: center center"
            >
          </div>
        </summary>
      </details>
    `
    )
    .join("");
}

function escapeHtml(unsafe: any) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", fetchProjects);