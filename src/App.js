import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/Main';
import { dashboardMenu } from "./data/Menu";

// import EventManagement from "./dashboard/EventManagement";
// import SalesMonitoring from "./dashboard/SalesMonitoring";
// import WebsiteAnalytics from "./dashboard/WebsiteAnalytics";
// import FinanceMonitoring from "./dashboard/FinanceMonitoring";
// import Cryptocurrency from "./dashboard/Cryptocurrency";
// import HelpdeskService from "./dashboard/HelpdeskService";
// import StorageManagement from "./dashboard/StorageManagement";
// import ProductManagement from "./dashboard/ProductManagement";

import componentsMap from "./dashboard";

// import scss
import "./scss/style.scss";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>

            {dashboardMenu.map((route, index) => {
              const DynamicComponent = componentsMap[route.component];
              return (


                <Route
                  path={route.link}
                  element={<DynamicComponent />}
                  key={index}
                />
              )


            })}


          </Route>

          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
