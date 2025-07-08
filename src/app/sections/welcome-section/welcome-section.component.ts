import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Presentation } from '../../services/data.model';
import { DataService } from '../../services/data.service';
import { ButtonComponent } from '../../shared-lib/components/button/button.component';
import { PreviewDialogComponent } from '../../shared-lib/components/preview-dialog/preview-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [MatIconModule, ButtonComponent, PreviewDialogComponent, CommonModule],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  buttonContactText: string = 'Contact me';
  presentation: Presentation | undefined;
  showDialog = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.presentation = this.dataService.getPresentation();
  }

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  scrollTo(element: string): void {
    const footerElement = document.getElementById(element);
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
