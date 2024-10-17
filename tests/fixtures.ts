/** Use to override component namespace prop. */
export const classNamespace = 'test-namespace';

/**
 * Checks if stringified component contains the test classNamespace in its class list.
 * @param value The stringified component.
 * @returns True if the component contains the test classNamespace, false otherwise.
 */
export const hasClassNamespace = (value: string): boolean => {
  const re = new RegExp(/(?<=class=".*)(?:test-namespace)/, 'g');
  return re.test(value);
};

/** Use to add a list of classes to classList prop. */
export const classList = ['class1', 'class2'];

/**
 * Checks if stringified component contains the test values from classList in its class list.
 * @param value The stringified component.
 * @returns True if the component contains the test values in classList, false otherwise.
 */
export const hasClassList = (value: string): boolean => {
  const re = new RegExp(
    /(?<=class=".*)(?:class1.*class2)|(?:class2.*class1)/,
    'g',
  );
  return re.test(value);
};
