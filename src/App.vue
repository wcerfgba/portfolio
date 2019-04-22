<template>
  <main>
    <div class="slice my-card">
      <h1>John L. Preston</h1>
      <h2>software engineer</h2>
      <h2>multimedia artist</h2>
      <h2>entrepreneur</h2>
      <h2>human</h2>
    </div>
    <div class="slice about">
      <p>This is me, saying some words about myself. I need to talk about all the stuff I do, why I'm so cool, what my philosophy is. Y'know, portfolio stuff. </p>
    </div>
    <div class="slice portfolio">
      <div class="portfolio">
        <div class="squares">
          <portfolio-square
            title="Real Users Club"
            :icon="require('./assets/realusersclub-icon.png')"
            :photo="require('./assets/realusersclub-photo.png')"
          >
            <p>This is some stuff about this project</p>
          </portfolio-square>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
        <div class="lines">
          <ul>
            <li><span class="date">2019-09-99</span> Something here</li>
            <li><span class="date">2019-09-99</span> Something here</li>
            <li><span class="date">2019-09-99</span> Something here</li>
            <li><span class="date">2019-09-99</span> Something here</li>
            <li><span class="date">2019-09-99</span> Something here</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slice contact">
      <h2>Contact</h2>
      <textarea name="" id="" placeholder="Hi John,
  Can you email me at me@place.net?
  Thanks!
  Name"></textarea>
      <input type="submit" value="Send">
    </div>
  </main>
</template>

<script>
import PortfolioSquare from './components/PortfolioSquare'

export default {
  name: 'app',
  components: {
    PortfolioSquare
  }
}
</script>

<style>
main { height: 100%; }

.slice {
  padding: 3% 3vw;
  height: 110%;
}

.my-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.my-card h1 {
  margin: 0 0 1rem;
}

.my-card h2 {
  font-weight: normal;
  margin: 0;
  color: #555;
}

.my-card h2:last-child {
  color: #333;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio > * { margin-bottom: 1rem; }
.portfolio > *:last-child { margin-bottom: 0; }

@media (min-width: 1000px) {
  .portfolio {
    flex: 1;
    flex-direction: row;
  }

  .portfolio > * { margin-right: 1rem; }
  .portfolio > *:last-child { margin-right: 0; }
}

.portfolio .squares {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}

.portfolio .squares .square {
  width: 24%;
  padding-top: 24%; /* hck for placeholder squares/*/
  margin: 1px;
  background: #aaa;
}

.portfolio .lines {
  flex: 1;
}

.portfolio .lines ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.portfolio .lines ul li {
  white-space: nowrap;
  margin-bottom: 0.3rem;
}

.portfolio .lines .date {
  font-size: 0.8em;
  margin-right: 1rem;
  color: #444;
}

.contact {
  background: #333;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact h2 {
  font-weight: normal;
  margin: 0 0 1rem 0;
}

.contact textarea {
  margin: 0 0 1rem 0;
  border: none;
  background: #444;
  color: #eee;
  width: 100%;
  max-width: 1024px;
  height: 5em;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
}

.contact input[type="submit"] {
  margin: 0 0 1rem 0;
  border: none;
  background: #444;
  color: #eee;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}
</style>
