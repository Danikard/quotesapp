import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor (private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.highlight("highlight")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.highlight("None")
  }

  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor='bisque';

  }

}

