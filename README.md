# Meet AI — AI-Powered Video Call & Meeting Assistant Platform

> A full-stack SaaS platform built from scratch, featuring real-time video calls with custom AI agents, automated background processing, smart transcripts, and an interactive post-call AI experience.

---

## 🚀 Key Features

* **🤖 AI-Powered Video Calls:** Connect in real-time with custom AI agents integrated directly into your calls.
* **📞 & 💬 Stream SDK Integration:** Powered by **Stream Video SDK** and **Stream Chat SDK** for ultra-reliable communication.
* **📝 Automated Post-Processing:** Generate instant transcripts, summaries, and recordings using **Inngest** background jobs.
* **🔍 Interactive Meeting Intelligence:** Search through transcripts, watch video playbacks, and chat directly with an **OpenAI-powered** AI agent that understands full meeting context.
* **💳 Monetization & Auth:** Secure user authentication via **Better Auth** and subscription management via **Polar**.
* **📱 Fully Responsive UI:** Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Shadcn/ui**.
* **🧑‍💻 Modern Workflow:** Includes automated AI-assisted code reviews via **CodeRabbit**.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router) + React 19
* **Styling & UI:** Tailwind CSS v4, Shadcn/ui, Lucide Icons
* **Authentication:** Better Auth
* **Video & Chat:** GetStream (Video & Chat SDKs)
* **AI & Background Jobs:** OpenAI API, Inngest
* **Payments:** Polar Subscriptions
* **Development Tools:** CodeRabbit (AI Code Reviews)

---

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/RaviRafaliya11/MeetAI.git

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install

```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```env
# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database & Authentication (Better Auth)
DATABASE_URL=your_database_url
BETTER_AUTH_SECRET=your_better_auth_secret

# Stream SDK Credentials
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Inngest
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

# Polar Subscriptions
POLAR_ACCESS_TOKEN=your_polar_access_token

```

### 4. Run the Development Server

Start the Next.js app and the Inngest dev server concurrently:

```bash
# Run Next.js
npm run dev

# Run Inngest background job handler (in a separate terminal)
npx inngest-cli@latest dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

---
