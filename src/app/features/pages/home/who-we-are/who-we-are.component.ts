import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  imports: [],
  template: `
    <section id="about">
      <div class="home-about-layout home-columns home-content-panel home-copy-block">
        <div class="home-about-column home-column">
          <h2>Who we are</h2>
        </div>
        <div class="home-about-column home-column">
          <h3>• As a global scouting agency, we specialize in discovering and promoting talent from diverse
            backgrounds, celebrating each individual’s unique beauty.</h3>
          <h3>• We provide structured access to global opportunities, acting as intermediaries between agencies to
            secure top-tier placements.</h3>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #about {
      align-items: center;
      background-color: var(--bg);
      background-image: var(--background-auras-europe);
      background-position: center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      text-align: center;
    }

    #about .home-about-layout {
      padding: 80px 20px;
    }

    #about .home-about-column {
      line-height: inherit;
    }
  `],
})
export class AboutUs {

}