import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
  public textSintese: string = "Somos uma organização não governamental dedicada a reunir mães de crianças autistas, fornecendo orientação, apoio e assistência em seus desafios diários. Nosso objetivo é capacitar e educar essas mães, fornecendo-lhes conhecimentos e recursos necessários para entender e lidar com o autismo de seus filhos. Além disso, organizamos eventos e atividades especialmente voltados para crianças autistas, promovendo seu bem-estar e inclusão na sociedade. Juntos, estamos construindo uma comunidade solidária e capacitada, onde todas as crianças, independentemente de suas necessidades especiais, possam florescer e alcançar seu pleno potencial."
  public textHistory2: string = "Uma mãe que lutou e luta por todos os direitos e oportunidades que sua filha merece ter. Vendo a necessidade de ampliar e impactar outras famílias, criou um grupo de wathasap e acabou conhecendo outras realidades além do autismo. Então sentiu que precisava consolidar a sua ideia de ajuda e acolhimento junto às outras familias.n"
  public textHistory1: string = "O Projeto O Amor foi idealizado por uma mãe , a Deice, como muitas mães atípicas, na hora do recebimento do diagnóstico de autismo da sua filha mais nova entrou em desespero, se sentiu sozinha, se sentiu sem chão, sabia que o que ela tinha como resposta a esse turbilhão de sentimentos de medo, insegurança e receio era o AMOR..."
  public textHistory3: string = "Foi então que se uniu com mais quatro mulheres e mães com a mesma ânsia eobjetivo: de ajudar e transformar as vidasdas pessoas e crianças com TEA : Andréa,Erica, Fabiana e Caru e fundaram aASSOCIAÇÃO. O projeto foi saindo dasredes sociais e concretizando como oPOJETO O AMOR."
  public textDiretory: string[]= ['Carolina Orlando dos Santos',' Erika Fabiana Francisco','Fabiana de Carvalho Cavalli',' Maria Deice da Silva','Andréa Jamaica Alves Mesquita','Eugênia Maria Alves','Adriana Claudia Gonsalez']
}
