/**
 * This file is created to make it easy to merge changes done in the original requetly app.
 */
import { getStorageSuperObject, saveStorageObject } from "actions/ExtensionActions";
import { Button, Col, Tooltip } from "antd";
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

const createButton = (tooltip, icon, buttonData, clickHandler) => {
  return (
    <Col>
      <Tooltip title={<span className="text-gray text-sm">{tooltip}</span>}>
        <Button
          type="text"
          className="header-icon-btn"
          icon={<img width={17} height={17} src={`/assets/icons/${icon}.svg`} />}
          onClick={clickHandler}
          style={{ width: "auto" }}
        >
          {buttonData}
        </Button>
      </Tooltip>
    </Col>
  );
};

const downloadFile = (filename, text) => {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const importFromFile = (event) => {
  const input = event.target;

  const reader = new FileReader();
  reader.onload = function () {
    const text = reader.result;
    const rules = JSON.parse(text);
    Object.keys(rules).forEach((key) => {
      const object = {};
      object[key] = rules[key];
      saveStorageObject(object);
    });
    window.location.reload();
  };
  reader.readAsText(input.files[0]);
};

export const importExportButtons = () => {
  return (
    <>
      {createButton(
        "Import all rules data from a file.",
        "import-icon",
        <>
          <span>Import</span>
          <input
            style={{ display: "none" }}
            type="file"
            id="selfHostedImportFile"
            accept=".json"
            onChange={importFromFile}
          ></input>
        </>,
        () => {
          document.getElementById("selfHostedImportFile").click();
        }
      )}
      {createButton("Export all rules data to file.", "export-icon", "Export", () => {
        getStorageSuperObject().then((data) => {
          downloadFile("selfhosted-requestly-export.json", JSON.stringify(data));
        });
      })}
    </>
  );
};
