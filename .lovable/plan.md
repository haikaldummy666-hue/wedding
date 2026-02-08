
# 🌸 Web Undangan Pernikahan - Soft Pink & Rose Gold

Website undangan pernikahan yang elegan dengan tema **Soft Pink & Rose Gold** dan dekorasi bunga yang cantik. Desain akan sepenuhnya **responsive** - tampil sempurna di desktop, tablet, maupun smartphone.

---

## 📱 Halaman & Fitur Utama

### 1. Opening Screen (Cover)
- Tampilan pembuka dengan animasi salju/kelopak bunga yang jatuh
- Nama kedua mempelai dengan font script yang elegan
- Tanggal pernikahan
- Tombol "Buka Undangan" untuk masuk ke konten utama
- Background music akan otomatis bermain setelah tombol diklik

### 2. Hero Section
- Foto pasangan dalam frame lengkung dengan dekorasi bunga
- "The Wedding of" dengan nama mempelai
- Tanggal pernikahan

### 3. Ayat Al-Quran
- Quote romantis islami (QS. Ar-Rum:21)
- Desain dengan ornamen floral

### 4. Profil Mempelai
- Foto masing-masing mempelai dalam frame dekoratif
- Nama lengkap dengan font elegan
- Nama orang tua
- Link ke Instagram masing-masing

### 5. Countdown Timer
- Hitung mundur menuju hari H
- Menampilkan Hari, Jam, Menit, Detik
- Animasi angka yang bergerak real-time

### 6. Jadwal Acara (Akad & Resepsi)
- Kartu untuk acara Akad dengan tanggal, waktu, lokasi
- Kartu untuk acara Resepsi dengan tanggal, waktu, lokasi
- Tombol "Lihat Lokasi Maps" yang membuka Google Maps

### 7. Love Story Timeline
- Timeline perjalanan cinta dengan foto-foto
- 3 momen: Awal Bertemu, Lamaran, Menuju Resepsi
- Desain timeline vertikal dengan animasi scroll

### 8. Galeri Foto
- Grid foto-foto prewedding yang cantik
- Lightbox untuk melihat foto lebih besar
- Transisi animasi yang halus

### 9. Wedding Live
- Info untuk mengikuti acara secara virtual
- Link ke Instagram live atau platform streaming

### 10. RSVP & Ucapan
- Form untuk konfirmasi kehadiran (Hadir/Tidak Hadir/Masih Ragu)
- Form untuk mengirim ucapan dan doa
- Daftar ucapan dari tamu undangan dengan timestamp
- *Data disimpan di browser (localStorage) - tidak perlu database*

### 11. Wedding Gift / Amplop Digital
- Kartu-kartu rekening bank untuk transfer hadiah
- Tombol copy nomor rekening
- Alamat pengiriman kado fisik

### 12. Closing
- Ucapan terima kasih dari kedua mempelai
- Nama mempelai dengan desain cantik

---

## 🎨 Desain & Animasi

### Tema Visual
- **Warna utama**: Soft Pink (#FADADD, #F8BBD9)
- **Aksen**: Rose Gold (#B76E79)
- **Teks**: Dark brown/maroon untuk kontras
- **Background**: Gradient pink lembut
- **Ornamen**: Bunga-bunga floral (roses, peonies) di sudut-sudut

### Animasi
- Efek salju/kelopak bunga yang jatuh di opening
- Fade-in saat scroll untuk setiap section
- Hover effects pada tombol dan kartu
- Countdown timer yang bergerak real-time

---

## 🎵 Audio & Assets

### Folder Assets
Semua gambar dan musik akan ditempatkan di folder `/src/assets/` sehingga Anda dapat dengan mudah menggantinya:

- `/src/assets/music/` - untuk file musik latar (MP3)
- `/src/assets/images/` - untuk foto-foto (couple, prewedding, profil)
- `/src/assets/decorations/` - untuk ornamen bunga (akan saya siapkan placeholder)

### Kontrol Musik
- Tombol play/pause di pojok layar
- Autoplay setelah user klik "Buka Undangan"
- Volume icon untuk mute/unmute

---

## 📐 Responsive Design

Website akan tampil sempurna di semua ukuran layar:
- **Desktop (1024px+)**: Layout 2 kolom untuk profil mempelai, galeri grid 3 kolom
- **Tablet (768px - 1023px)**: Layout adaptif, galeri grid 2 kolom
- **Mobile (< 768px)**: Layout 1 kolom, full-width, touch-friendly buttons

---

## 🧭 Navigasi

- Navigation bar sticky di bagian bawah layar (mobile-friendly)
- Menu: Home | Mempelai | Acara | Galeri | Gift
- Smooth scroll ke setiap section
