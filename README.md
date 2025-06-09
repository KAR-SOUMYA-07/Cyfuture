<<<<<<< HEAD
# Cyfuture Fiscal Flow

A comprehensive financial management system with invoice processing, GST reconciliation, and cashflow forecasting capabilities.

## Features

- User Authentication and Authorization
- Invoice Processing with OCR
- GST Reconciliation
- Cashflow Forecasting
- Modern React Frontend with TypeScript
- FastAPI Backend
- SQLite Database (configurable for production)

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI Components
- Axios for API calls
- React Query for data fetching

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Python 3.8+
- OCR Processing (Tesseract)

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn
- Tesseract OCR (for invoice processing)
- Git

### Installing Prerequisites

#### Windows
1. Install Python from [python.org](https://www.python.org/downloads/)
2. Install Node.js from [nodejs.org](https://nodejs.org/)
3. Install Tesseract OCR:
   ```bash
   winget install UB-Mannheim.TesseractOCR
   ```
   or download from [UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki)

#### Linux (Ubuntu/Debian)
```bash
# Install Python
sudo apt update
sudo apt install python3.8 python3.8-venv

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Tesseract OCR
sudo apt install tesseract-ocr
```

#### macOS
```bash
# Using Homebrew
brew install python@3.8
brew install node@18
brew install tesseract
```

## Installation

### Backend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd cyfuture
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/macOS
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
# Windows
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

5. Edit `.env` file with your configuration:
```env
DATABASE_URL=sqlite:///./cyfuture.db
SECRET_KEY=your-secret-key
ENVIRONMENT=development
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd fiscal-flow-ai-suite-main
```

2. Install dependencies:
```bash
npm install
# or if using yarn
yarn install
```

3. Set up environment variables:
```bash
# Windows
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

4. Edit `.env` file with your configuration:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Cyfuture Fiscal Flow
```

## Development

### Running Backend
```bash
# Make sure you're in the project root directory
uvicorn main:app --reload --port 8000
```

### Running Frontend
```bash
# Make sure you're in the frontend directory
cd fiscal-flow-ai-suite-main
npm run dev
# or if using yarn
yarn dev
```

## Production Deployment

### Backend Deployment

1. Update database configuration in `config.py` for production
2. Set up environment variables
3. Use a production-grade server (e.g., Gunicorn):
```bash
# Install gunicorn
pip install gunicorn

# Run with multiple workers
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Frontend Deployment

1. Build the frontend:
```bash
cd fiscal-flow-ai-suite-main
npm run build
# or if using yarn
yarn build
```

2. Serve the built files using a web server (e.g., Nginx)

## Docker Deployment

### Prerequisites
- Docker
- Docker Compose

### Build and run using Docker Compose:
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL=sqlite:///./cyfuture.db
SECRET_KEY=your-secret-key
ENVIRONMENT=production
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Cyfuture Fiscal Flow
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Check if another process is using port 8000 or 8080
   - Kill the process or change the port in configuration

2. **Tesseract OCR not found**
   - Verify Tesseract installation
   - Add Tesseract to system PATH
   - Restart terminal/IDE

3. **Database connection issues**
   - Check DATABASE_URL in .env
   - Ensure database file permissions
   - Verify SQLite installation

4. **Node modules issues**
   - Delete node_modules and package-lock.json
   - Run `npm install` again

## API Documentation

API documentation is available at `/docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

=======
# Cyfuture Fiscal Flow

A comprehensive financial management system with invoice processing, GST reconciliation, and cashflow forecasting capabilities.

## Features

- User Authentication and Authorization
- Invoice Processing with OCR
- GST Reconciliation
- Cashflow Forecasting
- Modern React Frontend with TypeScript
- FastAPI Backend
- SQLite Database (configurable for production)

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI Components
- Axios for API calls
- React Query for data fetching

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Python 3.8+
- OCR Processing (Tesseract)

## Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn
- Tesseract OCR (for invoice processing)
- Git

### Installing Prerequisites

#### Windows
1. Install Python from [python.org](https://www.python.org/downloads/)
2. Install Node.js from [nodejs.org](https://nodejs.org/)
3. Install Tesseract OCR:
   ```bash
   winget install UB-Mannheim.TesseractOCR
   ```
   or download from [UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki)

#### Linux (Ubuntu/Debian)
```bash
# Install Python
sudo apt update
sudo apt install python3.8 python3.8-venv

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Tesseract OCR
sudo apt install tesseract-ocr
```

#### macOS
```bash
# Using Homebrew
brew install python@3.8
brew install node@18
brew install tesseract
```

## Installation

### Backend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd cyfuture
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/macOS
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
# Windows
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

5. Edit `.env` file with your configuration:
```env
DATABASE_URL=sqlite:///./cyfuture.db
SECRET_KEY=your-secret-key
ENVIRONMENT=development
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd fiscal-flow-ai-suite-main
```

2. Install dependencies:
```bash
npm install
# or if using yarn
yarn install
```

3. Set up environment variables:
```bash
# Windows
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

4. Edit `.env` file with your configuration:
```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Cyfuture Fiscal Flow
```

## Development

### Running Backend
```bash
# Make sure you're in the project root directory
uvicorn main:app --reload --port 8000
```

### Running Frontend
```bash
# Make sure you're in the frontend directory
cd fiscal-flow-ai-suite-main
npm run dev
# or if using yarn
yarn dev
```

## Production Deployment

### Backend Deployment

1. Update database configuration in `config.py` for production
2. Set up environment variables
3. Use a production-grade server (e.g., Gunicorn):
```bash
# Install gunicorn
pip install gunicorn

# Run with multiple workers
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Frontend Deployment

1. Build the frontend:
```bash
cd fiscal-flow-ai-suite-main
npm run build
# or if using yarn
yarn build
```

2. Serve the built files using a web server (e.g., Nginx)

## Docker Deployment

### Prerequisites
- Docker
- Docker Compose

### Build and run using Docker Compose:
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL=sqlite:///./cyfuture.db
SECRET_KEY=your-secret-key
ENVIRONMENT=production
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Cyfuture Fiscal Flow
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Check if another process is using port 8000 or 8080
   - Kill the process or change the port in configuration

2. **Tesseract OCR not found**
   - Verify Tesseract installation
   - Add Tesseract to system PATH
   - Restart terminal/IDE

3. **Database connection issues**
   - Check DATABASE_URL in .env
   - Ensure database file permissions
   - Verify SQLite installation

4. **Node modules issues**
   - Delete node_modules and package-lock.json
   - Run `npm install` again

## API Documentation

API documentation is available at `/docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

>>>>>>> 968c45045fc6699c7c6a43cc961396802e7caec8
This project is licensed under the MIT License - see the LICENSE file for details. 