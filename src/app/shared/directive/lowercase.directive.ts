import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor(private _eleRef : ElementRef, private _render : Renderer2) { }

  @HostListener('keyup')
  onSearch(){
    let val: string = this._render.selectRootElement(this._eleRef.nativeElement).value
    this._render.selectRootElement(this._eleRef.nativeElement).value = val.toLowerCase()
  }

}
