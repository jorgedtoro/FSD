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
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Angular', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper mi nec nisi feugiat consectetur. Quisque mattis, erat ac aliquet dignissim, leo neque lacinia nisi, eget suscipit odio velit auctor urna. Pellentesque rhoncus faucibus ex, at tempor odio dignissim ac. In scelerisque, elit et aliquet mattis, sapien mauris ultrices lorem, ac scelerisque mi sapien ac nisi. Maecenas et mauris eu nulla aliquam lacinia. Nulla augue justo, vulputate quis pharetra vel, elementum vitae diam. Morbi interdum enim at augue consectetur porttitor. Sed luctus metus sed leo placerat pulvinar. Mauris ac posuere orci. Cras sollicitudin sollicitudin lorem, ut blandit velit pellentesque eget. Nunc cursus cursus arcu sagittis rutrum. Nam ut quam condimentum, molestie quam pretium, lacinia diam. Nam efficitur ligula id ligula convallis hendrerit. Sed tempus, nisl non pulvinar consequat, velit purus vehicula sapien, et dictum enim urna ut purus.', fecha:'20/06/2022'},
      {nombre: 'Jorge', apellido:'de Toro',imagen:"assets/code-wrapper.png", titulo:'Actividad 4. Vanilla JS', noticia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper mi nec nisi feugiat consectetur. Quisque mattis, erat ac aliquet dignissim, leo neque lacinia nisi, eget suscipit odio velit auctor urna. Pellentesque rhoncus faucibus ex, at tempor odio dignissim ac. In scelerisque, elit et aliquet mattis, sapien mauris ultrices lorem, ac scelerisque mi sapien ac nisi. Maecenas et mauris eu nulla aliquam lacinia. Nulla augue justo, vulputate quis pharetra vel, elementum vitae diam. Morbi interdum enim at augue consectetur porttitor. Sed luctus metus sed leo placerat pulvinar. Mauris ac posuere orci. Cras sollicitudin sollicitudin lorem, ut blandit velit pellentesque eget. Nunc cursus cursus arcu sagittis rutrum. Nam ut quam condimentum, molestie quam pretium, lacinia diam. Nam efficitur ligula id ligula convallis hendrerit. Sed tempus, nisl non pulvinar consequat, velit purus vehicula sapien, et dictum enim urna ut purus.', fecha:'30/06/2022'}
      
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
        <div class="new-title">
          <h2 class="new-title__h2">${n.titulo}</h2>
        </div>
        <div class="new-content">
          <p class="new-content__p">${n.noticia}</p>
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
