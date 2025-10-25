"use client";

import type { FC, Dispatch, SetStateAction } from "react";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { InputProps, SvgIconTypeMap } from "@mui/material";

import { useState } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Fade,
  FormHelperText,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface PropsInputField extends Pick<InputProps, "name" | "id" | "disabled"> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  StartIcon: OverridableComponent<SvgIconTypeMap>;
  isPassword?: boolean;
  helperText?: string;
  isError?: boolean;
}

/**
 * InputField — a controlled input field with an icon at the beginning,
 * a clear button, and an optional password visibility toggle
 *
 * @param label - label text
 * @param value - current value (state)
 * @param setValue - setState for value
 * @param StartIcon - icon on the left (MUI OverridableComponent)
 * @param isPassword - if true — visibility toggle button is displayed
 * @param helperText - tooltip/error text below the field
 * @param isError - highlight input in error
 */
const InputField: FC<PropsInputField> = ({
  label,
  value,
  setValue,
  StartIcon,
  isPassword = false,
  helperText = " ",
  isError = false,
  disabled = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      error={isError}
      className="zxc"
      sx={{ minWidth: "220px", width: "100%" }}
    >
      <InputLabel
        htmlFor={`InputField-${props.id}`}
        sx={{
          fontSize: "1.15rem",
          minWidth: "220px",
          width: "100%",
          fontWeight: 500,
        }}
      >
        {label}
      </InputLabel>
      <Input
        {...props}
        disabled={disabled}
        id={`InputField-${props.id}`}
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        sx={{ fontSize: "1.15rem" }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "var(--mui-palette-text-primary)" }}
          >
            <StartIcon color={isError ? "error" : "inherit"} />
          </InputAdornment>
        }
        endAdornment={
          <Fade in={!!value} timeout={550}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              {isPassword && (
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  size="small"
                  color="inherit"
                >
                  {showPassword ? (
                    <VisibilityOffIcon color="inherit" />
                  ) : (
                    <VisibilityIcon color="inherit" />
                  )}
                </IconButton>
              )}

              <IconButton
                onClick={() => setValue("")}
                size="small"
                color="inherit"
                disabled={disabled}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </Fade>
        }
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default InputField;
