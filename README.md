# Net-soft Communications Website

Official website for Net-soft Communications - Independent third-party cable, internet, and streaming assistance platform.

## 🚀 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment
- **URL**: https://netsoftcommunication.com
- **Triggers**: Every push to the `main` branch automatically deploys the latest version
- **Platform**: GitHub Pages with custom domain

### Manual Deployment
To manually trigger a deployment:
1. Go to the "Actions" tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## 🛠️ Development

### Prerequisites
- Node.js 20 or higher
- npm

### Installation
```sh
npm install
```

### Development Server
```sh
npm run dev
```
The site will be available at http://localhost:8080

### Build for Production
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## 📦 Tech Stack
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Routing**: React Router v6

## 🌐 Custom Domain Setup

The website is configured for the custom domain `netsoftcommunication.com`:

1. **CNAME Record**: A CNAME file is included in `/public/CNAME`
2. **DNS Configuration**: Ensure your domain's DNS has these records:
   - CNAME: `www` → `nettsoft.github.io`
   - A Records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 📝 Making Changes

1. Make your changes locally
2. Commit and push to the `main` branch:
   ```sh
   git add .
   git commit -m "Your change description"
   git push origin main
   ```
3. GitHub Actions will automatically build and deploy your changes
4. Changes will be live at https://netsoftcommunication.com in 2-3 minutes

## 🎨 Brand Guidelines
- **Brand Name**: Net-soft Communications
- **Primary Colors**: Blue (#0EA5E9) to Purple (#8B5CF6) gradient
- **Phone**: 1-800-NETSOFT (1-800-638-7638)
- **Email**: support@netsoftcomm.com

## 📄 License
All rights reserved © 2026 Net-soft Communications

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
