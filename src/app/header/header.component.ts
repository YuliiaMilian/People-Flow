import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ngt-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
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

}

