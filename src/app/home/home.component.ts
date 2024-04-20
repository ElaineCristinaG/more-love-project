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

  public textSintese: string = "Somos uma organização não governamental dedicada a reunir mães de crianças autistas, fornecendo orientação, apoio e assistência em seus desafios diários. Nosso objetivo é capacitar e educar essas mães, fornecendo-lhes conhecimentos e recursos necessários para entender e lidar com o autismo de seus filhos. Além disso, organizamos eventos e atividades especialmente voltados para crianças autistas, promovendo seu bem-estar e inclusão na sociedade. Juntos, estamos construindo uma comunidade solidária e capacitada, onde todas as crianças, independentemente de suas necessidades especiais, possam florescer e alcançar seu pleno potencial."

}
