# English Teacher Website

A modern, professional website for an English teacher built with Django REST Framework (backend) and React (frontend).

## Features

- 🏠 **Homepage**: Beautiful landing page with hero section and features
- 📝 **Blog**: Display blog posts with modern card design
- 📞 **Contact Form**: Registration form for students (first name, last name, phone number, description)
- 🎨 **Modern Design**: Coffee/brown theme with professional and elegant styling
- 📱 **Responsive**: Works perfectly on all devices

## Project Structure

```
englishprofile/
├── englishbackend/     # Django Backend
│   ├── api/           # API app with models and views
│   └── manage.py
└── englishfront/      # React Frontend
    ├── src/
    │   ├── components/  # React components
    │   └── App.js
    └── package.json
```

## Setup Instructions

### Backend Setup (Django)

1. Navigate to the backend directory:
```bash
cd englishbackend
```

2. Create a virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

5. Create a superuser (optional, for admin panel):
```bash
python3 manage.py createsuperuser
```

6. Start the development server:
```bash
python3 manage.py runserver
```

The backend will be available at `http://localhost:8000`

### Frontend Setup (React)

1. Navigate to the frontend directory:
```bash
cd englishfront
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Contact Registration
- **POST** `/api/contacts/` - Submit contact information
  - Body: `{ "first_name": "...", "last_name": "...", "phone_number": "...", "description": "..." }`

### Blog Posts
- **GET** `/api/blog/` - Get all blog posts
- **GET** `/api/blog/{id}/` - Get a specific blog post
- **POST** `/api/blog/` - Create a new blog post (admin only)
- **PUT/PATCH** `/api/blog/{id}/` - Update a blog post (admin only)
- **DELETE** `/api/blog/{id}/` - Delete a blog post (admin only)

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/` to:
- Manage contact submissions
- Create and manage blog posts

## Technologies Used

### Backend
- Django 4.2.7
- Django REST Framework
- django-cors-headers

### Frontend
- React 19.2.0
- React Router DOM
- Axios
- CSS3 (Custom styling with coffee/brown theme)

## Design Theme

The website features a professional coffee/brown color scheme:
- Primary: #6F4E37 (Dark Brown)
- Secondary: #8B6F47 (Medium Brown)
- Accent: #F5E6D3 (Cream)
- Background: #F5E6D3 (Light Cream)

## Development Notes

- CORS is configured to allow requests from `http://localhost:3000`
- The API uses Django REST Framework with ViewSets
- All API endpoints are publicly accessible (configure authentication for production)
