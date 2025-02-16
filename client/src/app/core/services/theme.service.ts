import {Injectable} from '@angular/core';

const DARK_MODE_ENABLED_KEY = 'darkModeEnabled';
const DARK_MODE_CLASS = 'dark';
const THEME_TARGET_ELEMENT = 'html';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.#initTheme();
  }

  toggleDarkMode(): void {
    this.setTheme(!this.isDarkModeEnabled());
  }

  setTheme(setDarkMode: boolean): void {
    const element = document.querySelector(THEME_TARGET_ELEMENT);
    localStorage.setItem(DARK_MODE_ENABLED_KEY, setDarkMode.toString());

    if (setDarkMode) {
      element?.classList.add(DARK_MODE_CLASS);
    } else {
      element?.classList.remove(DARK_MODE_CLASS);
    }
  }

  isDarkModeEnabled(): boolean {
    const element = document.querySelector(THEME_TARGET_ELEMENT);
    return !!element?.classList.contains(DARK_MODE_CLASS);
  }

  #initTheme(): void {
    const setDarkMode = localStorage.getItem(DARK_MODE_ENABLED_KEY) === 'true';
    this.setTheme(setDarkMode);
  }
}
