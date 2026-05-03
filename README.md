# CareerSync — A Digital Platform For Campus Recruitment

CareerSync is a full-stack web application that I built to simplify and digitize the campus placement process. It connects students, companies, and Training & Placement Officers (TPO) in one platform — making the entire recruitment process faster, transparent, and easier to manage.

---

## Why I Built This

Campus placement in most colleges is still managed through spreadsheets, WhatsApp groups, and manual emails. Students miss deadlines, companies struggle to manage applicants, and TPOs spend hours on coordination. CareerSync solves all of this in one place.

---

## Live Demo

🌐 **Live Site:** [careersync-delta-ecru.vercel.app](https://careersync-delta-ecru.vercel.app)

> **Note:** The backend is hosted on Render's free plan, so the first load might take 30-50 seconds to wake up. After that it works normally.

## What It Can Do

There are 3 types of users in CareerSync:

### Students
- Register and build their placement profile
- Browse job openings and apply with one click
- Track their application status in real time
- Save jobs they are interested in
- View upcoming placement drives on a calendar
- Chat directly with company HRs
- Get email and in-app notifications for every update
- Upload resume and profile photo

### Companies
- Register and post job openings with eligibility criteria
- View and manage student applications
- Schedule interviews and notify students automatically
- Chat with students directly
- Track their hiring statistics

### Admin / TPO
- Approve or reject company registrations and job postings
- Send announcements to all students or companies
- View detailed placement reports with charts
- Monitor all drives on a calendar
- Manage students and companies from one dashboard

---

## Tech Stack

**Frontend**
- React 18 with Vite
- Tailwind CSS
- React Router v6
- React Query for data fetching
- Socket.io for real-time chat
- Recharts for analytics
- React Big Calendar for drive schedule

**Backend**
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time communication
- Nodemailer for emails
- Multer for file uploads

**Deployed on**
- Frontend — Vercel
- Backend — Render
- Database — MongoDB Atlas

---

## Getting Started

### Requirements
- Node.js v18 or higher
- MongoDB Atlas account
- Gmail account for email notifications

### Setup

```bash
# Clone the repo
git clone https://github.com/Mohammed-Omer-S/careersync.git
cd careersync

# Install all dependencies
npm install
cd server && npm install
cd ../client && npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

Start the project:

```bash
# From root folder — runs both frontend and backend
npm run dev
```

- Frontend runs on: http://localhost:5173
- Backend runs on: http://localhost:5000

---

## Creating Your Own Admin Account

If you want to create a fresh admin account use Postman or Thunder Client:

POST https://careersync-backend-b96l.onrender.com/api/auth/register
{
"name": "Your Name",
"email": "your_email@example.com",
"password": "your_password",
"role": "admin"
}

---

## Project Structure

**Client (React Frontend)**
- `src/components` — Navbar, Avatar, Loader and other reusable components
- `src/context` — Auth context and Socket context
- `src/pages/auth` — Login, Register, Forgot Password
- `src/pages/student` — Dashboard, Jobs, Applications, Profile
- `src/pages/company` — Dashboard, Post Job, Applicants
- `src/pages/admin` — Dashboard, Reports, Manage Users
- `src/services` — API call functions

**Server (Node.js Backend)**
- `config` — Database and Cloudinary configuration
- `controllers` — Business logic for all routes
- `middleware` — Authentication and error handling
- `models` — MongoDB schemas
- `routes` — Express API routes
- `utils` — Email, notifications and helper functions

---

## Author

**Mohammed Omer**
GitHub: [@Mohammed-Omer-S](https://github.com/Mohammed-Omer-S)

---

## License

This project is open source under the [MIT License](LICENSE).

---

## ⭐ Show your support

Give a ⭐ if this project helped you!