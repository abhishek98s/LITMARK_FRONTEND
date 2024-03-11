import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputElementService {

  constructor() { }

  onFocus(element: ElementRef) {
    setTimeout(() => element.nativeElement.focus())
  }

  clearValue(element: ElementRef) {
    setTimeout(() => element.nativeElement.value = '')
  }
}
