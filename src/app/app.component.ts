import { CovidService } from './servi/covid.service';
import { Component, NgModule } from '@angular/core';
import { Covid } from './module/covid';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 dados: Covid;
 logo: any = '/assets/img/logo.svg';
 unopar: any = '/assets/img/unopar.png';
  git: any = '/assets/img/giygub.png';
  gif: any = '/assets/img/tenor.gif';

constructor(private covidService: CovidService) {}


// tslint:disable-next-line: use-lifecycle-interface
ngOnInit(): void {
  this.carregardados();
}

carregardados(){
  this.covidService.obterdados()
  .then(dados => this.dados = dados );
  }


}
