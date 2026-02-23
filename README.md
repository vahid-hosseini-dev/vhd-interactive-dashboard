# Interactive Dashboard in Online Shop

## Project Overview

This project is an interactive dashboard built with **Next.js**, **React**, **Tailwind CSS**, and **TypeScript**.  
It includes a **Login page** in the initial version and will include a registration page in the future.

**Mock User for login:**

- Email: `emilys`
- Password: `emilyspass`

Form validation is implemented using **Zod**, and forms are handled via **React Hook Form**.

After login, the user receives an **access token** and a **refresh token** with scheduled renewal and is redirected to the **Dashboard page**.

---

## Features

### Dashboard

- Displays lists of users and products.
- Settings button is planned for future development.
- Authorization middleware protects the dashboard and product pages.
- If the user is not logged in, they are redirected to the login page.

### Products Page

- Includes a **multi-select dropdown** with multiple selection, search, grouping, and select all/none functionality.
- Users can filter and select products easily.

### Games Page

- Search and filter handled **server-side (SSR)** to ensure fresh data.

### Header

- After login, header updates: shows user info, logout button, and adds dashboard link to the main menu.

### Responsiveness

- Simple responsive layout with hamburger menu for mobile devices.

---

## Libraries Used

- **Chakra UI** – for UI components
- **Headless UI** – dropdowns and advanced selects
- **React Hook Form** – form management
- **Zod** – form validation
- **NooKies** – cookie management

---

## Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **TypeScript**

---

## Links

- [Games API (RAWG)](https://api.rawg.io/docs/#tag/games) – for fetching game data
- [Dummy Users & Products API](https://dummyjson.com/) – for fetching users and products

---

## Future Improvements

- Add registration page.
- Extend settings and user management.
- Add more advanced dashboard features.

# داشبورد تعاملی در فروشگاه آنلاین

## معرفی پروژه

این پروژه یک **داشبورد تعاملی** است که با **Next.js**، **React**، **Tailwind CSS** و **TypeScript** ساخته شده است.  
نسخه اولیه شامل **صفحه لاگین** است و صفحه ثبت‌نام در آینده اضافه خواهد شد.

**کاربر ماک برای ورود:**

- ایمیل: `emilys`
- رمز عبور: `emilyspass`

اعتبارسنجی فرم با **Zod** انجام شده و فرم‌ها با **React Hook Form** مدیریت می‌شوند.

پس از لاگین، کاربر **توکن دسترسی** و **توکن رفرش با زمان‌بندی شده** دریافت کرده و به صفحه **داشبورد** هدایت می‌شود.

---

## امکانات

### داشبورد

- نمایش لیست کاربران و محصولات
- دکمه تنظیمات در آینده توسعه داده خواهد شد
- صفحات داشبورد و محصولات با **Middleware** محافظت می‌شوند
- اگر کاربر لاگین نکرده باشد، به صفحه لاگین هدایت می‌شود

### صفحه محصولات

- شامل **مالتی سلکت دراپ‌دان** با قابلیت انتخاب چندتایی، جستجو، گروه‌بندی و انتخاب همه/هیچ
- کاربر می‌تواند به راحتی محصولات را فیلتر و انتخاب کند

### صفحه گیمز

- جستجو و فیلتر به صورت **Server-side (SSR)** انجام شده تا داده‌ها تازه باشند

### هدر

- پس از لاگین، هدر تغییر می‌کند: نمایش اطلاعات کاربر، دکمه خروج و اضافه شدن داشبورد به منوی اصلی

### ریسپانسیو

- طراحی ریسپانسیو ساده با منوی همبرگر برای موبایل

---

## کتابخانه‌های استفاده شده

- **Chakra UI** – برای کامپوننت‌های UI
- **React Hook Form** – مدیریت فرم
- **Zod** – اعتبارسنجی فرم
- **NoKis** – مدیریت کوکی‌ها
- **Headless UI** – دراپ‌دان‌ها و سلکت پیشرفته
- **React Icons / Lucide** – آیکن‌ها

---

## تکنولوژی‌ها

- **Next.js**
- **React**
- **Tailwind CSS**
- **TypeScript**

---

## لینک‌ها

- [Games API (RAWG)](https://api.rawg.io/docs/#tag/games) – برای دریافت اطلاعات بازی‌ها
- [Dummy Users & Products API](https://dummyjson.com/) – برای دریافت کاربران و محصولات

---

## توسعه‌های آینده

- افزودن صفحه ثبت‌نام
- توسعه بخش تنظیمات و مدیریت کاربران
- افزودن امکانات پیشرفته‌تر داشبورد
