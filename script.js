// 🔥 Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔥 Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "simple-chat-fe1c8.firebaseapp.com",
  databaseURL: "https://simple-chat-fe1c8-default-rtdb.firebaseio.com",
  projectId: "simple-chat-fe1c8",
  storageBucket: "simple-chat-fe1c8.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 🔥 Elements
const chatBox = document.getElementById("chat");

// 🔥 Send message
window.sendMessage = function () {
  const name = document.getElementById("username").value;
  const msg = document.getElementById("message").value;

  if (name === "" || msg === "") return;

  push(ref(database, "messages"), {
    name: name,
    text: msg,
    time: Date.now()
  });

  document.getElementById("message").value = "";
};

// 🔥 Receive messages in real time
onChildAdded(ref(database, "messages"), (snapshot) => {
  const data = snapshot.val();
  const p = document.createElement("p");
  p.textContent = data.name + ": " + data.text;
  chatBox.appendChild(p);
});
