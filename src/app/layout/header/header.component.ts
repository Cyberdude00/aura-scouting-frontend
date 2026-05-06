import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  template: `
    <nav>
      <ul>
        <li><a (click)="scrollTo('about')" style="cursor: pointer;">Who we are</a></li>
        <li><a (click)="scrollTo('services')" style="cursor: pointer;">Our services</a></li>
        <li><a (click)="scrollTo('model-submission')" style="cursor: pointer;">Submission</a></li>
        <li><a (click)="scrollTo('contact')" style="cursor: pointer;">Contact us</a></li>
      </ul>
    </nav>
  `,
  styles: `
    nav {
      background: var(--text);
      color: var(--accent);
      font-family: var(--font-main);
      padding: 10px 0;
      position: fixed;
      top: 0;
      transition: background-color 0.3s ease;
      width: 100%;
      z-index: 1000;
    }

    nav ul {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 24px;
      justify-content: center;
      list-style: none;
      margin: 0;
      padding: 0 12px;
      text-align: center;
    }

    nav ul li {
      display: inline-flex;
      margin: 0 4%;
    }

    nav ul li a {
      font-weight: normal;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    nav ul li a:hover {
      color: var(--text);
    }

    nav a:focus {
      outline: 3px solid var(--accent);
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      nav {
        padding: 8px 0;
      }

      nav ul {
        gap: 6px 0;
      }

      nav ul li {
        flex: 0 0 50%;
        justify-content: center;
        margin: 0;
      }
    }
  `,
})
export class Navigation {
    scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}