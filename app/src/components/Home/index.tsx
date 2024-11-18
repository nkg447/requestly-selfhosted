import React from "react";
import { Col, Row } from "antd";
import { ChangeLogCard } from "./components/ChangelogCard";
import { HelpCard } from "./components/HelpCard";
import { TeamsCard } from "./components/WorkspaceCard";
import { Templates } from "./components/Templates";
import { RulesCard } from "./components/RulesCard";
import { MocksCard } from "./components/MocksCard";
import { IncentivesCard } from "./components/IncentivesCard/IncentivesCard";
import { useIsIncentivizationEnabled } from "features/incentivization/hooks";
import "./home.scss";
import { referOriginalRequestly, showMockServerSideBarOption, showTeamsCard } from "SelfHostedUtils";

export const Home: React.FC = () => {
  const isIncentivizationEnabled = useIsIncentivizationEnabled();

  return (
    <Col className="homepage-wrapper">
      <Col className="homepage-content">
        {isIncentivizationEnabled && (
          <Col className="homepage-primary-card homepage-incentives-card">
            <IncentivesCard />
          </Col>
        )}
        {referOriginalRequestly()}

        <Row className="homepage-primary-cards-wrapper">
          <Col className="homepage-primary-card" xs={24} md={24} lg={12}>
            <RulesCard />
          </Col>
          {showMockServerSideBarOption() ? (
            <Col className="homepage-primary-card" xs={24} md={24} lg={12}>
              <MocksCard />
            </Col>
          ) : null}
        </Row>
        <Templates />
        <Row className="homepage-bottom-section" wrap={false}>
          {showTeamsCard() ? (
            <Col xs={24} md={24} lg={12} className="homepage-teams-card homepage-primary-card" style={{ padding: 0 }}>
              <TeamsCard />
            </Col>
          ) : null}
          <Col xs={24} md={24} lg={6} className="homepage-help-card homepage-primary-card">
            <HelpCard />
          </Col>
          <Col xs={24} md={24} lg={6} className="homepage-changelog-card homepage-primary-card">
            <ChangeLogCard />
          </Col>
        </Row>
      </Col>
    </Col>
  );
};
