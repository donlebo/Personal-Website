import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() isLink: boolean = false;
  @Input() href?: string;
  @Input() text = '';
  @Input() icon?: string;
  @Input() variant: 'light' | 'solid' = 'solid';
}
