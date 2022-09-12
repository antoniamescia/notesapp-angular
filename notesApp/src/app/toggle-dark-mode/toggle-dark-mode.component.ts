import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'dark-mode',
  templateUrl: './toggle-dark-mode.component.html',
  styleUrls: ['./toggle-dark-mode.component.css']
})
export class ToggleDarkModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DarkMode(): void {
    let body = document.body;
    body.classList.remove("bg-white");
    body.classList.add("bg-dark");
    let cartas = document.getElementsByClassName("card");
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].classList.remove("bg-white");
      cartas[i].classList.add("bg-secondary");
      cartas[i].classList.remove("text-dark");
      cartas[i].classList.add("text-white");
    }
    let modales = document.getElementsByClassName("modal-content");
    for (let i = 0; i < modales.length; i++) {
      modales[i].classList.remove("bg-white");
      modales[i].classList.add("bg-dark");
      modales[i].classList.remove("text-dark");
      modales[i].classList.add("text-white");
        
    }
    let nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
      nav[i].classList.remove("text-dark");
      nav[i].classList.add("text-light");
    }
    let nav2 = document.getElementsByClassName("navbar");
    for (let i = 0; i < nav2.length; i++) {
      nav2[i].classList.remove("bg-white");
      nav2[i].classList.add("bg-secondary");
    }
    
    //this.getElementById('labelNocturno').classList.remove("text-dark");
    //this.getElementById('labelNocturno').classList.add("text-white");
    
  }
  
  LightMode(): void{
    let body = document.body;
    body.classList.remove("bg-dark");
    body.classList.add("bg-white");
    let cartas = document.getElementsByClassName("card");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("bg-secondary");
        cartas[i].classList.add("bg-white");
        cartas[i].classList.remove("text-white");
        cartas[i].classList.add("text-dark");
    }
    let modales = document.getElementsByClassName("modal-content");
    for (let i = 0; i < modales.length; i++) {
        modales[i].classList.remove("bg-dark");
        modales[i].classList.add("bg-white");
        modales[i].classList.remove("text-white");
        modales[i].classList.add("text-dark");
    }
    let nav = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove("text-white");
        nav[i].classList.add("text-dark");
    }
    let nav2 = document.getElementsByClassName("navbar");
    for (let i = 0; i < nav2.length; i++) {
        nav2[i].classList.remove("bg-secondary");
        nav2[i].classList.add("bg-white");
    }
    //.getElementById('labelNocturno').classList.remove("text-white");
    //getElementById('labelNocturno').classList.add("text-dark");
  }



  Tog(): void {
    /*if(this.getElementById('flexSwitchCheckDefault').checked){
      this.DarkMode();
      this.getElementById('flexSwitchCheckDefault').check;
    }else{
      this.LightMode();
    }*/
  }

}
