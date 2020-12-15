import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  exports: [LibraryComponent],
  providers: [{ provide: 'example', useFactory: () => $localize`Translated` }],
})
export class LibraryModule {}
