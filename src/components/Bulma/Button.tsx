import React from "react";

interface Props {
  color?:
    | "primary"
    | "secondary"
    | "link"
    | "info"
    | "success"
    | "warning"
    | "danger";
  size?: "small" | "normal" | "medium" | "large";
  fullwidth?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  hovered?: boolean;
  focused?: boolean;
  active?: boolean;
  loading?: boolean;
  static?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = props => {
  const handleClassName = () => {
    // console.log(props);
    const classes = [
      `${props.color ? `is-${props.color}` : ""}`,
      `${props.size ? `is-${props.size}` : ""}`,
      `${props.fullwidth ? "is-fullwidth" : ""}`,
      `${props.outlined ? "is-outlined" : ""}`,
      `${props.rounded ? "is-rounded" : ""}`,
      `${props.hovered ? "is-hovered" : ""}`,
      `${props.focused ? "is-focused" : ""}`,
      `${props.active ? "is-active" : ""}`,
      `${props.loading ? "is-loading" : ""}`,
      `${props.static ? "is-static" : ""}`
    ];
    console.log(classes);
    return classes.join(" ");
  };

  return (
    <button className={`button ${handleClassName()}`} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
