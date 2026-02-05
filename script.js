const chatBox = document.getElementById("chat");

function sendMessage() {
  const name = document.getElementById("username").value;
  const msg = document.getElementById("message").value;

  if (name === "" || msg === "") return;

  const p = document.createElement("p");
  p.textContent = name + ": " + msg;
  chatBox.appendChild(p);

  document.getElementById("message").value = "";
}
