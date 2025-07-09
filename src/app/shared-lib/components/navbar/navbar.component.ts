import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Section } from '../../../services/data.model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  sections: Section[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sections = this.dataService.getSections();
    console.log(this.sections);
  }

  scrollToSection(id: string): void {
    if (id === 'home') {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // per browser moderni
      document.body.scrollTo({ top: 0, behavior: 'smooth' }); // per compatibilità
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
