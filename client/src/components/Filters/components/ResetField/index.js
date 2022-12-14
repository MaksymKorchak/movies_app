import { Button } from "@mui/material";
import { FormattedMessage } from "react-intl";

export const ResetField = ({ onClick }) => {
  return (
    <Button variant="outlined" color="error" onClick={onClick} size="small">
      <FormattedMessage id="filters.reset"/>
    </Button>
  );
};
