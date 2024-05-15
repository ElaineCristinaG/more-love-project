import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { JuridicalComponent } from '../juridical/juridical.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    HeaderComponent,
    WhoWeAreComponent,
    JuridicalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
