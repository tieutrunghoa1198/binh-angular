export interface CommonDialogDataType {
  title: string;
  content: string;
  hasButton: boolean;
  button?: DialogButtonCustom;
  classCSS?: string;
  styleCSS?: string;
}

export interface DialogButtonCustom {
  confirm: string;
  cancel: string;
  styleCSS?: string;
}
