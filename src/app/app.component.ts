import { Component } from '@angular/core';
import {CommonDialogComponent} from "./common-dialog/common-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CommonDialogDataType, DialogButtonCustom} from "./common-dialog/types/CommonDialogDataType";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dialog';

  // animal: string;
  // name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(title: string): void {
    const data: CommonDialogDataType = {
      title,
      hasButton: true,
      content: 'ban co chac khong',
      button: {
        confirm: 'Xác nhận',
        cancel: 'Hủy',
      } as DialogButtonCustom
    }

    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '500px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}
