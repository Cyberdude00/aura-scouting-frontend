import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
<footer>
  <!-- &copy; 2025 Aura Scouting. All rights reserved. -->

  <p lang="zh" class="chinese-text">
    © 2025 Aura Scouting。保留所有权利。
  </p>
</footer>
  `,
  styles: `
    footer {
      background-color: var(--text);
      color: var(--bg);
      font-family: var(--font-main);
      font-size: 0.9rem;
      font-weight: 300;
      padding: 15px;
      position: relative;
      text-align: center;
    }

    footer .chinese-text {
      font-family: var(--font-main);
      font-size: 0.9rem;
      font-weight: 200;
      margin-top: 8px;
      opacity: 0.75;
    }
  `,
})
export class Footer {

}