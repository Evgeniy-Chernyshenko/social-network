import styles from "./Button.module.css";

export const Button = ({
  className,
  ...restProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const classNames = [styles.item, ...(className ? [className] : [])].join(" ");

  return <button className={classNames} {...restProps}></button>;
};
