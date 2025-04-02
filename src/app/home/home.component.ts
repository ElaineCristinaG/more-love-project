import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    FooterComponent,
    HeaderComponent,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // const myCarouselElement = document.querySelector('#myCarousel')

  // const carousel = new bootstrap.Carousel(myCarouselElement, {
  //   interval: 2000,
  //   touch: false
  // })
}
