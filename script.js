// Select the hamburger icon and the nav ul
  const hamburger = document.getElementById('hamburger-icon');
  const navUl = document.querySelector('#nav-menu ul');

  // Function to toggle the "active" class
  function toggleMenu() {
    navUl.classList.toggle('active');
  }

  // Attach the function to the hamburger click
  hamburger.addEventListener('click', toggleMenu);

// Filter functionality for projects
document.addEventListener('DOMContentLoaded', function() {
                // Create filter buttons
                const projectsSection = document.querySelector('section:nth-of-type(2)');
                const filterContainer = document.createElement('div');
                filterContainer.className = 'filter-container';
                filterContainer.style.marginTop = '1.5em';
                filterContainer.style.marginBottom = '1em';

                const filters = [
                    { label: 'All', value: 'all' },
                    { label: 'Web Design', value: 'Web Design Project' },
                    { label: 'Mobile App', value: 'Mobile App Projects' },
                    { label: 'Game Development', value: 'Game Development Projects' },
                    { label: 'YouTube', value: 'YouTube How-to Videos' }
                ];

                // Create buttons for each filter
                filters.forEach(filter => {
                    const btn = document.createElement('button');
                    btn.textContent = filter.label;
                    btn.setAttribute('data-filter', filter.value);
                    btn.style.marginRight = '0.5em';
                    btn.addEventListener('click', function() {
                        filterProjects(filter.value);
                    });
                    filterContainer.appendChild(btn);
                });

                // Insert filter container before the projects
                projectsSection.insertBefore(filterContainer, projectsSection.children[1]);

                // Function to filter projects
                function filterProjects(filterValue) {
                    const articles = projectsSection.querySelectorAll('article');
                    articles.forEach(article => {
                        const title = article.querySelector('h3').textContent;
                        if (filterValue === 'all' || title === filterValue) {
                            article.style.display = '';
                        } else {
                            article.style.display = 'none';
                        }
                    });
                }
            });

// Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });

// Lightbox functionality for project images
document.addEventListener("DOMContentLoaded", function () {
            // Create lightbox elements
            const lightboxOverlay = document.createElement("div");
            lightboxOverlay.id = "lightbox-overlay";
            lightboxOverlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0,0,0,0.8); display: none; align-items: center; justify-content: center; z-index: 1000;
            `;
            const lightboxImg = document.createElement("img");
            lightboxImg.id = "lightbox-img";
            lightboxImg.alt = "lightbox image";
            lightboxImg.style.cssText = "max-width:90vw; max-height:90vh; border-radius:8px; box-shadow:0 0 20px #000;";
            lightboxOverlay.appendChild(lightboxImg);
            document.body.appendChild(lightboxOverlay);

            // Show lightbox on image click
            document.querySelectorAll("section:nth-of-type(2) article img").forEach(img => {
                img.style.cursor = "pointer";
                img.addEventListener("click", function () {
                    lightboxImg.src = this.src;
                    lightboxImg.alt = this.alt;
                    lightboxOverlay.style.display = "flex";
                });
            });

            // Hide lightbox on overlay click
            lightboxOverlay.addEventListener("click", function (e) {
                if (e.target === lightboxOverlay) {
                    lightboxOverlay.style.display = "none";
                    lightboxImg.src = "";
                }
            });
        });

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Helper to show error
    function showError(input, message) {
        removeError(input);
        const error = document.createElement('div');
        error.className = 'form-error';
        error.style.color = 'red';
        error.style.fontSize = '0.9em';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    // Helper to remove error
    function removeError(input) {
        const next = input.nextSibling;
        if (next && next.classList && next.classList.contains('form-error')) {
            next.remove();
        }
    }

    // Real-time validation handlers
    name.addEventListener('input', function() {
        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
        } else {
            removeError(name);
        }
    });

    email.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
        } else {
            removeError(email);
        }
    });

    message.addEventListener('input', function() {
        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
        } else {
            removeError(message);
        }
    });

    form.addEventListener('submit', function(e) {
        let valid = true;

        // Remove previous error messages
        document.querySelectorAll('.form-error').forEach(el => el.remove());

        // Name validation
        if (name.value.trim() === '') {
            showError(name, 'Name is required.');
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            valid = false;
        }

        // Message validation
        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});