// Wedding Configuration - Edit this file to customize your wedding invitation
// 
// 📸 CARA MENAMBAHKAN FOTO:
// 1. Letakkan foto di src/assets/images/
// 2. Import di sini: import bridePhoto from "@/assets/images/bride.jpg"
// 3. Ganti "/placeholder.svg" dengan variable import
//
// 🎵 CARA MENAMBAHKAN MUSIK:
// 1. Letakkan file MP3 di src/assets/music/
// 2. Import di sini: import bgMusic from "@/assets/music/backsound.mp3"
// 3. Ganti null di backgroundMusic dengan variable import

export const weddingConfig = {
  // Couple Information
  bride: {
    name: "Novi",
    fullName: "Novi Ramadaniawati",
    father: "Bapak Sastra Wijaya",
    mother: "Ibu Ai Santi",
    photo: "/assets/images/novi.jpeg",
  },
  groom: {
    name: "Haikal",
    fullName: "Haikal Muhammad Kurniawan",
    father: "Bapak Jimmi Kurniawan",
    mother: "Ibu Yanti Nuryanti",
    photo: "/assets/images/haikal.jpeg",
  },

  // Wedding Date
  weddingDate: new Date("2026-03-24T08:00:00"),

  // Events
  akad: {
    date: "Selasa, 24 Maret 2026",
    time: "09:00 - 10:00 WIB",
    venue: "Kediaman Mempelai Wanita",
    address: "Kp. Bitung Rt20/04 Desa Cicareuh Kecamatan Cikidang Kabupaten Sukabumi",
    mapsLink: "https://www.google.com/maps/place/6%C2%B054'45.0%22S+106%C2%B041'43.7%22E/@-6.912501,106.695467,1133m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-6.912501!4d106.695467!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
  resepsi: {
    date: "Selasa, 24 Maret 2026",
    time: "11:00 - 15:00 WIB",
    venue: "Kediaman Mempelai Wanita",
    address: "Kp. Bitung Rt20/04 Desa Cicareuh Kecamatan Cikidang Kabupaten Sukabumi",
    mapsLink: "https://www.google.com/maps/place/6%C2%B054'45.0%22S+106%C2%B041'43.7%22E/@-6.912501,106.695467,1133m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-6.912501!4d106.695467!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },

  // Love Story Timeline
  loveStory: [
    {
      title: "Awal Bertemu",
      date: "Januari 2020",
      description: "Pertemuan pertama kami di facebook. Saat itu, tanpa disadari takdir mulai mempertemukan kami.",
      photo: "/placeholder.svg",
    },
    {
      title: "Menjalin Kasih",
      date: "Desember 2025",
      description: "Setelah beberapa bulan saling mengenal, kami memutuskan untuk menjalin hubungan yang lebih serius.",
      photo: "/placeholder.svg",
    },
    {
      title: "Lamaran",
      date: "Januari 2026",
      description: "Dengan restu kedua orang tua, kami memutuskan untuk melangkah ke jenjang yang lebih serius.",
      photo: "/placeholder.svg",
    },
    {
      title: "Menuju Pelaminan",
      date: "Maret 2026",
      description: "Hari bahagia yang kami nantikan, menyatukan cinta dalam ikatan suci pernikahan.",
      photo: "/placeholder.svg",
    },
  ],

  // Gallery Photos
  gallery: [
    "/assets/images/g1.jpeg",
    "/assets/images/g2.jpeg",
    "/assets/images/g3.jpeg",
    "/assets/images/g4.jpeg",
    "/assets/images/g5.jpeg",
    "/assets/images/g6.jpeg",
  ],

  // Couple Main Photo
  couplePhoto: "/assets/images/weding.jpeg",

  // Wedding Gift / Bank Accounts (4 akun)
  bankAccounts: [
    {
      bank: "Bank BCA",
      accountNumber: "3771853232",
      accountName: "Haikal Muhammad Kurniawan",
    },
    {
      bank: "Dana",
      accountNumber: "083808283542",
      accountName: "Haikal Muhammad Kurniawan",
    },
    {
      bank: "Bank Jago",
      accountNumber: "100160107843",
      accountName: "Haikal Muhammad Kurniawan",
    },
    {
      bank: "Seabank",
      accountNumber: "901565136605",
      accountName: "Haikal Muhammad Kurniawan",
    },
  ],

  // Gift Address
  giftAddress: {
    name: "Novi & Haikal",
    address: "Kp. Bitung Rt20/04 Desa Cicareuh Kecamatan Cikidang Kabupaten Sukabumi",
    city: "Sukabumi",
    phone: "+62 8232156 48140",
  },

  // Background Music
  backgroundMusic: "/assets/music/lagu.mp3",

  // Quran Quote
  quranQuote: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.",
    surah: "QS. Ar-Rum: 21",
  },
};

export type WeddingConfig = typeof weddingConfig;
