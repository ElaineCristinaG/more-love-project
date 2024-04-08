import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FooterComponent, NgOptimizedImage,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
