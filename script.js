// Trade App EL - Main Script

// ===== THEME MODE =====
const themeBtn = document.getElementById("themeBtn");

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  
  if (document.body.classList.contains("light")) {
    themeBtn.innerHTML = "☀️";
  } else {
    themeBtn.innerHTML = "🌙";
  }
});


// ===== MENU BUTTON =====
const menuBtn = document.getElementById("menuBtn");

menuBtn?.addEventListener("click", () => {
  alert("Menu dibuka");
});


// ===== SEARCH BUTTON =====
const searchBtn = document.getElementById("searchBtn");

searchBtn?.addEventListener("click", () => {
  let saham = prompt("Cari kode saham:");
  
  if (saham) {
    alert("Mencari saham: " + saham.toUpperCase());
  }
});


// ===== NOTIFICATION =====
const notifBtn = document.getElementById("notifBtn");

notifBtn?.addEventListener("click", () => {
  alert("Belum ada notifikasi");
});


// ===== IHSG DATA PLACEHOLDER =====
const ihsgLive = document.getElementById("ihsgLive");
const ihsgChange = document.getElementById("ihsgChange");

function updateIHSG() {
  
  // sementara data contoh
  let nilai = "7,245.32";
  let perubahan = "+0.45%";
  
  if (ihsgLive) {
    ihsgLive.innerHTML = nilai;
  }
  
  if (ihsgChange) {
    ihsgChange.innerHTML = perubahan;
  }
}

updateIHSG();
updateIHSG();


// ===== MARKET STATUS =====
function marketStatus() {
  const badge = document.querySelector(".badge");
  
  if (!badge) return;
  
  const jam = new Date().getHours();
  
  if (jam >= 9 && jam < 16) {
    badge.innerHTML = "🟢 MARKET LIVE";
  } else {
    badge.innerHTML = "🔴 MARKET CLOSED";
  }
}

marketStatus();


// ===== SIMULASI AI SCORE =====
function aiScore() {
  
  let score = Math.floor(Math.random() * 40) + 60;
  
  console.log("AI Score Saham:", score + "/100");
  
}

aiScore();