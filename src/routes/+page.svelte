<script>
  import { onMount } from 'svelte';

  const quotes = [
    { 
      text: "Your emotions are your messengers. Listen to them.",
      author: "Rumi"
    },
    {
      text: "Journal writing is a voyage to the interior.",
      author: "Christina Baldwin"
    },
    {
      text: "Writing in a journal reminds you of your goals and of your learning in life. It offers a place where you can hold a deliberate, thoughtful conversation with yourself.",
      author: "Robin Sharma"
    }
  ];

  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  onMount(() => {
    document.title = "Müdlog - Journaling for Mental Health";
  });
</script>

<div class="container">
  <h1>Müdlog: Your Emotional Health Companion</h1>
  <p>Keep track of your emotions, gain insights, and take control of your mental well-being with Müdlog.</p>

  <p class="text">Müdlog is the future of journaling. Our platform helps you keep track of your emotions and mental well-being by providing you with an easy-to-use journaling tool that runs sentiment analysis on all your entries. With Müdlog, you can reflect on your thoughts and feelings, identify patterns and triggers, and gain insights into your emotional state.</p>

  <div class="quote">
    <p>"{currentQuote.text}"</p>
    <p>- {currentQuote.author}</p>
  </div>

  <div class="center">
    <a href="/calendar-view" class="button">Start Journaling</a>
  </div>
</div>

<style>
  .container {
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
    text-align: justify;
    animation: fade-in 1s;
  }

  h1 {
    margin-top: 0;
    text-align: center;
    animation: slide-in-top 1s;
  }

  p {
    text-align: center;
    animation: fade-in 1s;
  }

  .text {
    margin-top: 50px;
    animation: slide-in-bottom 1s;
  }

  .quote {
    margin-top: 50px;
    text-align: center;
    font-style: italic;
    animation: slide-in-left 1s;
  }
  .center{
    text-align: center;
  }

  .button {
    display: inline-block;
    background-color: #008CBA;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
    animation: pulse 1s infinite;
  }

  .button:hover {
    background-color: #005f79;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes slide-in-bottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>