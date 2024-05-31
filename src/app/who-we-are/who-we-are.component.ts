import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
  public mission: string = 'Projeto criado para acolher, orientar e conscientizar famílias de pessoas com deficiências sobre seus direitos. Mostrar que é possivel sair do luto do laudo à luta por direitos e resgatar sentimentos de +AMOR.';
  public vision: string = 'Educar para a inclusão em diversos âmbitos da sociedade, promovendo ações de conscientização sobre direitos de pessoas com deficiências, ações sociais promotoras de acessibilidade.';
  public values:string = 'Ética, conscientização, transparência, inclusão, cooperação, motivação, igualdade, adaptabilidade e responsabilidade social.';
  public textSintese1: string = "Somos uma organização não governamental dedicada a reunir mães de crianças autistas, fornecendo orientação, apoio e assistência em seus desafios diários.";
  public textSintese2: string ="Nosso objetivo é capacitar e educar essas mães, fornecendo-lhes conhecimentos e recursos necessários para entender e lidar com o autismo de seus filhos.";
  public textSintese3: string = " Além disso, organizamos eventos e atividades especialmente voltados para crianças autistas, promovendo seu bem-estar e inclusão na sociedade. ";
  public textSintese4: string = "Juntos, estamos construindo uma comunidade solidária e capacitada, onde todas as crianças, independentemente de suas necessidades especiais, possam florescer e alcançar seu pleno potencial."
  public textHistory1: string = "O Projeto O Amor foi idealizado por uma mãe , a Deice, como muitas mães atípicas, na hora do recebimento do diagnóstico de autismo da sua filha mais nova entrou em desespero, se sentiu sozinha, se sentiu sem chão, sabia que o que ela tinha como resposta a esse turbilhão de sentimentos de medo, insegurança e receio era o AMOR..."
  public textHistory2: string = "Uma mãe que lutou e luta por todos os direitos e oportunidades que sua filha merece ter. Vendo a necessidade de ampliar e impactar outras famílias, criou um grupo de wathasap e acabou conhecendo outras realidades além do autismo. Então sentiu que precisava consolidar a sua ideia de ajuda e acolhimento junto às outras familias."
  public textHistory3: string = "Foi então que se uniu com mais quatro mulheres e mães com a mesma ânsia e objetivo: de ajudar e transformar vida de pessoas e crianças com TEA : Andréa,Erica, Fabiana e Caru e fundaram aASSOCIAÇÃO. O projeto foi saindo das redes sociais e concretizando como"
  public textDiretory: string[]= ['Carolina Orlando dos Santos',' Erika Fabiana Francisco','Fabiana de Carvalho Cavalli',' Maria Deice da Silva','Andréa Jamaica Alves Mesquita','Eugênia Maria Alves','Adriana Claudia Gonsalez']
}
