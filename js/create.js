/* =====================================
   MusicBouquet v5 Photo PRO
   create.js
===================================== */

const form = document.getElementById("giftForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = document.getElementById("message").value.trim();
    const name = document.getElementById("name").value.trim();

    const youtube = document.getElementById("youtube").value.trim();
    const yandex = document.getElementById("yandex").value.trim();
    const mp3 = document.getElementById("mp3").value.trim();

    const bouquet = document.getElementById("bouquet").value;

    const photoInput = document.getElementById("photo");

    let photoData = "";

    // -------------------------------------
    // ÇÀÃÐÓÇÊÀ ÔÎÒÎ Â BASE64
    // -------------------------------------

    if (photoInput.files && photoInput.files[0]) {

        photoData = await toBase64(photoInput.files[0]);

    }

    // -------------------------------------
    // ÑÎÇÄÀ¨Ì ÎÁÚÅÊÒ ÏÎÄÀÐÊÀ
    // -------------------------------------

    const gift = {
        id: Date.now(),
        name,
        message,
        photo: photoData,
        bouquet,
        music: {
            youtube: youtube || null,
            yandex: yandex || null,
            mp3: mp3 || null
        }
    };

    // -------------------------------------
    // ÑÎÕÐÀÍßÅÌ Â LOCALSTORAGE
    // -------------------------------------

    localStorage.setItem("musicBouquetGift", JSON.stringify(gift));

    // -------------------------------------
    // ÏÅÐÅÕÎÄ ÍÀ ÑÒÐÀÍÈÖÓ ÏÎÄÀÐÊÀ
    // -------------------------------------

    window.location.href = "view.html";

});

// -------------------------------------
// ÔÓÍÊÖÈß: FILE -> BASE64
// -------------------------------------

function toBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);

    });

}
