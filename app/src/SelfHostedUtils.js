/**
 * This file is created to make it easy to merge changes done in the original requetly app.
 */
import { Col } from "antd";
import PATHS from "config/constants/sub/paths";

export const shouldOverrideHideUserDropdown = () => {
  return true;
};

export const shouldOverrideShouldShowOnboarding = () => {
  return true;
};

export const showMockServerSideBarOption = () => {
  return false;
};

export const updateSidebarItems = (items) => {
  // Do not show Mock Server option in sidebar
  return items.filter((item) => item.path !== PATHS.MOCK_SERVER.INDEX);
};

export const showInviteButton = () => {
  return false;
};

export const showTeamsCard = () => {
  return false;
};

export const shouldShowAuthPopover = () => {
  return true;
};

export const referOriginalRequestly = () => {
  return (
    <Col className="homepage-primary-card homepage-incentives-card">
      <h2>
        This is a free version of the original <a href="https://requestly.com/">Requestly</a> App.
      </h2>
      <h3>
        This does not include many out of the box features provided by the original Requestly App. Features like data
        sync and mock server. For all the features, goto <a href="https://requestly.com/">Requestly</a>
      </h3>
    </Col>
  );
};
