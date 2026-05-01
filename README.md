# 🎓 CareerSync — A Digital Platform For Campus Recruitment

![CareerSync Banner](https://img.shields.io/badge/CareerSync-Campus%20Recruitment-2563eb?style=for-the-badge&logo=graduation-cap)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47a248?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06b6d4?style=for-the-badge&logo=tailwindcss)

> A full-stack web application that digitizes and streamlines the entire campus placement process for students, companies, and Training & Placement Officers (TPO).

---

## 🌟 Live Demo

🌐 **Frontend:** [careersync-delta-ecru.vercel.app](https://careersync-delta-ecru.vercel.app)
⚙️ **Backend:** [careersync-backend-b96l.onrender.com](https://careersync-backend-b96l.onrender.com)

---

## 👥 User Roles

| Role | Description |
|------|-------------|
| 🎓 **Student** | Browse jobs, apply, track applications, chat with companies |
| 🏢 **Company** | Post jobs, manage applicants, schedule interviews |
| 🛡️ **Admin (TPO)** | Approve companies/jobs, send announcements, view reports |

---

## ✨ Features

### 🎓 Student Features
- 📊 Personal dashboard with placement statistics
- 💼 Browse and apply for jobs with advanced filters
- ⭐ Save/bookmark interesting jobs
- 📋 Track application status in real-time
- 🗓 View upcoming interviews and drive calendar
- 💬 Real-time chat with company HRs
- 🔔 In-app + email notifications
- 📄 Upload and manage resume
- 🖼️ Profile photo upload
- 📢 View announcements from TPO

### 🏢 Company Features
- 📝 Post job openings with eligibility criteria
- 👥 View and manage applicants
- 📅 Schedule interviews with email notifications
- 💬 Real-time chat with students
- 📊 Track hiring statistics

### 🛡️ Admin (TPO) Features
- ✅ Approve/reject company registrations
- ✅ Approve/reject job postings
- 📢 Send bulk announcements (email + in-app)
- 📊 Advanced placement analytics with 6+ charts
- 🗓 Drive calendar overview
- 👨‍🎓 Manage all students and companies
- 📈 Branch-wise placement reports

### 🔧 Technical Features
- 🔑 JWT Authentication with role-based access
- 🔒 Forgot password with email reset link
- 💬 Real-time chat with Socket.io
- 📧 Beautiful HTML email notifications
- 📱 Fully mobile responsive
- 🔔 Real-time in-app notifications
- 📅 Interactive drive calendar
- 📊 Analytics dashboard with Recharts

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 + Vite | Frontend framework |
| Tailwind CSS | Styling |
| React Router v6 | Navigation |
| React Query | Data fetching & caching |
| Socket.io Client | Real-time chat |
| Recharts | Analytics charts |
| React Big Calendar | Drive calendar |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express | Server framework |
| MongoDB + Mongoose | Database |
| JWT + bcryptjs | Authentication |
| Socket.io | Real-time communication |
| Nodemailer | Email notifications |
| Multer | File uploads |
| Cloudinary | Cloud file storage |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free)
- Gmail account (for email notifications)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Mohammed-Omer-S/careersync.git
cd careersync
```

#### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

#### 3. Configure environment variables
```bash
cd server
cp .env.example .env
```

Fill in your `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:5173
```

#### 4. Start the development server
```bash
# From root directory — starts both frontend and backend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 📡 API Endpoints

### Auth
```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me
POST   /api/auth/forgot-password
PUT    /api/auth/reset-password/:token
PUT    /api/auth/change-password
```

### Jobs
```
GET    /api/jobs              # Get all approved jobs
POST   /api/jobs              # Post a job (company)
GET    /api/jobs/:id          # Get job details
PUT    /api/jobs/:id          # Update job (company)
DELETE /api/jobs/:id          # Delete job (company)
```

### Applications
```
POST   /api/applications/:jobId     # Apply for job (student)
GET    /api/applications/my         # My applications (student)
GET    /api/applications/job/:jobId # Job applicants (company)
PUT    /api/applications/:id/status # Update status (company)
PUT    /api/applications/:id/withdraw # Withdraw (student)
```

### Admin
```
GET    /api/admin/stats
GET    /api/admin/students
GET    /api/admin/companies
GET    /api/admin/reports
PUT    /api/admin/companies/:id/approve
PUT    /api/admin/jobs/:id/approve
```

---

## 📁 Project Structure
```
careersync/
├── client/                    # React Frontend
│   └── src/
│       ├── components/        # Reusable components
│       ├── pages/             # Page components
│       │   ├── auth/          # Login, Register, ForgotPassword
│       │   ├── student/       # Student pages
│       │   ├── company/       # Company pages
│       │   └── admin/         # Admin pages
│       ├── context/           # AuthContext, SocketContext
│       └── services/          # API service files
│
└── server/                    # Node.js Backend
    ├── config/                # Database & Cloudinary config
    ├── controllers/           # Business logic
    ├── middleware/            # Auth, error handling
    ├── models/                # Mongoose schemas
    ├── routes/                # Express routes
    └── utils/                 # Helper functions
```

---

## 🔐 Creating Admin Account

Use Postman or Thunder Client:
```http
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Admin User",
  "email": "admin@careersync.com",
  "password": "admin123",
  "role": "admin"
}
```

---

## 👨‍💻 Author

**Mohammed Omer**
- GitHub: [@Mohammed-Omer-S](https://github.com/Mohammed-Omer-S)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Show your support

Give a ⭐ if this project helped you!