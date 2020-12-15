import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'lib-library',
  template: ` <p>{{ _localizedExample }}</p> `,
  styles: [],
})
export class LibraryComponent implements OnInit {
  message = $localize`Library works`;

  constructor(@Inject('example') readonly _localizedExample: string) {}

  ngOnInit(): void {}
}
