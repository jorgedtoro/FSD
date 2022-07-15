import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementRefImg: ElementRef) {
    console.log(this.elementRefImg.nativeElement) //recibo el objeto img del html
   }
   @HostListener('error') //escuchador que escucha un error de un elemento html renderizado.
   onError(){
    //si la ruta de la img es errónea, se carga esta img default. Sustituimos el src.
    this.elementRefImg.nativeElement.src = 'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png'
   }
}
