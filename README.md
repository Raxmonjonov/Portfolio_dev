# Full-Stack Portfolio

Zamonaviy, yuqori sifatli va responsiv Full-Stack dasturchi portfoliosi.

## Texnologiyalar
- **Frontend**: React 19, Vite, Lucide Icons, Glassmorphism UI
- **Backend**: Netlify Serverless Functions (`/netlify/functions/contact.js`)
- **Deployment**: Netlify & GitHub CI/CD

## O'zingizning ma'lumotlaringizni o'zgartirish
[`src/data/portfolio.js`](src/data/portfolio.js) fayliga kiring va:
1. Ism-familiyangiz, bio va status
2. Ijtimoiy tarmoqlar havolalari (GitHub, LinkedIn, Telegram, Email)
3. Ko'nikmalar (Frontend, Backend, DevOps)
4. Loyihalaringiz (Title, Tavsif, Teglar, Havolalar)
ma'lumotlarini o'zingizga moslang.

## GitHub va Netlify-ga chiqarish:

### 1-qadam: GitHub-ga push qilish
1. [GitHub](https://github.com) ga kiring va yangi bo'sh repository oching (masalan, `my-portfolio`).
2. Terminalda quyidagi buyruqlarni bajaring:
   ```bash
   git remote add origin https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

### 2-qadam: Netlify-ga ulash
1. [Netlify.com](https://app.netlify.com) ga kiring va GitHub profilingiz orqali kiring.
2. **"Add new site"** -> **"Import an existing project"** ni bosing.
3. **GitHub** ni tanlang va hozirgina yaratgan `my-portfolio` repositoryingizni tanlang.
4. Build sozlamalari avtomatik aniqlanadi:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`
5. **"Deploy site"** tugmasini bosing! Bir necha soniyada saytingiz butun dunyoga jonli (live) holda ishga tushadi. Har gal GitHub-ga o'zgartirish kiritib push qilganingizda, Netlify avtomatik qayta yangilanadi.
