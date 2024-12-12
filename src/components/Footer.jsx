import "../styles/Footer.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import copy from "copy-to-clipboard";

function Footer({ colorValue }) {
  const copyToClipboard = () => {
    copy(colorValue);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      color: "#2b283a",
      padding: "12px",
      boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.10)",
      fontSize: 12,
    },
  }));

  return (
    <LightTooltip title={`Copy ${colorValue} to clipboard`} placement="top">
      <span onClick={copyToClipboard}>{colorValue}</span>
    </LightTooltip>
  );
}

export default Footer;
