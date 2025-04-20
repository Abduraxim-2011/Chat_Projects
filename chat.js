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
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push({ text: msg, from: "user" });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    input.value = "";
  }
}

function loadMessages() {
  const chat = document.getElementById("chat");
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
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
function setActive(btn) {
  const chatsBtn = document.querySelector('#Chats')
const contactsBtn = document.querySelector('#Contacts')
const browserBtn = document.querySelector('#Browser')
  if (btn === 'chat') {
      chatsBtn.classList.add('active')
      contactsBtn.classList.remove('active')
      browserBtn.classList.remove('active')
      window.location.href = "index.html"
  } else if (btn === 'contact') {
      chatsBtn.classList.remove('active')
      contactsBtn.classList.add('active')
      browserBtn.classList.remove('active')
      window.location.href = "contacts.html"
  } else if (btn === 'browser') {
      chatsBtn.classList.remove('active')
      contactsBtn.classList.remove('active')
      browserBtn.classList.add('active')
      window.location.href = "browser.html"
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'on') {
    document.body.classList.add('dark');
  }
});

