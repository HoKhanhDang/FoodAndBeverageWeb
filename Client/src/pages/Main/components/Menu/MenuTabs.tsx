/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface MenuTabProps {
  label: string;
  isActive: boolean;
}

const MenuTab: React.FC<MenuTabProps> = ({ label, isActive }) => (
  <div
    className={`px-14 py-4 ${
      isActive ? "text-orange-50 bg-red-600" : "bg-orange-50"
    } max-md:px-5`}
  >
    {label}
  </div>
);

interface MenuTabsProps {
  tabs: string[];
  activeTab: string;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ tabs, activeTab }) => (
  <nav className="flex flex-wrap self-stretch mt-5 w-full text-2xl text-red-600 whitespace-nowrap max-md:max-w-full">
    {tabs.map((tab, index) => (
      <React.Fragment key={tab}>
        {index > 0 && (
          <div className="shrink-0 w-px border border-solid bg-slate-700 border-slate-700 h-[60px]" />
        )}
        <MenuTab label={tab} isActive={tab === activeTab} />
      </React.Fragment>
    ))}
  </nav>
);

export default MenuTabs;
