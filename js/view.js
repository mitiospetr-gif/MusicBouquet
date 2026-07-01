/* =====================================
   MusicBouquet v5 Photo PRO
   view.js
===================================== */

// -------------------------------------
// ЗАГРУЗКА ДАННЫХ
// -------------------------------------

const raw = localStorage.getItem("musicBouquetGift");

if (!raw) {
    document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:100px;'>Подарок не найден</h2>";
    throw new Error("No gift data");
}

const gift = JSON.parse(raw);

// -------------------------------------
// ЭЛЕМЕНТЫ
// -------------------------------------

const photoEl = document.getElementById("giftPhoto");
const nameEl = document.getElementById("giftName");
const messageEl = document.getElementById("giftMessage");
const bouquetEl = document.getElementById("giftBouquet");

const youtubeBtn = document.getElementById("youtubeBtn");
const yandexBtn = document.getElementById("yandexBtn");
const mp3Btn = document.getElementById("mp3Btn");

// -------------------------------------
// ЗАПОЛНЕНИЕ ДАННЫХ
// -------------------------------------

nameEl.textContent = gift.name || "Без имени";
messageEl.textContent = gift.message || "Нет сообщения";

// Фото
if (gift.photo) {
    photoEl.src = gift.photo;
} else {
    photoEl.src = "assets/default-bg.jpg";
}

// Букет
if (gift.bouquet) {
    bouquetEl.src = "assets/" + gift.bouquet;
} else {
    bouquetEl.style.display = "none";
}

// -------------------------------------
// МУЗЫКАЛЬНЫЕ КНОПКИ
// -------------------------------------

// YouTube
if (gift.music.youtube) {
    youtubeBtn.href = gift.music.youtube;
} else {
    youtubeBtn.style.display = "none";
}

// Яндекс
if (gift.music.yandex) {
    yandexBtn.href = gift.music.yandex;
} else {
    yandexBtn.style.display = "none";
}

// MP3
if (gift.music.mp3) {
    mp3Btn.href = gift.music.mp3;
} else {
    mp3Btn.style.display = "none";
}

// -------------------------------------
// АВТО-ОФОРМЛЕНИЕ (ФОН ПО НАСТРОЕНИЮ)
// -------------------------------------

const text = (gift.message || "").toLowerCase();

const bg = document.querySelector(".background");

if (text.includes("люблю") || text.includes("любов")) {
    bg.style.backgroundImage = "url('assets/romantic.jpg')";
}

else if (text.includes("с дн") || text.includes("др") || text.includes("день рождения")) {
    bg.style.backgroundImage = "url('assets/happy.jpg')";
}

else if (text.includes("спокой") || text.includes("тих")) {
    bg.style.backgroundImage = "url('assets/calm.jpg')";
}

else if (text.includes("грусть") || text.includes("скуч")) {
    bg.style.backgroundImage = "url('assets/dark.jpg')";
}

else {
    bg.style.backgroundImage = "url('assets/default-bg.jpg')";
}
