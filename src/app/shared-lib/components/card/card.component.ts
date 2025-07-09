import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() date!: string;
  @Input() text!: string;
  @Input() previewAction?: boolean = false;
  @Output() previewClick = new EventEmitter<void>();
}
