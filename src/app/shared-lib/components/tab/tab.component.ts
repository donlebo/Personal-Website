import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() tabs: string[] = [];
  @Input() selectedIndex: number = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  onTabChange(index: number) {
    this.selectedIndex = index;
    this.selectedIndexChange.emit(index);
  }
}
