const { Controller, Response } = require("pepesan");
const GeminiService = require('../services/GeminiService');

module.exports = class BotController extends Controller {
	async handleMessage(request) {
		console.log("Pesan diterima:", request.text);

		if (request.text.toLowerCase() === 'help') {
			return this.showHelp()
		} else if (request.text.startsWith('!')) {
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
		const prompt = request.text.slice(1).trim(); // Hapus tanda seru di awal dan trim spasi
	
		if (!prompt) {
			return this.reply("Mohon berikan pesan setelah tanda seru (!).");
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