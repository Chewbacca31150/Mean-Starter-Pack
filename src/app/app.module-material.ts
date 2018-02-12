import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatInputModule, MatGridListModule, MatDialogModule, MatSnackBarModule],
})
export class AppModuleMaterial { }