export type BaseInput = {
  /**
   * ID of the input
   */
  id: string;
  /**
   * Label of the input
   */
  label: string;
  /**
   * Name of the input
   */
  name: string;
  /**
   * Helper text of the input. Can be an error message, for example.
   */
  helperText?: string;
  /**
   * Whether the input is read-only or not
   */
  readOnly?: boolean;
};
