declare module jasmine {
  interface Matchers<T> {
    toHaveCssClass(expected: any): boolean;
    toHaveAttribute(expected: any): boolean;
  }
}
