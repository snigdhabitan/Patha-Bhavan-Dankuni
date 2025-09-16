// Notices Page Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('notice-search');
    const sortBySelect = document.getElementById('sort-by');
    const noticesGrid = document.querySelector('.notices-grid');
    const noticeCards = Array.from(document.querySelectorAll('.notice-card'));

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const searchTerm = searchInput.value.toLowerCase();
            noticeCards.forEach(card => {
                const textContent = card.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    card.style.display = ''; // Show the card
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            });
        });
    }

    // Sort functionality
    if (sortBySelect) {
        sortBySelect.addEventListener('change', () => {
            const sortValue = sortBySelect.value;
            noticeCards.sort((a, b) => {
                const dateA = new Date(a.getAttribute('data-date'));
                const dateB = new Date(b.getAttribute('data-date'));

                if (sortValue === 'oldest') {
                    return dateA - dateB;
                } else { // 'latest' or default
                    return dateB - dateA;
                }
            });
            // Re-append the sorted cards to the grid
            noticeCards.forEach(card => noticesGrid.appendChild(card));
        });
    }

    // Read More / Show Less functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const targetId = button.getAttribute('data-target');
            const hiddenContent = document.getElementById(targetId);

            if (hiddenContent) {
                if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
                    hiddenContent.style.display = 'block';
                    button.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
                } else {
                    hiddenContent.style.display = 'none';
                    button.innerHTML = 'Read More <i class="fas fa-arrow-right"></i>';
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the link from jumping

                const imageSrc = item.getAttribute('data-image');
                const captionText = item.getAttribute('data-caption');

                lightboxImage.src = imageSrc;
                lightboxCaption.textContent = captionText;
                lightbox.style.display = 'flex';
            });
        });
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }
});

// -------------------------------------------------------------------
// 1. Mobile Menu Toggle
// This makes the hamburger menu button work on mobile.
// -------------------------------------------------------------------
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });
}