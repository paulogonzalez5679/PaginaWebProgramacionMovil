import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("inicia la pagina")

  }

  navegacion1()
  {
    this.router.navigate(['web2'])
  }



  navPg2()
  {
    this.router.navigate(['pagina2']);
  }
  navPg3()
  {
    this.router.navigate(['pagina3']);
  }

}
