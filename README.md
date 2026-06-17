# 📄 Building Resume

A modern, completely free, and lightning-fast resume builder designed to help students, freshers, and professionals craft stunning ATS-friendly resumes in minutes. Built with React, Tailwind CSS, and powered by serverless PDF generation via Vercel and Puppeteer.

## ✨ Features

- **100% Free & No Sign-ups:** Start building immediately without creating an account or handing over personal data.
- **Multiple ATS-Optimized Templates:** Choose from Modern, Classic, Minimal, Executive, Academic, and Technical designs.
- **Real-Time Preview:** Watch your resume update instantly as you type.
- **Serverless PDF Generation:** Leverages Puppeteer on Vercel Serverless Functions to generate pixel-perfect, high-quality A4 PDFs.
- **Mobile Responsive:** Fully responsive design so you can build and download your resume from your phone.
- **Tailored Content:** Adjusts profile titles and summaries based on your experience level (Fresher, Intermediate, Executive).

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, TypeScript
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **PDF Generation:** Node.js, Express (Local), Puppeteer-Core, @sparticuz/chromium (Vercel Serverless)
- **Deployment:** Vercel

## 🚀 Getting Started Locally

To run this project locally, you will need Node.js installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kavinjr1612/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development servers:**
   This command starts both the Vite frontend server and the local Express server for PDF generation using `concurrently`.
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` in your browser.

## ☁️ Deployment (Vercel)

This project is optimized for deployment on Vercel with serverless functions handling the PDF generation. 

1. Import the repository into your Vercel Dashboard.
2. Vercel will automatically detect the Vite preset.
3. The serverless function relies on the `engines: { node: "24.x" }` configuration in `package.json` to properly execute the Chromium binary.
4. Click **Deploy**.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Kavinjr1612/resume-builder/issues).

## 📝 License

This project is built for students worldwide. Use it, share it, and land your dream job!
