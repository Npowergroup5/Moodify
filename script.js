const emojis = document.querySelectorAll('.emoji');
const message = document.getElementById('message');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const mood = emoji.dataset.mood;
    let text = "";
    let bg = "";

    switch(mood) {
      case "happy":
        text = "Awesome! Stay joyful 🌞";
        bg = "#ffeaa7";
        break;
      case "sad":
        text = "Sending you a big virtual hug 💙";
        bg = "#74b9ff";
        break;
      case "tired":
        text = "Take a nap or have a tea break ☕";
        bg = "#dfe6e9";
        break;
      case "angry":
        text = "Breathe in... breathe out 🧘‍♀️";
        bg = "#fab1a0";
        break;
      case "excited":
        text = "Keep the energy flowing 🚀";
        bg = "#ffbe76";
        break;
    }

    document.body.style.backgroundColor = bg;
    message.textContent = text;
  });
});
