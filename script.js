const emojis = document.querySelectorAll('.emoji');
const message = document.getElementById('message');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    const mood = emoji.dataset.mood;
    let text = "";
    let bg = "";

    switch(mood) {
      case "happy":
        text = "Yay! Keep smiling 😄";
        bg = "#ffeaa7";
        break;
      case "neutral":
        text = "Just another day? Stay steady 😐";
        bg = "#dfe6e9";
        break;
      case "sad":
        text = "It's okay to feel down 💙";
        bg = "#74b9ff";
        break;
      case "angry":
        text = "Take a deep breath 🧘‍♂️";
        bg = "#fab1a0";
        break;
      case "tired":
        text = "Rest up! You deserve it 😴";
        bg = "#b2bec3";
        break;
    }

    document.body.style.backgroundColor = bg;
    message.textContent = text;
  });
});
