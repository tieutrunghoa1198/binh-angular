import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../app.component";
import {CommonDialogDataType} from "./types/CommonDialogDataType";

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.scss']
})
export class CommonDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommonDialogDataType,
  ) {}

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close({ customData: 'hello'});
  }
}
