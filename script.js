let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quote =
  [
  "I’ve noticed when I fear something, if I just end up doing it, I’m grateful in the end.— Colleen Hoover",
  "We’ve been making our own opportunities, and as you prove your worth and value to people, they can’t put you in a box. You hustle it into happening, right?— Jennifer Lopez",
  "When you’ve seen beyond yourself, then you may find, peace of mind is waiting there.— George Harrison",
  "Out of the mountain of despair, a stone of hope.— Martin Luther King, Jr.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.– Zig Ziglar",
  "I’m realizing how much I’ve diminished my own power. I’m not doing that no more.— Alicia Keys",
  "You are never too old to set another goal or to dream a new dream.— C.S. Lewis",
  "I believe that if you’ll just stand up and go, life will open up for you. Something just motivates you to keep moving.— Tina Turner",

  ];

btn.addEventListener('click', function(){

  var random = quote[Math.floor(Math.random() * quote.length)]
  output.innerHTML = random;
})
