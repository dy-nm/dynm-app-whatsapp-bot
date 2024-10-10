# WhatsApp BOT

Starter Project untuk membuat project WhatsApp BOT dengan menggunakan library [Pepesan](https://github.com/mqad21/pepesan) dan [Baileys](https://github.com/WhiskeySockets/Baileys)

Dengan menggunakan library Pepesan, pembuatan BOT WhatsApp jauh lebih mudah dan ringkas. Kesulitan utama dalam pembuatan BOT WhatsApp adalah meminta BOT untuk mengingat dia sedang dalam menu apa (pengaturan state), nah dengan menggunakan library Pepesan ini, kesulitan itu sudah bisa teratasi. 

Teman-teman tinggal ikuti saja syntax dari library pepesan untuk membuat BOT WhatsApp, proses pembuatan BOT WhatsApp akan lebih mudah.

## Cara Install

1. buat file .env dengan cara berikut
```
cp .env.example .env
```
2. install dependency
```
npm install
```
3. jalankan bot
```
npm run dev
```
4. untuk menghapus session atau akun sebelumnya
   - cari folder bernama session
   - setelah itu hapus folder session
   - done bot akan login ulang dan di minta untuk memasukan qr code kembali

# Notes
- jangan lupa untuk mengisi gemini api key di file `.env` yang telah di buat sebelumnya.
- jangan lupa juga melakukan `npm audit fix` agar semua dependensi bisa berjalan dengan baik.
- jika di perlukan lakukan juga `npm update` agar dependensi yang terinsttal versi terbaru yang tersedia.


# API 
- bot ini menggunakan api dari `gemini ai` base open api by google.

