# Script Generation Project

A modern web application for AI-powered script generation, built with Next.js frontend and Python AI backend.

## Architecture

This project uses a hybrid architecture:

- **Frontend & Main Backend**: Next.js 15.5.2 with App Router, TypeScript, and shadcn/ui
- **AI Backend**: Separate Python service for AI/ML processing and script generation

## Features

### Frontend (Next.js)

- ⚡ **Next.js 15.5.2** with App Router
- 🎨 **shadcn/ui** components with modern design
- 🎯 **Tailwind CSS v4** for styling
- 📱 **TypeScript** for type safety
- 🔧 **ESLint** for code quality
- 🎭 **Lucide React** for icons
- 🚀 **Turbopack** for faster development builds
- 🔐 **NextAuth.js** for authentication
- 📊 **Redux Toolkit** for state management
- 🗄️ **Prisma** for database management

### AI Backend (Python)

- 🤖 **AI/ML Processing** for script generation
- 🔗 **API Integration** with the Next.js frontend
- 📝 **Script Generation** capabilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Python 3.8+ (for AI backend)
- Git

### Frontend Setup (Next.js)

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd script-generation
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

### AI Backend Setup (Python)

1. **Navigate to the Python backend directory**

   ```bash
   cd python-backend  # or wherever your Python backend is located
   ```

2. **Create a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Python backend**

   ```bash
   python app.py
   # or
   uvicorn main:app --reload
   ```

The Python backend should run on a different port (e.g., http://localhost:8000) and communicate with the Next.js frontend via API calls.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── dashboard/         # Dashboard pages
│   ├── login/             # Login page
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Application sidebar
│   ├── data-table.tsx    # Data table component
│   ├── login-form.tsx    # Login form
│   └── ...               # Other components
├── lib/                  # Utility functions
│   ├── auth.ts           # Authentication utilities
│   ├── db.ts             # Database utilities
│   └── utils.ts          # General utilities
├── hooks/                # Custom React hooks
├── redux/                # Redux store and slices
├── prisma/               # Database schema
├── python-backend/       # Python AI backend (separate service)
│   ├── app.py            # Main Python application
│   ├── requirements.txt  # Python dependencies
│   └── ...               # AI/ML modules
├── components.json       # shadcn/ui configuration
└── public/               # Static assets
```

## Development

### Frontend Development

This project is pre-configured with shadcn/ui. To add new components:

```bash
npx shadcn@latest add <component-name>
```

For example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Available Scripts

**Frontend (Next.js):**

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Backend (Python):**

- `python app.py` - Start the Python AI backend
- `uvicorn main:app --reload` - Start with auto-reload for development

### API Integration

The Next.js frontend communicates with the Python AI backend through API calls. Make sure both services are running:

- Frontend: http://localhost:3000
- AI Backend: http://localhost:8000 (or your configured port)

## Features Overview

- **Script Generation**: AI-powered script creation using the Python backend
- **User Authentication**: Secure login and user management
- **Dashboard**: User-friendly interface for managing scripts
- **Data Management**: Database integration with Prisma
- **State Management**: Redux for application state
- **Modern UI**: Beautiful components with shadcn/ui and Tailwind CSS

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Browse and copy components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about utility-first CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript
- [Prisma Documentation](https://www.prisma.io/docs) - Database toolkit
- [NextAuth.js Documentation](https://next-auth.js.org/) - Authentication for Next.js

## Deployment

### Frontend Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Backend Deployment

Deploy your Python AI backend to platforms like:

- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [Heroku](https://heroku.com/)
- [AWS](https://aws.amazon.com/)
- [Google Cloud](https://cloud.google.com/)

Make sure to update the API endpoints in your frontend configuration to point to your deployed backend URL.
