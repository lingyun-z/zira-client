import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastColorOption } from 'app/core/types';
@Injectable()
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  show(msg: string, status: ToastColorOption, duration: number): void {
    this.snackBar.open(msg, 'x', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: duration,
      panelClass: `toast-panel-${status}`,
    });
  }

  public hide(): void {
    this.snackBar.dismiss();
  }
}
