import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  numero:any;
  nombre_variable:number=0;
  suma:number=0;
  vector: string[] = [];
  suma2:number=0;

  ngOnInit(): void {
    this.numero=1;
    this.vector= [
      "Iron Man",
      "Spiderman",
      "Thor",
      "Hulk",
      "Black Widow",
      "Hawk Eye"
  ];

  this.total();
  // this.total2(sum:number);
  }


  navegar(){
    this.router.navigate(['web2'])
  }

  total()
  {
    let numero1:number=0;
    let numero2:number=2;

    this.suma= numero1+numero2;
    console.log(this.suma);


    this.suma2=this.suma+5;
    console.log(this.suma2);


    this.total2(this.suma2)

  }

  total2(sum:number)
  {
    console.log(sum*2);


  }


  navegacion(){

    this.router.navigate([''])
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
