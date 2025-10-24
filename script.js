document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('name');
            if (!name.value.trim()) {
                name.classList.add('is-invalid');
                document.getElementById('nameError').textContent = 'Name is required.';
                valid = false;
            } else {
                name.classList.remove('is-invalid');
            }

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.classList.add('is-invalid');
                document.getElementById('emailError').textContent = 'Valid email required.';
                valid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                subject.classList.add('is-invalid');
                document.getElementById('subjectError').textContent = 'Subject is required.';
                valid = false;
            } else {
                subject.classList.remove('is-invalid');
            }

            const message = document.getElementById('message');
            if (!message.value.trim()) {
                message.classList.add('is-invalid');
                document.getElementById('messageError').textContent = 'Message is required.';
                valid = false;
            } else {
                message.classList.remove('is-invalid');
            }

            const spam = document.getElementById('spam');
            if (spam.value !== '4') {
                spam.classList.add('is-invalid');
                document.getElementById('spamError').textContent = 'Incorrect answer.';
                valid = false;
            } else {
                spam.classList.remove('is-invalid');
            }

            if (valid) {
                document.getElementById('contactSuccess').style.display = 'block';
                document.getElementById('contactError').style.display = 'none';
                contactForm.reset();
            } else {
                document.getElementById('contactError').style.display = 'block';
                document.getElementById('contactSuccess').style.display = 'none';
            }
        });
    }

    // Registration Form Validation
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;

            const fullName = document.getElementById('fullName');
            if (!fullName.value.trim()) {
                fullName.classList.add('is-invalid');
                document.getElementById('fullNameError').textContent = 'Full name is required.';
                valid = false;
            } else {
                fullName.classList.remove('is-invalid');
            }

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                email.classList.add('is-invalid');
                document.getElementById('emailError').textContent = 'Valid email required.';
                valid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            const phone = document.getElementById('phone');
            if (!phone.value.trim() || !phone.checkValidity()) {
                phone.classList.add('is-invalid');
                document.getElementById('phoneError').textContent = 'Format: 123-456-7890';
                valid = false;
            } else {
                phone.classList.remove('is-invalid');
            }

            const program = document.getElementById('program');
            if (!program.value) {
                program.classList.add('is-invalid');
                document.getElementById('programError').textContent = 'Select a program.';
                valid = false;
            } else {
                program.classList.remove('is-invalid');
            }

            const studyMode = document.querySelector('input[name="studyMode"]:checked');
            const studyModeError = document.getElementById('studyModeError');
            if (!studyMode) {
                studyModeError.textContent = 'Select a study mode.';
                studyModeError.style.display = 'block';
                valid = false;
            } else {
                studyModeError.style.display = 'none';
            }

            const intake = document.getElementById('intake');
            if (!intake.value || new Date(intake.value) < new Date('2025-10-25')) {
                intake.classList.add('is-invalid');
                document.getElementById('intakeError').textContent = 'Future date required.';
                valid = false;
            } else {
                intake.classList.remove('is-invalid');
            }

            const password = document.getElementById('password');
            if (!password.value || password.value.length < 8) {
                password.classList.add('is-invalid');
                document.getElementById('passwordError').textContent = 'Minimum 8 characters.';
                valid = false;
            } else {
                password.classList.remove('is-invalid');
            }

            const confirmPassword = document.getElementById('confirmPassword');
            if (confirmPassword.value !== password.value) {
                confirmPassword.classList.add('is-invalid');
                document.getElementById('confirmPasswordError').textContent = 'Passwords must match.';
                valid = false;
            } else {
                confirmPassword.classList.remove('is-invalid');
            }

            const agreement = document.getElementById('agreement');
            if (!agreement.checked) {
                agreement.classList.add('is-invalid');
                document.getElementById('agreementError').textContent = 'You must agree.';
                valid = false;
            } else {
                agreement.classList.remove('is-invalid');
            }

            if (valid) {
                document.getElementById('regSuccess').style.display = 'block';
                regForm.style.display = 'none';
            }
        });
    }

    // Student Life Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                const items = document.querySelectorAll('.life-item');
                items.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Hero Carousel Init
    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            wrap: true
        });
    }

    // Quote Toggles
    const quoteToggles = document.querySelectorAll('.quote-toggle');
    quoteToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = document.querySelector(this.dataset.target);
            target.style.display = target.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});