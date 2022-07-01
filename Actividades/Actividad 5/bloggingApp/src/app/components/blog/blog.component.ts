import { Component, OnInit } from '@angular/core';
import { Blog} from 'src/app/interfaces/blog.interface'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrNews:Blog[] = [];
  name:string="";
  apellido:string="";
  imagen:string="";
  titulo:string="";
  noticia:string="";
  fecha:string="";
  publicar:string="";

  constructor() { 
    this.arrNews = [
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Angular', noticia:'Lorem ipsum', fecha:'30/06/2022'},
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Actividad 4. Vanilla JS', noticia:'Se crea una actividad de carrito con Vanilla Js.', fecha:'30/06/2022'}
      
    ]
  }

  ngOnInit(): void {
    this.publicaNews();
  }

  publicaNews():void{
    this.publicar="";
    this.arrNews.forEach(n => {
      this.publicar += `
      <article class="listado-new">
        <div class="new-img">
        <img class="new-img__img" src="${n.imagen}" alt="" />
        </div>
        <div class="new-title">${n.titulo}</div>
        <div class="new-content">
          ${n.noticia}
        </div>
        <div class="new-alumn">
          <span>${n.nombre}</span> 
          <span>${n.apellido}</span>
        </div>
        <div class="new-date">${n.fecha}</div>
        </article>
      
      `
      return this.publicar;
    })
  }

  addNew(){
    
    let newNew: Blog = {
       nombre: this.name,
       apellido:this.apellido,
       imagen:this.imagen, 
       titulo:this.titulo, 
       noticia:this.noticia, 
       fecha:this.fecha
    };
    this.arrNews.push(newNew);
    this.publicaNews();
    console.log(this.arrNews)
     this.name= ""
     this.apellido= ""
     this.imagen= "" 
     this.titulo =""
     this.noticia=""
     this.fecha=""
    
  }

}
