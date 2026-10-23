// Netlify Serverless Function for Portfolio Contact & Message Handler
export async function handler(event, context) {
  // CORS sarlavhalari
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" })
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Barcha maydonlarni to'ldirish shart (ism, email, xabar)!"
        })
      };
    }

    // Backend log (Netlify Function logs bo'limida ko'rinadi)
    console.log(`[Yangi xabar]: Ism: ${name} | Email: ${email} | Xabar: ${message}`);

    // Agar Telegram Bot yoki boshqa integratsiya kerak bo'lsa, bu yerda qo'shish mumkin:
    // masalan: await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, ...)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Xabaringiz muvaffaqiyatli qabul qilindi! Tez orada aloqaga chiqaman.",
        receivedData: {
          name,
          email,
          timestamp: new Date().toISOString()
        }
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: "Serverda xatolik yuz berdi: " + err.message
      })
    };
  }
}
