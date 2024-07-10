function toggleMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-text');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const answer = this.parentElement.nextElementSibling;

            answer.classList.toggle('hidden');
        });
    });
});

function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const currentState = button.getAttribute('data-state');
    
    if (currentState === 'closed') {
        answer.classList.remove('hidden');
        button.innerHTML = '<img class="w-6 h-6" src="/icons/minus.svg" alt="Minus Icon">';
        button.setAttribute('data-state', 'open');
    } else {
        answer.classList.add('hidden');
        button.innerHTML = '<img class="w-6 h-6" src="/icons/add.svg" alt="Add Icon">';
        button.setAttribute('data-state', 'closed');
    }
}


const scrollContainer = document.getElementById('scrollContainer');

        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
