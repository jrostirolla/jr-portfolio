import React from 'react';
import Cocktail from './Pictures/cocktailHUB.jpg';
import Weather from './Pictures/weather-app.jpeg';
import Schedule from './Pictures/schedule.jpg';
import Password from './Pictures/password_generator.jpg';
import Budget from './Pictures/pwa-budget.jpg';
import Web from './Pictures/web-generator.png';

const styles = {
  title: {
    margin: '30px'
  },
  card: {
    width: '300px',
    margin: '30px'
  },
  image1: {
    aspectRatio: '1235 / 694.6',
    maxWidth: '300px',
  },
  text: {
    padding: '5px'
  }
}

export default function Blog() {
  return (
    <div>
      <h1 style={styles.title}>Portfolio</h1>
      <div class="container">
    <div class="row">
            <div class="row">
                <div class="col m12">
                    <div style={styles.card} class="card">
                        <div class="card-image">
                            <img style={styles.image1} src={Cocktail}/>
                            <span style={styles.text} class="card-title">CocktailHUB  &nbsp;</span>
                            <a href="https://zahramertens.github.io/Project-1/" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                        </div>
                        <div style={styles.text}  class="card-content containerText">
                            <p>An app that assists the user with finding recipes for various cocktails</p>
                            <p><b>Involved:</b> API calls, Javascript, HTML, Materialise CSS</p>
                        </div>
                    </div>
                </div>

                <div class="col m6">
                    <div style={styles.card} class="card">
                        <div class="card-image">
                            <img style={styles.image1} src={Weather}/>
                            <span style={styles.text}  class="card-title">Weather App  &nbsp;</span>
                            <a href="https://jrostirolla.github.io/weather-app/" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                        </div>
                        <div style={styles.text}  class="class-content containerText">
                            <p>An app that displays the weather in a particular city</p>
                            <p><b>Involved:</b> API calls, Javascript, HTML, CSS</p>
                        </div>
                    </div>
                </div>

                <div class="col m6">
                    <div style={styles.card} class="card">
                        <div class="card-image">
                            <img style={styles.image1} src={Schedule}/>
                            <span style={styles.text}  class="card-title">Work Schedule  &nbsp;</span>
                            <a href="https://jrostirolla.github.io/work-schedule/" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                        </div>
                        <div style={styles.text}  class="class-content containerText">
                            <p>A quick and easy app for helping the user schedule their day</p>
                            <p><b>Involved:</b> Updates to HTML, Javascript, CSS</p>
                        </div>
                    </div>
                </div>

                <div class="col m6">
                    <div style={styles.card} class="card">
                        <div class="card-image">
                            <img style={styles.image1} src={Password}/>
                            <span style={styles.text}  class="card-title">Password Generator  &nbsp;</span>
                            <a href="https://jrostirolla.github.io/password_generater/" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                        </div>
                        <div style={styles.text}  class="class-content containerText">
                            <p>A tweekable password generator with additional character options</p>
                            <p><b>Involved:</b> HTML, Javascript</p>
                        </div>
                    </div>
                </div>

                <div class="col m6">
                <div style={styles.card} class="card">
                    <div class="card-image">
                        <img style={styles.image1} src={Budget}/>
                        <span style={styles.text}  class="card-title">Offline Budget Tracker  &nbsp;</span>
                        <a href="https://pwa-budget-tracker-jr.herokuapp.com/" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                    </div>
                    <div style={styles.text}  class="class-content containerText">
                        <p>An example of offline functionality using SW & manifest data</p>
                        <p><b>Involved:</b> Express, SW, MongoDB </p>
                    </div>
                </div>
            </div>

            <div class="col m6">
            <div style={styles.card} class="card">
                <div class="card-image">
                    <img style={styles.image1} src={Web}/>
                    <span style={styles.text}  class="card-title">HTML Generator  &nbsp;</span>
                    <a href="https://github.com/jrostirolla/employer-website-generater" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> LINK</i></a>
                </div>
                <div style={styles.text}  class="class-content containerText">
                    <p>A HTML generator, incorporating command line prompts</p>
                    <p><b>Involved:</b> npm, inquirer, FS</p>
                </div>
            </div>
        </div>
            </div>
    </div>
</div>
    </div>
  );
}