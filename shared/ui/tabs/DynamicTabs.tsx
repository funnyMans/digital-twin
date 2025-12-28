import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
} from "@/shared/lib/shadCN/components/animate-ui/primitives/animate/tabs";
import React from "react";

/**
 * DynamicTabs Component
 *
 * A flexible, feature-rich tabs component with beautiful styling and dark mode support
 *
 * @param {Array} tabs - Array of tab configuration objects
 * @param {string} tabs[].value - Unique identifier for the tab
 * @param {string} tabs[].label - Display text for the tab
 * @param {ReactNode} tabs[].content - Component or JSX to render in tab content
 * @param {ReactNode} [tabs[].icon] - Optional icon to display before label
 * @param {string|number} [tabs[].badge] - Optional badge to display after label
 * @param {boolean} [tabs[].disabled] - Whether the tab is disabled
 * @param {string} [tabs[].contentClassName] - Custom className for tab content
 *
 * @param {string} [defaultValue] - Initial active tab (defaults to first tab)
 * @param {string} [className] - Additional className for the tabs container
 * @param {string} [orientation='horizontal'] - Tab orientation: 'horizontal' | 'vertical'
 * @param {string} [variant='default'] - Tab style variant: 'default' | 'pills' | 'underline'
 */

interface TabConfig {
  value: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
  contentClassName?: string;
}

interface DynamicTabsProps {
  tabs: TabConfig[];
  defaultValue?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "pills" | "underline";
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({
  tabs,
  defaultValue,
  className = "flex-1",
  variant = "default",
}) => {
  const defaultTab = defaultValue || tabs[0]?.value;

  const getListClasses = () => {
    const base = "flex gap-1";

    switch (variant) {
      case "pills":
        return `${base} w-full p-1 bg-slate-100 dark:bg-slate-800 rounded-xl`;
      case "underline":
        return `${base} w-full border-b border-slate-200 dark:border-slate-700`;
      default:
        return `${base} w-full  p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm`;
    }
  };

  const getTriggerClasses = () => {
    const base =
      "flex w-30 min-w-fit flex-1 items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    switch (variant) {
      case "pills":
        return `${base} data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-slate-100 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-700/60`;
      case "underline":
        return `${base} border-b-2 border-transparent rounded-none data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100`;
      default:
        return `${base} data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-slate-100 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/60 dark:hover:bg-slate-700/60`;
    }
  };

  return (
    <div className="flex w-full h-full flex-col gap-6">
      <Tabs defaultValue={defaultTab} className={className}>
        <TabsHighlight>
          <TabsList className={getListClasses()}>
            {tabs.map((tab, index) => (
              <TabsHighlightItem key={index} value={tab.value}>
                <TabsTrigger
                  value={tab.value}
                  disabled={tab.disabled}
                  className={getTriggerClasses()}
                >
                  {tab.icon && (
                    <span className="mr-2 h-4 w-4 shrink-0 ">{tab.icon}</span>
                  )}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="ml-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600 px-1.5 text-xs font-semibold text-white">
                      {tab.badge}
                    </span>
                  )}
                </TabsTrigger>
              </TabsHighlightItem>
            ))}
          </TabsList>
        </TabsHighlight>
        {/* <Card className="shadow-none py-0 h-max dark:bg-slate-800"> */}
        <TabsContents>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className={`h-full min-h-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600 ${
                tab.contentClassName || ""
              }`}
            >
              {tab.content}
            </TabsContent>
          ))}
        </TabsContents>
        {/* </Card> */}
      </Tabs>
    </div>
  );
};

export default DynamicTabs;

/*
 * Usage Example:
 *
 * import DynamicTabs from './DynamicTabs';
 * import { User, Settings, Bell } from 'lucide-react';
 *
 * const MyComponent = () => {
 *   const tabsConfig = [
 *     {
 *       value: 'profile',
 *       label: 'Profile',
 *       icon: <User className="w-4 h-4" />,
 *       content: <ProfileContent />,
 *       contentClassName: 'mt-6'
 *     },
 *     {
 *       value: 'settings',
 *       label: 'Settings',
 *       icon: <Settings className="w-4 h-4" />,
 *       content: <SettingsContent />,
 *       badge: '2',
 *       contentClassName: 'mt-6'
 *     },
 *     {
 *       value: 'notifications',
 *       label: 'Notifications',
 *       icon: <Bell className="w-4 h-4" />,
 *       content: <NotificationsContent />,
 *       disabled: true
 *     }
 *   ];
 *
 *   return (
 *     <DynamicTabs
 *       tabs={tabsConfig}
 *       defaultValue="profile"
 *       variant="pills"
 *     />
 *   );
 * };
 */
