import { createElement } from "react";
import { WrappedFieldProps } from "redux-form";
import styles from "./FormControl.module.css";

export const FormControl = ({
  input,
  meta,
  className,
  componentType,
  labelText,
  ...restProps
}: WrappedFieldProps & {
  componentType: "textarea" | "input";
  labelText?: string;
  className?: string;
  [key: string]: any;
}) => {
  const hasError = meta.error && meta.touched;
  const classNames = [
    styles[componentType],
    ...(className ? [className] : []),
    ...(hasError ? [styles.errorField] : []),
  ].join(" ");
  const hasLabel =
    componentType === "input" && restProps.type === "checkbox" && labelText;

  const createdElement = createElement(componentType, {
    ...input,
    ...restProps,
    className: classNames,
  });

  return (
    <>
      {hasLabel && (
        <label>
          {createdElement} {labelText}
        </label>
      )}
      {!hasLabel && createdElement}
      {hasError && <div className={styles.errorContainer}>{meta.error}</div>}
    </>
  );
};
