const { Controller, Response } = require("pepesan");
const GeminiService = require('../services/GeminiService');

module.exports = class BotController extends Controller {
	async handleMessage(request) {
		console.log("Pesan diterima:", request.text);

		if (request.text.toLowerCase() === 'help') {
			return this.showHelp();
		} else if (request.text.startsWith('')) {
			return this.geminiCommand(request);
		} else {
			// Tidak ada respons untuk pesan yang tidak dikenali
			return;
		}
	}

	async showHelp() {
		return this.reply("Gunakan tanda seru (!) di awal pesan untuk berbicara dengan AI. Contoh: !Apa itu kecerdasan buatan?");
	}

 async geminiCommand(request) {
  const GeminiService = require('../services/GeminiService');
  const prompt = request.text; // Gunakan seluruh teks pesan sebagai prompt
  
  if (!prompt) {
    return this.reply("Mohon berikan pesan untuk diproses oleh AI.");
  }

  try {
    const response = await GeminiService.generateResponse(prompt);
    return this.reply(response);
  } catch (error) {
    console.error('Error saat menggunakan Gemini API:', error);
    return this.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
  }
}
}