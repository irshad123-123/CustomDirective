import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[BasicCss1]'
})
export class Highlighter1 implements OnInit{

    constructor(private _eleRef : ElementRef, private _render : Renderer2){}
    ngOnInit(): void {
        this._render.addClass(this._eleRef.nativeElement,'alert')
        this._render.addClass(this._eleRef.nativeElement,'alert-info')
        this._render.setStyle(this._eleRef.nativeElement,'color','black')
    }
}

@Directive({
    selector : '[BasicCss2]'
})
export class Highlighter2 implements OnInit{
    constructor(private _eleRef:ElementRef, private _render : Renderer2){}

    ngOnInit(): void {
        this._render.addClass(this._eleRef.nativeElement, 'alert')
        this._render.addClass(this._eleRef.nativeElement, 'alert-success')
    }
}

@Directive({
    selector: '[BasicCss3]'
})
export class Highlighter3 implements OnInit{
    constructor(private _eleRef : ElementRef, private _render : Renderer2){}
    ngOnInit(): void {
        this._render.addClass(this._eleRef.nativeElement, 'alert')
        this._render.addClass(this._eleRef.nativeElement, 'alert-warning')
    }
}

@Directive({
    selector : '[BasicCss4]'
})
export class Highlighter4 implements OnInit{
    constructor(private _eleRef : ElementRef, private _render : Renderer2){}
    ngOnInit(): void {
       this._render.addClass(this._eleRef.nativeElement,'alert') 
       this._render.addClass(this._eleRef.nativeElement,'alert-danger') 
    }
}

@Directive({
    selector : '[BasicCss5]'
})
export class Highlighter5 implements OnInit{
    constructor(private _eleRef : ElementRef, private _render : Renderer2){}
    ngOnInit(): void {
        this._render.addClass(this._eleRef.nativeElement, 'alert')
        this._render.addClass(this._eleRef.nativeElement, 'alert-primary')
    }
}