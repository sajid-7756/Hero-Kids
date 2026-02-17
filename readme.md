# 🧸 Hero Kids - Premium E-commerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-blueviolet?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)](#)

A modern, high-performance e-commerce solution for children's toys and accessories, built with a focus on speed, security, and premium user experience.

---

## 🔐 Custom Authentication System

This project features a **fully custom authentication engine** built from the ground up to ensure maximum security and flexibility without reliance on third-party providers.

- **JWT-Based Security**: Secure session management using JSON Web Tokens (JOSE) stored in HTTP-only cookies.
- **Bcrypt Hash Protection**: Industry-standard password hashing for user data protection.
- **Server-Side Validation**: Robust API routes for login, registration, and session verification.
- **Role-Based Access**: Specialized middleware to handle User and Admin permissions.
- **Performance Optimized**: Lightweight implementation designed specifically for Next.js App Router.

---

## 🚀 Key Features

- 🛍️ **Dynamic Catalog** - High-speed product browsing and filtering.
- 🛒 **Intuitive Cart** - Seamless shopping experience with persistent state.
- 📄 **Order Management** - Automated invoice generation and history.
- 🎨 **Modern UI/UX** - Responsive, glassmorphic design powered by Tailwind 4.
- ⚡ **Optimized Performance** - Leveraging Next.js 16 Server Components and SWR.

---

## 🛠️ Technology Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) & [SWR](https://swr.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🏗️ Getting Started

### Prerequisites
- Node.js (Latest)
- Bun or NPM
- MongoDB Connection String

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

4. Run the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## ⚖️ License

Proprietary to Hero Kidzz. All rights reserved.
