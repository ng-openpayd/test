import { Directive, Attribute, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUiImageLoaded]'
})
export class UiImageLoadedDirective {

  constructor( 
    @Attribute('loaderSrc') public loaderSrc: string,
    @Attribute('onErrorSrc') public onErrorSrc: string,
    private renderer: Renderer2,
    private el: ElementRef) {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.loaderSrc);
  }
  // private renderEnded() {
  //   this.renderer.setAttribute(this.el.nativeElement, 'src', this.el.nativeElement.src);
  // }
  // private renderStarted() {
  //   requestAnimationFrame(this.renderEnded);
  // }
  // private fullyLoaded() {
  //   requestAnimationFrame(this.renderStarted);
  // }
  @HostListener('load') onLoad() {
    this.el.nativeElement.classList.add('image-loaded');
    this.el.nativeElement.classList.remove('card-image');
    //this.fullyLoaded();
  }
  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.onErrorSrc);
    this.el.nativeElement.classList.add('image-loaded');
    this.el.nativeElement.classList.remove('card-image');
  }
}
