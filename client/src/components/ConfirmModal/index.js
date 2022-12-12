import * as React from "react";
import {
	Box,
	Typography,
	Modal,
	Paper,
	InputBase,
	Divider,
	IconButton,
	Alert
} from "@mui/material";
import PropTypes from "prop-types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CloseIcon from "@mui/icons-material/Close";
import { SocialShare } from "../../components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: '10px',
  boxShadow: 24,
  outline: "none",
  p: 4,
};
const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = React.useState(false);

    React.useEffect(() => {
        let timer;
        if (openAlert){
            timer = setTimeout(() => { setOpenAlert(false) }, 1000)
        }
        return () => clearTimeout(timer)
    }, [openAlert])

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-title"
    >
      <Box sx={style} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            my: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Movies List URL"
            inputProps={{ "aria-label": "Movies List URL" }}
            value={url}
          />
          <IconButton
		  	href={url}
			target="_blank"
		  	color="primary" 
			sx={{ p: "10px" }} 
			aria-label="preview">
            <VisibilityIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="copy to clipboard"
            >
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        <SocialShare url={url} title={title}/>
        {openAlert 
        ? (<Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpenAlert(false)}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
            Copied!
          </Alert>
        ) 
        : null}
       
      </Box>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConfirmModal;
