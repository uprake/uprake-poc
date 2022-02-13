import { create, ThemeResolver } from 'twind';
import { themeGenerator } from '.';

export class CurrentTheme {
  private constructor() {
    const ui = create({ theme: themeGenerator() });
    CurrentTheme.instance = ui.tw.theme;
  }

  private static instance: ThemeResolver;

  public static resolver() {
    if (!CurrentTheme.instance) {
      new CurrentTheme();
    }
    return CurrentTheme.instance;
  }
}
