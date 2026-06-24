# PortfolioPageExample_2

# 🎬 Editkaro.in Portfolio Website

A modern, responsive portfolio website for **Editkaro.in**, a professional video editing and social media marketing agency. The website showcases video editing projects across multiple categories, provides lead-generation forms, and integrates with Google Sheets for automated client inquiry collection.

## 🌐 Live Demo

**Website:** https://iatul26.github.io/editkaro-website-portfolio/

---

## 📌 Features

### 🎨 Modern UI/UX

* Dark-themed premium design
* Fully responsive layout
* Smooth scrolling navigation
* Mobile-friendly hamburger menu
* Interactive hover animations

### 🎥 Portfolio Showcase

* Dynamic portfolio gallery
* Category-based filtering
* Video preview modal/lightbox
* Multiple content categories:

  * Short-Form Content
  * Long-Form Content
  * Gaming Videos
  * Football Edits
  * eCommerce Ads
  * Documentary Films
  * Color Grading Projects
  * Anime Music Videos
  * Commercial Advertisements

### 📧 Lead Generation System

* Newsletter subscription form
* Client contact form
* Google Sheets integration
* Real-time form submission status messages
* Automated data collection

### 👥 About Section

* Agency mission and vision
* Team member showcase
* Professional branding

### 📱 Responsive Design

* Desktop optimized
* Tablet optimized
* Mobile optimized
* Cross-browser compatible

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

### Libraries & Assets

* Font Awesome Icons
* Unsplash Images
* YouTube Embedded Videos

### Backend Integration

* Google Apps Script
* Google Sheets Database

---

## 📂 Project Structure

```text
editkaro-website-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/iatul26/editkaro-website-portfolio.git
```

### 2. Navigate to Project Folder

```bash
cd editkaro-website-portfolio
```

### 3. Open in Browser

Simply open:

```bash
index.html
```

or use VS Code Live Server.

---

## ⚙️ Google Sheets Form Integration

This project uses **Google Apps Script** as a lightweight backend to store form submissions directly into a Google Spreadsheet.

### Spreadsheet Structure

Create a sheet with the following columns:

| Timestamp | Form ID | Name | Email | Phone | Message |
| --------- | ------- | ---- | ----- | ----- | ------- |

---

### Apps Script Code

Deploy the following script as a Web App:

```javascript
function doPost(e) {
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheets()[0];

    var formId = e.parameter.formIdentifier || "Unknown Source";
    var timestamp = new Date();

    var name = e.parameter.name || "N/A (Newsletter)";
    var email = e.parameter.email || "";
    var phone = e.parameter.phone || "N/A";
    var message = e.parameter.message || "Newsletter Signup";

    sheet.appendRow([
      timestamp,
      formId,
      name,
      email,
      phone,
      message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Deploy as Web App

1. Open Google Apps Script
2. Create a new project
3. Paste the code
4. Click **Deploy → New Deployment**
5. Select **Web App**
6. Set access to:

   * Anyone
7. Deploy
8. Copy the generated URL
9. Replace:

```javascript
const GOOGLE_SCRIPT_WEBAPP_URL = "YOUR_WEB_APP_URL";
```

inside `script.js`.

---

## 🎯 Portfolio Categories

| Category      | Purpose                |
| ------------- | ---------------------- |
| Short-Form    | Reels, Shorts, TikToks |
| Long-Form     | YouTube Videos         |
| Gaming        | Gaming Montages        |
| Football      | Sports Highlights      |
| eCommerce     | Product Marketing      |
| Documentary   | Storytelling Projects  |
| Color Grading | Visual Enhancement     |
| Anime         | AMV Edits              |
| Ads           | Commercial Promotions  |

---

## ✨ Future Improvements

* CMS Integration
* Dynamic Portfolio Uploads
* Email Notifications
* Dark/Light Theme Toggle
* Advanced Animations
* Blog Section
* Client Testimonials
* Analytics Dashboard
* Firebase Backend Option
