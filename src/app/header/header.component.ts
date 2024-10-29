import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'ngt-header',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, CardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = '';
  @ContentChild('projectedTitle', { static: false }) projectedTitle!: ElementRef;
  @ContentChild('projectedParagraph', { static: false }) projectedParagraph!: ElementRef;

  changeText(newText: string) {
    this.title = newText;
  }

  ngAfterContentInit() {
    if (this.projectedTitle && this.projectedParagraph) {
      console.log('Title:', this.projectedTitle.nativeElement.innerText);
      console.log('Projected:', this.projectedParagraph.nativeElement.innerText);
    }

    this.projectedTitle.nativeElement.textContent = 'New title';
    this.projectedParagraph.nativeElement.textContent = 'New paragraph';
  }

  isCardVisible = false;
  activeCard: string | null = null;

  toggleCard(card: string) {
    if (this.activeCard === card) {
      this.isCardVisible = false;
      this.activeCard = null;
    } else {
      this.activeCard = card;
      this.isCardVisible = true;
    }
  }
}
