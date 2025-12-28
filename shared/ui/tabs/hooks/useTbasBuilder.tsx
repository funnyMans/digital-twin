import { useState, useCallback } from "react";

/**
 * useTabsBuilder Hook
 *
 * A hook to dynamically build and manage tabs configuration
 *
 * @returns {Object} Tabs builder utilities
 * @returns {Array} tabs - Current tabs array
 * @returns {Function} addTab - Add a new tab to the array
 * @returns {Function} removeTab - Remove a tab by value
 * @returns {Function} updateTab - Update a tab by value
 * @returns {Function} reorderTabs - Reorder tabs by moving a tab to a new index
 * @returns {Function} setTabs - Directly set the entire tabs array
 * @returns {Function} clearTabs - Clear all tabs
 * @returns {Function} getTab - Get a specific tab by value
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

interface UseTabsBuilderReturn {
  tabs: TabConfig[];
  addTab: (tab: TabConfig) => void;
  removeTab: (value: string) => void;
  updateTab: (value: string, updates: Partial<TabConfig>) => void;
  reorderTabs: (fromIndex: number, toIndex: number) => void;
  setTabs: (tabs: TabConfig[]) => void;
  clearTabs: () => void;
  getTab: (value: string) => TabConfig | undefined;
}

export const useTabsBuilder = (
  initialTabs: TabConfig[] = []
): UseTabsBuilderReturn => {
  const [tabs, setTabsState] = useState<TabConfig[]>(initialTabs);

  // Add a new tab
  const addTab = useCallback((tab: TabConfig) => {
    setTabsState((prev) => {
      // Check if tab with same value already exists
      if (prev.some((t) => t.value === tab.value)) {
        console.warn(`Tab with value "${tab.value}" already exists`);
        return prev;
      }
      return [...prev, tab];
    });
  }, []);

  // Remove a tab by value
  const removeTab = useCallback((value: string) => {
    setTabsState((prev) => prev.filter((tab) => tab.value !== value));
  }, []);

  // Update a tab by value
  const updateTab = useCallback(
    (value: string, updates: Partial<TabConfig>) => {
      setTabsState((prev) =>
        prev.map((tab) => (tab.value === value ? { ...tab, ...updates } : tab))
      );
    },
    []
  );

  // Reorder tabs by moving from one index to another
  const reorderTabs = useCallback((fromIndex: number, toIndex: number) => {
    setTabsState((prev) => {
      const newTabs = [...prev];
      const [removed] = newTabs.splice(fromIndex, 1);
      newTabs.splice(toIndex, 0, removed);
      return newTabs;
    });
  }, []);

  // Set tabs directly
  const setTabs = useCallback((newTabs: TabConfig[]) => {
    setTabsState(newTabs);
  }, []);

  // Clear all tabs
  const clearTabs = useCallback(() => {
    setTabsState([]);
  }, []);

  // Get a specific tab by value
  const getTab = useCallback(
    (value: string) => {
      return tabs.find((tab) => tab.value === value);
    },
    [tabs]
  );

  return {
    tabs,
    addTab,
    removeTab,
    updateTab,
    reorderTabs,
    setTabs,
    clearTabs,
    getTab,
  };
};

/*
 * Usage Examples:
 *
 * Example 1: Basic Usage
 * ----------------------
 * import { useTabsBuilder } from './useTabsBuilder';
 * import DynamicTabs from './DynamicTabs';
 * import { User, Settings } from 'lucide-react';
 *
 * const MyComponent = () => {
 *   const { tabs, addTab, removeTab, updateTab } = useTabsBuilder([
 *     {
 *       value: 'profile',
 *       label: 'Profile',
 *       icon: <User className="w-4 h-4" />,
 *       content: <div>Profile Content</div>
 *     }
 *   ]);
 *
 *   const handleAddSettings = () => {
 *     addTab({
 *       value: 'settings',
 *       label: 'Settings',
 *       icon: <Settings className="w-4 h-4" />,
 *       content: <div>Settings Content</div>
 *     });
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleAddSettings}>Add Settings Tab</button>
 *       <DynamicTabs tabs={tabs} />
 *     </div>
 *   );
 * };
 *
 *
 * Example 2: Dynamic Tabs with Badges
 * ------------------------------------
 * const NotificationsApp = () => {
 *   const { tabs, updateTab } = useTabsBuilder([
 *     {
 *       value: 'inbox',
 *       label: 'Inbox',
 *       content: <InboxContent />,
 *       badge: '5'
 *     }
 *   ]);
 *
 *   // Update badge count
 *   const markAsRead = () => {
 *     updateTab('inbox', { badge: '3' });
 *   };
 *
 *   return <DynamicTabs tabs={tabs} />;
 * };
 *
 *
 * Example 3: Conditional Tabs
 * ----------------------------
 * const AdminPanel = () => {
 *   const { tabs, addTab, removeTab } = useTabsBuilder([
 *     { value: 'dashboard', label: 'Dashboard', content: <Dashboard /> }
 *   ]);
 *
 *   const isAdmin = useUser().role === 'admin';
 *
 *   useEffect(() => {
 *     if (isAdmin) {
 *       addTab({
 *         value: 'admin',
 *         label: 'Admin Panel',
 *         content: <AdminContent />
 *       });
 *     } else {
 *       removeTab('admin');
 *     }
 *   }, [isAdmin, addTab, removeTab]);
 *
 *   return <DynamicTabs tabs={tabs} />;
 * };
 *
 *
 * Example 4: Reordering Tabs
 * ---------------------------
 * const ReorderTabsApp = () => {
 *   const { tabs, reorderTabs } = useTabsBuilder([
 *     { value: 'tab1', label: 'First', content: <div>1</div> },
 *     { value: 'tab2', label: 'Second', content: <div>2</div> },
 *     { value: 'tab3', label: 'Third', content: <div>3</div> }
 *   ]);
 *
 *   const moveTabToEnd = () => {
 *     reorderTabs(0, 2); // Move first tab to last position
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={moveTabToEnd}>Move First Tab to End</button>
 *       <DynamicTabs tabs={tabs} />
 *     </div>
 *   );
 * };
 */
