<h1 align="center">⚡ CodeShare — SaaS Code Editor Built with Next.js 15 ⚡</h1>

![Live Preview](/public/preview.png)

## 🔥 Project Highlights

- 🚀 **Modern Stack**: Built using Next.js 15, Convex, Clerk, and TypeScript.
- 💻 **In-Browser Code Execution**: Supports 10+ popular programming languages.
- 🎨 **Theme Variety**: Offers 5 VS Code-style themes for a personalized look.
- ✨ **Smart Output UI**: Clearly separates success and error states.
- 💎 **Flexible Pricing**: Switch between Free and Pro tiers.
- 🤝 **Share With Others**: Post and browse community-submitted code snippets.
- 🔍 **Advanced Search**: Filter and search across all shared snippets easily.
- 👤 **User Dashboard**: View your past runs and manage your profile.
- 📊 **Analytics Panel**: Includes usage statistics and editor activity tracking.
- ⚙️ **Editor Controls**: Adjust font size to match your comfort.
- 🔗 **Integrations Ready**: Supports incoming webhooks for automations.
- 🌟 **Deployment Guide**: Includes full instructions for deploying the app live.

---

## 🛠️ Environment Setup

Create a `.env` file in the root with the following keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

---

## 🔐 Convex Dashboard Secrets

Inside the Convex dashboard, add:

```bash
CLERK_WEBHOOK_SECRET=
LEMON_SQUEEZY_WEBHOOK_SECRET=
```

---

## ▶️ Start the Development Server

```bash
npm run dev
```

> Now you're ready to code, test, and share — all in the browser 🚀
