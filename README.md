# Gicheva Art AI

A modern art showcase and e-commerce platform built with Next.js, Flask, and MongoDB, designed for showcasing and selling paintings online.

## Tech Stack

- **Frontend**: Next.js 14 with React and Tailwind CSS
- **Backend API**: Flask (Python)
- **Database**: MongoDB
- **Image Processing**: Pillow (Python)
- **Payment Processing**: Stripe
- **Deployment**: Docker

## Features

- 🎨 Art Gallery Showcase
- 🛍️ E-commerce Functionality
- 🖼️ Advanced Image Processing
- 💳 Secure Payment Integration
- 📱 Responsive Design
- 🔍 SEO Optimization
- 🔐 Admin Dashboard

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Python 3.11 or later
- Docker
- MongoDB

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mar0der/GichevaArtAI.git
   cd GichevaArtAI
   ```

2. Install dependencies:
   ```bash
   # Frontend dependencies
   cd frontend
   npm install

   # Backend dependencies
   cd ../backend
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   ```

4. Start development servers:
   ```bash
   # Frontend (in frontend directory)
   npm run dev

   # Backend (in backend directory)
   python run.py
   ```

### Docker Deployment

```bash
docker compose up -d
```

## Project Structure

```
├── frontend/                # Next.js frontend application
│   ├── app/                 # App router pages and layouts
│   ├── components/          # React components
│   ├── lib/                 # Utility functions and helpers
│   └── types/               # TypeScript type definitions
├── backend/                 # Flask backend application
│   ├── api/                 # API routes and controllers
│   ├── models/              # Database models
│   └── services/            # Business logic services
└── docker/                  # Docker configuration files
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.