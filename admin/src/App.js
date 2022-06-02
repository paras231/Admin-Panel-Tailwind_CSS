import React from "react";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const activeMenu = false;
  return (
    <>
      <div className="">
        <Router>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="top">
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: "blue", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed dark:bg-secondary dark-bg bg-white">
                Sidebar
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
            )}
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
