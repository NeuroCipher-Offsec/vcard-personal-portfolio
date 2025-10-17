'use strict';

// toggle function
const toggleActive = (elem) => elem.classList.toggle('active');

// sidebar toggle
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn.addEventListener('click', () => toggleActive(sidebar));

// contact form
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');
formInputs.forEach(input => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// page navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // remove all active classes
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    // activate clicked link and target page
    this.classList.add('active');
    const targetPage = this.textContent.toLowerCase();
    const page = document.querySelector(`[data-page="${targetPage}"]`);
    if (page) page.classList.add('active');
    window.scrollTo(0, 0);
  });
});
