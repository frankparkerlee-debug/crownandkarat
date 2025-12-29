# Crown and Karat

Luxury watch and jewelry acquisition platform.

## Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Setup

1. Clone the repo
2. Install dependencies:

```bash
cd client && npm install
cd ../server && npm install
```

3. Configure environment variables:

```bash
cp server/.env.example server/.env
# Edit server/.env with your database and email credentials
```

4. Start the development servers:

```bash
# Terminal 1 - Client
cd client && npm run dev

# Terminal 2 - Server
cd server && npm run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| GMAIL_USER | Gmail address for sending emails |
| GMAIL_APP_PASSWORD | Gmail app password |
| CLIENT_URL | Frontend URL (default: http://localhost:5173) |
| PORT | Server port (default: 3001) |

## Project Structure

```
/
├── client/          # React + Vite frontend
├── server/          # Express backend
└── README.md
```

## Render Deployment

### Client (Static Site)
- Root directory: `client`
- Build command: `npm run build`
- Publish directory: `dist`

### Server (Web Service)
- Root directory: `server`
- Build command: `npm install`
- Start command: `node index.js`

### Database
- PostgreSQL (add as Render service and connect via DATABASE_URL)
