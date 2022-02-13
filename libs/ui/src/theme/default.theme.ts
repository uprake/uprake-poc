import { create, ThemeResolver } from 'twind';

export class DefaultTheme {
  private constructor() {
    const ui = create();
    DefaultTheme.instance = ui.tw.theme;
  }

  private static instance: ThemeResolver;

  public static resolver() {
    if (!DefaultTheme.instance) {
      new DefaultTheme();
    }
    return DefaultTheme.instance;
  }
}
