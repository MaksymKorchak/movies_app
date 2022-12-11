import { useState, useContext, useCallback } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
  Button,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";
import { LOCALES } from "../../constants";
import { AppContext } from "../../providers/context";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
	  dispatch({
		  type: 'setLocale',
		  locale
	  })
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link
          component={RouterLink}
          to="settings"
          sx={{ color: "inherit" }}
          underline="none"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <FormattedMessage id="navigation.settings"/>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', flexWrap: 'wrap'}}>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", flexGrow: 1 }}
            >
            	<FormattedMessage id="navigation.home"/>
            </Typography>
          </Link>
          <Box sx={{display: 'flex', gap: 1}}>
            <Button
			  variant="contained"
              sx={{ my: 2, color: "white" }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}>
             🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN
            </Button>
            <Button
			  variant="contained"
              sx={{ my: 2, color: "white" }}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}>
             🇺🇦 UA
            </Button>
            <Button
			  variant="contained"
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: "white", display: { xs: "none", lg: "flex" } }}>
              <FormattedMessage id="navigation.settings"/>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
