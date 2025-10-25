"use client";

import type { FC } from "react";
import type { SelectChangeEvent } from "@mui/material";

import { useColorScheme } from "@mui/material/styles";

import { FormControl, Select, MenuItem } from "@mui/material";

import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type TypeMode = "light" | "dark" | "system";

/**
 * SwitcherTheme — a theme mode selector for the website:
 * - Allows the user to switch between "light", "dark", or "system" theme modes.
 */
const SwitcherTheme: FC = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return;

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as TypeMode);
  };

  return (
    <FormControl>
      <Select
        value={mode}
        aria-label="edit-theme-site"
        variant="standard"
        MenuProps={{
          PaperProps: {
            sx: {
              marginLeft: "6px",
              marginTop: "5px",
            },
          },
        }}
        onChange={handleChange}
        sx={{
          "& .MuiSelect-icon": {
            display: "none",
          },
          "&.MuiInput-underline::before": {
            content: "none",
            borderBottom: "none",
            display: "none",
          },
          "&.MuiInput-underline::after": {
            content: "none",
            borderBottom: "none",
            display: "none",
          },
          "& .MuiSelect-select": {
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px !important",
            width: "39px",
          },
        }}
      >
        <MenuItem value="light">
          <LightModeIcon />
        </MenuItem>
        <MenuItem value="dark">
          <DarkModeIcon />
        </MenuItem>
        <MenuItem value="system">
          <SettingsBrightnessIcon />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SwitcherTheme;
