import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { QualificationComponent } from '../qualification/qualification.component';
import { TechBackgroundComponent } from '../tech-background/tech-background.component';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    WelcomeSectionComponent,
    AboutMeComponent,
    TechBackgroundComponent,
    QualificationComponent,
    ContactsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
