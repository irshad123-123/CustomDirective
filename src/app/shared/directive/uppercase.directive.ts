import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private _eleRef : ElementRef, private _renderRef : Renderer2) { }


  @HostListener('keyup')
  onSearch(){
    let val : string = this._renderRef.selectRootElement(this._eleRef.nativeElement).value
    this._renderRef.selectRootElement(this._eleRef.nativeElement).value = val.toUpperCase()
  }
}
