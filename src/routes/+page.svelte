<script>
 import Card from '$lib/components/Card.svelte'
</script>
<div class="header">
    <h1>Müdlog: Your Emotional Health Companion</h1>
    <p>Keep track of your emotions, gain insights, and take control of your mental well-being with Müdlog.</p>
    <a href=/calendar-view class="button">Get Started</a>
  </div>
  <div class="features">
    <Card 
      title="Sentiment Analysis"
      body="Müdlog runs sentiment analysis on all your journal entries, helping you identify patterns, triggers, and gain insights into your emotional state."
      image="/images/sentiment-analysis.jpg"
    />
    <Card 
      title="Mood Ring"
      body="Our mood ring displays colors based on your current mood, helping you stay in tune with your emotions throughout the day."
      image="/images/mood-ring.jpg"
    />
    <Card 
      title="Community Support"
      body="Join our community of like-minded individuals who are committed to their mental health and well-being. Share your thoughts and feelings, gain inspiration and support, and connect with others on the same journey."
      image="/images/community-support.jpg"
    />
  </div>
  <style>
    .header {
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;
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
    }
  
    .button:hover {
      background-color: #005f79;
    }
  
    .features {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 1200px;
    }
  </style>