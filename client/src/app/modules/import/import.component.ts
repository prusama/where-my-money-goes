import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ImportType} from './enums/import-type.enum';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ImportTypeOption} from './model/import-type-option.model';
import {filter} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

const IMPORT_OPTIONS = [
  { label: 'Single transaction', value: ImportType.SINGLE_ENTRY },
  { label: 'Import month', value: ImportType.MONTH },
  { label: 'Import year', value: ImportType.YEAR },
];

@Component({
  selector: 'app-import',
  standalone: false,
  templateUrl: './import.component.html',
  styleUrl: './import.component.scss'
})
export class ImportComponent implements OnInit {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);
  #destroyRef = inject(DestroyRef);

  importOptions: Array<ImportTypeOption> = IMPORT_OPTIONS;
  selectedImport: ImportType | string | undefined = ImportType.SINGLE_ENTRY;

  ngOnInit() {
    this.selectedImport = this.#getTypeFromRoute();
    this.#router.events
      .pipe(
        takeUntilDestroyed(this.#destroyRef),
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.selectedImport = this.#getTypeFromRoute();
      })
  }

  changeType(importType: ImportTypeOption): void {
    this.#router.navigate([importType.value], {
      relativeTo: this.#activatedRoute
    })
  }

  #getTypeFromRoute(): string | undefined {
    return this.#activatedRoute.snapshot.firstChild?.url[0]?.path;
  }
}
