// Mektubu açma animasyonu
function openLetter() {
    document.querySelector('.letter').classList.add('show');
}

// Rastgele aşk mesajları
const messages = [
    "Ellerin tenimi özledi mi? Çünkü benim ruhum seni çağırıyor...",
    "Geceleri, nefesinin boynumda olduğu anları düşünüyorum...",
    "Aşkım, gözlerini her kapattığında beni yanında hisset...",
    "Şu an seni hayal ederken, kalbim daha hızlı atıyor...",
    "Dudakların hala tenimde, hissettiğim en güzel iz..."
];

function showMessage() {
    let message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-message").innerText = message;
}

// Kullanıcı kartını oluşturma
function createCard() {
    let customText = document.getElementById("customMessage").value;
    let outputDiv = document.getElementById("cardOutput");

    if (customText.trim() === "") {
        outputDiv.innerHTML = "<p style='color: red;'>Lütfen bir mesaj yaz! ❤️</p>";
    } else {
        outputDiv.innerHTML = `<p style="color: #d6336c;">"${customText}"</p>`;
    }
}
