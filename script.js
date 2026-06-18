const statusText = document.getElementById("status-text");

const messages = [
  "Portfolio currently under development",
  "Projects and case studies coming soon",
  "Building in public, one commit at a time",
  "Full-stack portfolio loading..."
];

let currentMessage = 0;

setInterval(() => {
  currentMessage = (currentMessage + 1) % messages.length;
  statusText.textContent = messages[currentMessage];
}, 3000);
