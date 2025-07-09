import { Component } from '@angular/core';
import { Education, Introduction } from '../../services/data.model';
import { DataService } from '../../services/data.service';
import { ButtonComponent } from '../../shared-lib/components/button/button.component';
import { CountUpComponent } from '../../shared-lib/components/count-up/count-up.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonComponent, CountUpComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  downloadButtonText: string = 'Download CV';
  introduction: Introduction | undefined;
  introEducation: Education[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.introduction = this.dataService.getIntroductions();
    this.introEducation = this.dataService.getIntroEducations();
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = '../assets/pdf/Donato-Bello-CV.pdf';
    link.download = 'Donato-Bello-CV.pdf';
    link.click();
  }
}
