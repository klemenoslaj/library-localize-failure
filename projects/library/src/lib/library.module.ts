import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';

export function provideExample() {
  return $localize`Translated`;
}

@NgModule({
  declarations: [LibraryComponent],
  exports: [LibraryComponent],
  providers: [{ provide: 'example', useFactory: provideExample }],
})
export class LibraryModule {}
