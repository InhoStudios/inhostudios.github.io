import React, { useEffect, useState } from "react";
import "./styles.scss";

export type NavItem = {
  label: string;
  tabValue: string;
};

export interface TabNavProps {
  tabs: NavItem[];
  switchTab: (tabValue: string) => void;
}

export function TabNav({ tabs, switchTab }: TabNavProps) {
  const [activeTab, setActiveTab] = useState<string>();
  useEffect(() => {
    setActiveTab(tabs[0].tabValue);
  }, []);
  return (
    <div className="tab-container">
      <div className="tab-nav">
        {tabs.map((tab, index) => (
          <a
            key={index}
            onClick={e => {
              e.preventDefault();
              setActiveTab(tab.tabValue);
              switchTab(tab.tabValue);
            }}
            className={`tab ${activeTab === tab.tabValue ? "active" : ""}`}
            href="#"
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
