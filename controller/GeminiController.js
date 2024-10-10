const { Controller, Response } = require("pepesan");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = class GeminiController extends Controller {
  constructor(request) {
    super(request);
    console.log("GeminiController diinisialisasi");
  }

  async handleGeminiRequest(request) {
    console.log("Handling Gemini request");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = request.message.text.slice(1).trim();

    if (!prompt) {
      console.log("Prompt kosong");
      return new Response.text("Maaf, pesan Anda kosong. Silakan kirim pesan dengan awalan '!' diikuti dengan pertanyaan Anda.");
    }

    try {
      console.log("Mengirim prompt ke Gemini AI:", prompt);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log("Respon dari Gemini AI:", text);
      return new Response.text(text);
    } catch (error) {
      console.error("Error saat menggunakan Gemini AI:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return new Response.text("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
    }
  }
}