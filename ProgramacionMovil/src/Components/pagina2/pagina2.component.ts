import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }

  atras(){
    this.nav.navigate([''])
  }

}
