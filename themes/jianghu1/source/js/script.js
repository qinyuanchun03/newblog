document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    const searchModal = document.getElementById('search-modal');
    const searchOpenBtn = document.getElementById('search-open-btn');
    const searchCloseBtn = document.getElementById('search-modal-close');
    const searchInput = document.querySelector('.search-modal-input');

    if (header) {
        // Add scroll listener for header stickyness and scroll-to-top button visibility
        window.addEventListener('scroll', () => {
            // Sticky header logic
            if (window.scrollY > 80) { /* Adjust sticky threshold as needed */
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }

            // Scroll-to-top button visibility
            if (scrollTopBtn && window.scrollY > 300) { /* Adjust button visibility threshold */
                scrollTopBtn.classList.add('show');
            } else if (scrollTopBtn) {
                scrollTopBtn.classList.remove('show');
            }
        });
    }

    // Scroll-to-top functionality
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for internal links (like scroll-indicator and nav links if they point to sections)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Check if the target exists because sometimes href="#some-id" might be for non-existent elements
            if(targetId.length > 1) { // to avoid scrolling to top for href="#"
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({
                      behavior: 'smooth'
                  });
              }
            }
        });
    });

    // Search Modal Logic
     if (searchModal && searchOpenBtn && searchCloseBtn) {
         searchOpenBtn.addEventListener('click', () => {
             searchModal.classList.add('show');
             searchInput.focus();
         });

         searchCloseBtn.addEventListener('click', () => {
             searchModal.classList.remove('show');
         });

         window.addEventListener('click', (e) => {
             if (e.target == searchModal) {
                 searchModal.classList.remove('show');
             }
         });
     }
});