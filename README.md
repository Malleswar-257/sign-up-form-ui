# sign-up-form-ui

A modern and responsive sign-up form UI designed for user onboarding with clean layout, essential input fields, and easy integration with authentication backend services.

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: FastAPI + SQLAlchemy
- **Design**: Figma ([View Design](https://www.figma.com/design/29HkCjsfiXv6gTPjrXmYwy/Sign-Up-Form--V1---Community-?node-id=0-1&t=PmHlbdkFLCNiw7BE-1))

## Project Structure

```
sign-up-form-ui/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- Responsive sign-up form with essential input fields
- Easy integration with authentication backend services
- Password reset functionality
- JWT-based authentication

## API Endpoints

- `POST /api/signup` - Create a new user account
- `POST /api/login` - Authenticate an existing user
- `POST /api/password_reset` - Reset a user's password

## License

MIT
