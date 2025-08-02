/*
  =============================================================================
  ASTITCODE JavaScript

  This script adds interactivity to the ASTITCODE landing page. It handles
  the responsive navigation toggle, smooth scrolling for anchor links,
  dynamic styling of the navigation bar on scroll, and simple contact form
  feedback. Feel free to extend or modify this file as your site grows.
  =============================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');
  const navbar = document.querySelector('.navbar');

  // Toggle mobile navigation menu
  if (burger) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }

  // Smooth scroll to section on nav item click
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset - 65; // Account for fixed navbar height
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
      // Close mobile menu after clicking a link
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Handle contact form submission
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Display success feedback to the user
      if (formMessage) {
        formMessage.textContent = 'Thank you! We have received your message.';
        formMessage.style.display = 'block';
        // Hide the message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      }
      form.reset();
    });
  }

  // Update the year in the footer automatically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});