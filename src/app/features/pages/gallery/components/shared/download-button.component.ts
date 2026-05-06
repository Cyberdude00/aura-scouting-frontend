import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'gallery-download-button',
  standalone: true,
  imports: [NgIf],
  template: `
    <button
      [disabled]="disabled"
      class="button-red"
      (click)="onClick($event)"
      [attr.aria-busy]="loading ? 'true' : null"
    >
      <ng-content></ng-content>
      <span *ngIf="loading" class="spinner"></span>
    </button>
  `,
  styles: [`
    button.button-red {
      position: relative;
    }

    button.button-red .spinner {
      animation: spin 1s linear infinite;
      border: 2px solid var(--bg);
      border-radius: 50%;
      border-top: 2px solid var(--accent);
      display: inline-block;
      height: 16px;
      margin-left: 8px;
      vertical-align: middle;
      width: 16px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class GalleryDownloadButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() onClick: (event: Event) => void = () => {};
}