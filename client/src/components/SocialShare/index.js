import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SocialShare = ({ url, title }) => (
  <Stack 
        direction="row" 
        spacing={1} 
        sx={{ m: "auto", width: "fit-content" }}>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </Stack>
);

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default SocialShare;
