import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  error(message: string) {
    this.toastr.error('', message, {
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  success(message: string) {
    this.toastr.success('', message, {
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }
}
