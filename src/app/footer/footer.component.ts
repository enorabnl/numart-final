import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isFooterVisible: boolean = false; // Ajoutez cette ligne pour définir la propriété isFooterVisible

  constructor() {
    window.addEventListener('scroll', () => {
      const footer = document.querySelector('.footer');
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;

      if (scrollPosition >= documentHeight) {
        this.isFooterVisible = true; // Définissez isFooterVisible sur true lorsque le footer doit être visible
      } else {
        this.isFooterVisible = false; // Définissez isFooterVisible sur false lorsque le footer ne doit pas être visible
      }
    });
  }
}
