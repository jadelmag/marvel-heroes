import TextField from "@mui/material/TextField";
import "./menu.scss";

export interface UIMenuProps {
  id: string;
  inputRef: React.Ref<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
  label?: React.ReactNode;
  variant: "outlined" | "filled" | "standard";
  fullWidth: boolean;
  boxWidth?: string;
  results: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const UIMenu: React.FC<UIMenuProps> = ({
  id,
  inputRef,
  placeholder,
  label,
  variant,
  fullWidth,
  results,
  onChange,
  onKeyUp,
}): JSX.Element => {
  return (
    <div className="menu">
      <TextField
        id={id}
        inputRef={inputRef}
        className="menu__box__textfield"
        placeholder={placeholder}
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />

      <span className="menu__box__results">{results} RESULTS</span>
    </div>
  );
};

export default UIMenu;
