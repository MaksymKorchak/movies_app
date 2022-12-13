import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const Settings = () => {
    return (
        <Box sx={{height: '100vh'}}>
            <Typography variant="h4">
                <FormattedMessage id="navigation.settings.headline"/>
            </Typography>
            <Typography variant="subtitle2">
                <FormattedMessage id="navigation.settings.additional_text"/>
            </Typography>
        </Box>
    )
};

export default Settings;