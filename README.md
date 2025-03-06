# 🎨 Gicheva Art AI

Welcome to Gicheva Art AI - an elegant and modern platform for showcasing and selling fine art online. This platform combines the beauty of art with the power of modern web technologies to create a seamless experience for both artists and art enthusiasts.

![Gicheva Art Banner](https://via.placeholder.com/800x200?text=Gicheva+Art+AI)

## ✨ Features

- **🖼️ Dynamic Art Gallery**
  - Responsive image grid layout
  - Advanced zoom and pan capabilities
  - Virtual exhibition spaces

- **🛍️ E-commerce Integration**
  - Secure payment processing with Stripe
  - Shopping cart functionality
  - Order management system
  - Automated email notifications

- **🎯 Artist Dashboard**
  - Artwork management
  - Sales analytics
  - Order tracking
  - Inventory management

- **🔍 Advanced Search**
  - Filter by style, medium, size
  - Price range selection
  - Category browsing
  - Tag-based search

- **📱 Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Touch-friendly interface

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend
- **Flask** - Python web framework
- **MongoDB** - Database
- **Pillow** - Image processing
- **Stripe** - Payment processing

### Infrastructure
- **Docker** - Containerization
- **GitHub Actions** - CI/CD
- **MongoDB Atlas** - Database hosting

## 🛠️ Getting Started

### Prerequisites

```bash
Node.js >= 18.x
Python >= 3.11
Docker
MongoDB
```

### Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mar0der/GichevaArtAI.git
   cd GichevaArtAI
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env.local
   # Configure your environment variables
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env
   # Configure your environment variables
   python run.py
   ```

4. **Docker Setup**
   ```bash
   docker compose up -d
   ```

## 📁 Project Structure

```
GichevaArtAI/
├── frontend/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── gallery/        # Gallery pages
│   ├── components/         # React components
│   ├── lib/                # Utilities and helpers
│   └── types/             # TypeScript definitions
│
├── backend/
│   ├── api/               # API routes
│   ├── models/            # Database models
│   ├── services/          # Business logic
│   └── utils/             # Helper functions
│
└── docker/               # Docker configuration
    ├── frontend/         # Frontend Docker setup
    └── backend/          # Backend Docker setup
```

## 🔧 Configuration

Create the following environment files:

`frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
```

`backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/gicheva_art
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
```

## 🚀 Deployment

1. **Build Docker Images**
   ```bash
   docker compose build
   ```

2. **Run in Production**
   ```bash
   docker compose -f docker-compose.prod.yml up -d
   ```

## 📝 API Documentation

API documentation is available at `/api/docs` when running the backend server.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the robust database solution
- Stripe for secure payment processing
- All contributors who help improve this project

## 📞 Support

For support, email support@gichevaart.ai or open an issue in the repository.

---

Made with ❤️ for artists and art lovers