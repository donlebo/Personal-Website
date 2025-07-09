import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { QualificationCard } from '../../../services/data.model';

@Component({
  selector: 'app-preview-dialog',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './preview-dialog.component.html',
  styleUrl: './preview-dialog.component.css',
})
export class PreviewDialogComponent {
  @Input() visible = false;
  @Input() card: QualificationCard | null = null;

  @Output() close = new EventEmitter<void>();

  onOverlayClick() {
    this.close.emit();
  }

  onCardClick(event: MouseEvent) {
    event.stopPropagation(); // evita di chiudere la modale cliccando dentro la card
  }
}
