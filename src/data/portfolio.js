export const portfolioData = {
  personal: {
    name: "Azizbek Rahimov", // Bu yerga o'z ism-familiyangizni yozishingiz mumkin
    title: "Full-Stack Software Engineer",
    subtitle: "Zamonaviy, xavfsiz va yuqori unumdorlikka ega web ilovalar yaratuvchi dasturchi",
    bio: "Men React, Node.js, Express, Python va bulutli texnologiyalar yordamida scalable (kengayuvchan) va foydalanuvchilar uchun qulay tizimlarni loyihalashga ixtisoslashganman. Har bir loyihada toza kod va chiroyli arxitekturaga e'tibor qarataman.",
    status: "Yangi loyihalar uchun ochiqman",
    location: "Toshkent, O'zbekiston",
    experienceYears: "2+",
    projectsCount: "15+",
    happyClients: "20+",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    telegram: "https://t.me",
    email: "contact@example.com"
  },
  skills: {
    frontend: [
      { name: "React / Next.js", level: "90%" },
      { name: "JavaScript / TypeScript", level: "88%" },
      { name: "HTML5 / CSS3 / Tailwind", level: "95%" },
      { name: "Redux / Zustand", level: "85%" },
      { name: "Responsive UI/UX", level: "92%" }
    ],
    backend: [
      { name: "Node.js & Express", level: "87%" },
      { name: "RESTful & GraphQL API", level: "85%" },
      { name: "PostgreSQL / MongoDB", level: "82%" },
      { name: "Authentication (JWT, OAuth)", level: "88%" },
      { name: "Serverless & Microservices", level: "80%" }
    ],
    tools: [
      { name: "Git & GitHub", level: "92%" },
      { name: "Docker", level: "75%" },
      { name: "Netlify / Vercel / Render", level: "88%" },
      { name: "Postman / Swagger", level: "90%" },
      { name: "Linux / CI/CD", level: "78%" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Full-Stack E-Commerce Platform",
      description: "To'liq funksional internet do'kon. Foydalanuvchilar savatchasi, to'lov tizimi integratsiyasi, admin panel va buyurtmalarni boshqarish imkoniyatlari mavjud.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Real-time Task & Project Manager",
      description: "Jamoalar uchun qulay vazifalar boshqaruv tizimi (Trello/Jira kloni). Real-time bildirishnomalar va Kanban doskasi bilan jihozlangan.",
      tags: ["React", "Socket.io", "TypeScript", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "AI Chat & Prompt Hub",
      description: "Sun'iy intellekt API laridan foydalanib yozilgan matn va kod yordamchisi. Foydalanuvchilar chat tarixi va prompt shablonlarini saqlashi mumkin.",
      tags: ["React", "OpenAI API", "Node.js", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Interactive Analytics Dashboard",
      description: "Katta hajmdagi ma'lumotlarni qulay vizuallashtiruvchi analitika paneli. Grafiklar, filtrlar va eksport qilish imkoniyatlari bilan.",
      tags: ["React", "Chart.js", "Rest API", "CSS Grid"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ],
  services: [
    {
      title: "Frontend Development",
      description: "Zamonaviy, tez ishlaydigan va barcha qurilmalarga moslashuvchan (responsive) chiroyli interfeyslarni React yordamida yaratish.",
      icon: "Code"
    },
    {
      title: "Backend & API Architecture",
      description: "Ishonchli, tez va xavfsiz RESTful/Serverless API lar hamda ma'lumotlar bazasi strukturalarini barpo etish.",
      icon: "Server"
    },
    {
      title: "Full-Stack Web Apps",
      description: "G'oyadan boshlab to'liq ishga tushirish (Deploy)gacha bo'lgan to'liq sikldagi web-loyihalarni ishlab chiqish.",
      icon: "Layers"
    },
    {
      title: "Deployment & Optimization",
      description: "Veb-saytlarni Netlify/Vercel platformalariga joylash, SEO va yuklanish tezligini (performance) yuqori darajaga olib chiqish.",
      icon: "Zap"
    }
  ]
};
