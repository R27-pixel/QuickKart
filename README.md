# QuickKart – A Lightweight E-Commerce Web App for Local Sellers

QuickKart is a lightweight, responsive e-commerce web application designed for local vendors and students who want a simple, customizable solution to sell products online. The app supports both buyers and sellers, offering features like product browsing, seller dashboards, bookmarking, admin control, and more.

---

## 🌟 Features

- 🔐 **Authentication** – Signup, Login, JWT-based auth, Forgot Password
- 🛍️ **Product Management (CRUD)** – Add, edit, delete products (sellers only)
- 🔎 **Filters & Sorting** – Filter by category, price, and availability; sort by price, rating, date
- ❤️ **Bookmarks** – Buyers can bookmark favorite products
- 🧑‍💼 **User Profiles** – Bio, contact info, profile picture
- 📸 **Image Uploads** – Add images to products using Multer
- 🏷️ **Tags** – Tag products (e.g., "Urgent", "Electronics")
- 🔔 **Notifications** – Toasts and alerts for actions
- 🌙 **Dark Mode** – Toggle between light and dark themes
- 📱 **Responsive Design** – Mobile-first layout using TailwindCSS
- 🔐 **Route Protection** – Auth-required for seller/product/admin routes
- ✅ **Confirmation Dialogs** – Edits and deletes require confirmation
- 🔍 **Live Search Suggestions** – Debounced autocomplete search
- 🧾 **Multi-step Forms** – Seamless product upload with preview
- 🛠️ **Admin Panel** – Remove spam users/products
- 🌐 **Multi-language Support** – UI available in multiple languages (coming soon)

---

## 👥 Target Users

- Local vendors/sellers with no dedicated platform
- Students looking to build or sell projects/items
- Hobbyists selling handmade items like crafts or food

---

## 🧭 User Journey

### Buyer
1. Land on homepage
2. Search, filter, and explore products
3. View details, bookmark, or contact seller

### Seller
1. Sign up and create a profile
2. Add product using multi-step form
3. Manage products and view stats/bookmarks

### Admin
1. Login to access dashboard
2. Remove flagged users/products
