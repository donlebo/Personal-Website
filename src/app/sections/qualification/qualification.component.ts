import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { QualificationCard } from '../../services/data.model';
import { DataService } from '../../services/data.service';
import { CardComponent } from '../../shared-lib/components/card/card.component';
import { PreviewDialogComponent } from '../../shared-lib/components/preview-dialog/preview-dialog.component';
import { TabComponent } from '../../shared-lib/components/tab/tab.component';

@Component({
  selector: 'app-qualification',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    PreviewDialogComponent,
    TabComponent,
    CardComponent,
    CommonModule,
  ],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css',
})
export class QualificationComponent {
  showModal = false;
  tabLabels = ['Education', 'Work'];
  educationCards: QualificationCard[] = [];
  workCards: QualificationCard[] = [];
  selectedIndex = 0;
  selectedPreviewCard: QualificationCard | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.educationCards = this.dataService.getEducationQualifications();
    this.workCards = this.dataService.getWorkQualifications();
  }

  openPreview(card: QualificationCard) {
    this.selectedPreviewCard = card;
  }

  closePreview() {
    this.selectedPreviewCard = null;
  }
}
