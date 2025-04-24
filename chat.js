function sendMessage() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (msg !== "") {
    const chat = document.getElementById("chat");
    const msgDiv = document.createElement("div");
    msgDiv.className = "message from-user";
    msgDiv.innerText = msg;
    chat.appendChild(msgDiv);
    chat.scrollTop = chat.scrollHeight;
    let messages = JSON.parse(localStorage.getItem("ChatMsg")) || [];
    messages.push({ text: msg, from: "user" });
    localStorage.setItem("ChatMsg", JSON.stringify(messages));
    input.value = "";
  }
}

function loadMessages() {
  const chat = document.getElementById("chat");
  const messages = JSON.parse(localStorage.getItem("ChatMsg")) || [];
  messages.forEach(msg => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message from-${msg.from}`;
    msgDiv.innerText = msg.text;
    chat.appendChild(msgDiv);
  });
  chat.scrollTop = chat.scrollHeight;
}

window.addEventListener("DOMContentLoaded", loadMessages);




  
window.addEventListener('load', function() {
    setTimeout(function() {
      const loading = document.getElementById('loading');
      const content = document.getElementById('content');
      loading.style.display = 'none';
    }, 1000);
  });
  
  document.querySelectorAll('.contact-firstname, .contact-lastname').forEach(function(el) {
    const originalText = el.textContent;
    const length = originalText.length;

    if (length > 13) {
      el.textContent = originalText.slice(0, 13) + '...';
      el.style.fontSize = "18px"
    }
  
});



window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('load', function() {
    setTimeout(function() {
      loading.style.display = 'none';
    }, 1000);
  });
  const darkMode = localStorage.getItem("dark") === "true";
  if (darkMode) {

    document.body.classList.add("dark");
  }
});

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  document.body.classList.add('dark');
} else {
  document.body.classList.add('light');
}


