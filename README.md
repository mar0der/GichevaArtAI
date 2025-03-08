# GichevaArtAI

A containerized artist website solution for showcasing and selling paintings online.

## Tech Stack

- **Frontend**: Next.js with React and Tailwind CSS
- **Backend API**: Flask (Python)
- **Database**: MongoDB
- **Image Processing**: Pillow (Python)
- **Payment Processing**: Stripe
- **Deployment**: Docker container

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your system

### Running the Application

1. Clone this repository
2. Navigate to the project directory
3. Run the following command to start the application:

```bash
docker-compose up
```

4. Access the application at http://localhost:3000

## Features

- Art gallery showcase
- E-commerce functionality for selling paintings
- Secure payment processing with Stripe
- Admin interface for managing paintings and orders
- Responsive design for all devices

## Development

### Frontend Development

The frontend is built with Next.js and is located in the `frontend` directory.

```bash
cd frontend
npm install
npm run dev
```

### Backend Development

The backend is built with Flask and is located in the `backend` directory.

```bash
cd backend
pip install -r requirements.txt
python app.py
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.