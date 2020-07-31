import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 
    console.log("directiva llamada");
    //el.nativeElement.style.backgroundColor="gray"
  }

  @Input() color:string;

  @HostListener('mouseenter') mauseEntro(){
    //this.el.nativeElement.style.backgroundColor="gray";
    this.el.nativeElement.style.opacity="0.5";
    console.log(this.color);
    this.resaltar(this.color);
  }
  @HostListener('mouseleave') mauseFuera(){
    this.el.nativeElement.style.backgroundColor=null;
    this.resaltar(null);
    this.el.nativeElement.style.opacity="1";
  }

  private resaltar(color:string){
    this.el.nativeElement.style.color=color;
  }
}
