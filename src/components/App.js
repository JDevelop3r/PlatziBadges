import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgesNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgesNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/" component={NotFound} />
        </div>
      </Layout>
    </BrowserRouter>
  );
}
