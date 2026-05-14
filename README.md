# CV Builder Pro 🚀

**CV Builder Pro** is a high-performance, real-time React workstation designed for modern professionals. It utilizes a split-screen architecture to provide a seamless "What You See Is What You Get" (WYSIWYG) experience, allowing users to draft professional resumes with instant visual feedback.

## 🛠 Tech Stack

*   **Framework:** React.js (Functional Components & Hooks)
*   **Build Tool:** Vite (for lightning-fast development)
*   **Styling:** Modern CSS3 with CSS Variables for theme management
*   **Deployment:** Vercel

## ✨ Key Features

*   **Real-Time Synchronization:** Implemented "Lifting State Up" architecture to sync form inputs with a professional A4 live preview instantly.
*   **Modular Component Design:** Separate logic for General Info, Education, and Experience sections to ensure code maintainability.
*   **Professional PDF Export:** Engineered using `@media print` CSS rules to generate perfectly formatted documents directly from the browser.
*   **Responsive Workstation:** A dual-panel layout optimized for desktops, which intelligently stacks for mobile devices to maintain usability.

## 🏗 Architectural Design

The project follows a **Centralized State Pattern**. All user data is managed at the `App.js` level and distributed to modular sub-components via props. This ensures a "Single Source of Truth," preventing data desync between the editor and the document.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/david-godspower/cv-application-builder.git](https://github.com/david-godspower/cv-application-builder.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## 📈 Engineering Impact

This project was built to demonstrate proficiency in:
*   **State Management:** Handling complex, nested objects and arrays in React.
*   **User Experience (UX):** Reducing friction in document creation through real-time feedback.
*   **Responsive Engineering:** Managing complex layouts across varying viewport sizes.

---

### 👨‍💻 Developer
**David Godspower Ajala**
Computer Engineering Student, **LAUTECH**
[Portfolio](https://davidgodspowerajala.me) | [LinkedIn](https://www.linkedin.com/in/davidgodspowerajala/)

> *"Consistency over motivation. Discipline over excuses."*