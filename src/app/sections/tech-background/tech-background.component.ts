import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { SkillCategory } from '../../services/data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-background',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatChipsModule, CommonModule],
  templateUrl: './tech-background.component.html',
  styleUrl: './tech-background.component.css',
})
export class TechBackgroundComponent {
  skillCategories: SkillCategory[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skillCategories = this.dataService.getSkills();
  }
}
