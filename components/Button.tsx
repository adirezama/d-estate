import React, { Ref } from "react";

type ButtonProps = {
  classname: string;
  label: string;
  href?: string;
};

export const Button = React.forwardRef(
  ({ classname, label, href }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <a href={href}>
        <button ref={ref} className={classname}>
          {label}
        </button>
      </a>
    );
  }
);

Button.displayName = "Button";
