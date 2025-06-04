# Airdrop Hub

Airdrop Hub is a Next.js application that allows users to view current airdrops and provides an admin dashboard for managing airdrop and notification data.

## Features

- **Public Homepage**: Lists current airdrops.
- **Airdrop Detail Page**: Displays detailed information about each airdrop.
- **Notifications Section**: Shows notifications to users.
- **Admin Dashboard**: 
  - Basic password login.
  - Add, edit, and delete airdrops.
  - Add, edit, and delete notifications.
  
## Project Structure

```
airdrop-hub
├── app
│   ├── admin
│   ├── airdrop
│   ├── layout.tsx
│   └── page.tsx
├── components
├── data
├── styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Getting Started

To run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and go to `http://localhost:3000`.

## Deployment

To deploy to Netlify:

1. Push your code to a Git repository (e.g., GitHub).
2. Go to Netlify and create a new site from Git.
3. Connect your repository and set the build command to `npm run build` and the publish directory to `out` (if using static export).
4. Click "Deploy site" to publish your application.

## License

This project is open-source and available under the [MIT License](LICENSE).