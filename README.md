# 🚀 Naman Jain - Personal Portfolio Website

A modern, clean, and visually attractive personal portfolio website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Specifically crafted for **Naman Jain**, an aspiring engineer pursuing **B.Tech Computer Science at JECRC University, Jaipur**.

---

## 🌟 Key Highlights

- **100% Genuine & Honest**: Strictly uses only your real provided details. No fabricated projects, fake credentials, or invented skills.
- **Theme Switcher**: Fully functional **Dark Mode & Light Mode** toggle with automatic OS preference detection and saved user settings.
- **Responsive Architecture**: Pixel-perfect layout across desktop monitors, laptops, tablets, and smartphones.
- **Modern UI/UX**: Glassmorphism cards, ambient gradient glows, animated status pills, interactive copy-to-clipboard buttons, and smooth scroll navigation.
- **Zero Heavy Dependencies**: Pure HTML, CSS, and JavaScript. Fast loading speeds, zero build process required, runs anywhere immediately.
- **Easy to Customize**: Thoughtfully designed with clear HTML comments (`<!-- EDITABLE: ... -->`) so you can update skills, projects, and contacts in minutes.

---

## 📂 Project Structure

```
Portfolio/
├── index.html        # Main HTML structure with all 8 sections
├── styles.css        # Responsive styling, design tokens, and dark/light themes
├── script.js         # Navigation logic, theme toggle, form validation & effects
└── README.md         # Documentation & guide for customization and deployment
```

---

## 🧭 Website Sections

1. **Home**: Hero section highlighting your name, degree, university, introduction quote, status pill, and interactive profile badge.
2. **About Me**: Professional introduction detailing your academic background and mindset.
3. **Education**: Dedicated academic showcase for **B.Tech in Computer Science** at **JECRC University, Jaipur**.
4. **Skills**: Honest display stating: *"Currently developing my technical skills through my Computer Science education and practical learning,"* along with customizable placeholders.
5. **Projects**: In-pipeline showcase stating: *"Projects will be added as I build and complete them,"* with a ready-to-use template for future projects.
6. **Certifications & Achievements**: Dedicated section stating: *"Certifications and achievements will be added as I earn them,"* featuring future milestone slots.
7. **Career Goal**: Prominent feature card displaying your ambition: *"To become a good engineer by continuously learning, developing strong technical skills and gaining practical experience."*
8. **Contact**: Interactive contact form and clean placeholders for your Email, Phone Number, LinkedIn, and GitHub with copy-to-clipboard buttons.

---

## 🚀 How to View the Website Locally

You don't need any complex software or server setup:

1. Locate the folder `c:\Users\hp\Downloads\Naman Jain\Portfolio`.
2. Double-click **`index.html`** to open it directly in any web browser (Chrome, Edge, Firefox, Brave, Safari).
3. *(Optional)* If you use VS Code, you can also right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ How to Customize Your Information

All editable spots in [index.html](file:///c:/Users/hp/Downloads/Naman%20Jain/Portfolio/index.html) are marked with clear comments:

### 1. Updating Contact Details
Open `index.html` and scroll to `<section id="contact">`:
- **Email**: Replace `your.email@example.com` and `mailto:your.email@example.com` with your actual email.
- **Phone**: Replace `+91 XXXXX XXXXX` with your phone number.
- **LinkedIn**: Replace `https://linkedin.com/in/yourusername` with your LinkedIn URL.
- **GitHub**: Replace `https://github.com/yourusername` with your GitHub URL.

### 2. Adding Technical Skills
When you master programming languages or technologies (e.g., C++, Python, Java, Data Structures, Web Development, SQL), find the `<div class="future-skills-tags">` in the `#skills` section and update:
```html
<span class="future-tag">C++</span>
<span class="future-tag">Python</span>
<span class="future-tag">Data Structures</span>
```

### 3. Adding Your Future Projects
When you build a project, you can turn the wireframe preview inside `<section id="projects">` into a live card:
```html
<div class="sample-wireframe-card">
  <div class="wireframe-header">
    <div class="wireframe-title">My Awesome Project Name</div>
    <div class="wireframe-tags">
      <span>Python</span>
      <span>Flask</span>
    </div>
  </div>
  <div class="wireframe-body">
    Short summary of what your project does and the problem it solves.
  </div>
  <div class="wireframe-links">
    <a href="https://github.com/yourusername/project" target="_blank">GitHub Code &rarr;</a>
    <a href="https://yourprojectdemo.com" target="_blank">Live Demo &rarr;</a>
  </div>
</div>
```

### 4. Adding Certifications & Achievements
When you complete a course (Coursera, NPTEL, Udemy) or win a hackathon, navigate to `<section id="certifications">` and update the milestone cards with the certificate title, issuing organization, and completion year.

---

## 📬 Connecting the Contact Form to Your Email

Currently, the contact form validates inputs on the client side. To have inquiries sent straight to your personal inbox for free, you can use **Formspree** or **Web3Forms**:

### Option A: Using Web3Forms (Takes 60 seconds, no sign-up required)
1. Go to [web3forms.com](https://web3forms.com) and enter your email to get a free Access Key.
2. In `index.html`, update `<form id="contactForm" ...>`:
   ```html
   <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
     <!-- existing fields remain the same -->
   </form>
   ```

### Option B: Using Formspree
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form and paste your endpoint into the form's `action` attribute:
   ```html
   <form id="contactForm" action="https://formspree.io/f/your_form_id" method="POST">
   ```

---

## 🌐 Free Hosting Guide (Get Your Website Live Online)

### Option 1: GitHub Pages (Recommended)
1. Create a free account on [GitHub](https://github.com).
2. Create a new repository named `portfolio` (or `namanjain.github.io`).
3. Upload `index.html`, `styles.css`, `script.js`, and `README.md`.
4. Go to **Repository Settings** &rarr; **Pages** &rarr; select `main` branch &rarr; click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/portfolio`!

### Option 2: Vercel / Netlify
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Drag and drop your `Portfolio` folder.
3. You will immediately receive a free live `.vercel.app` or `.netlify.app` URL.

---

© 2026 **Naman Jain** • B.Tech Computer Science, JECRC University, Jaipur.
