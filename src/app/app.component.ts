import { TransferenciaService } from './servicos/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vinibank';

  constructor(private service: TransferenciaService){}



}
