export const useLocaleStorage = () => {
  const offlineStore = "offlineStore";
  const renderLocaleStorage: any = () => {
    try {
      return JSON.parse(localStorage.getItem(offlineStore) || "[]");
    } catch (error) {
      console.error("Error parsing local storage data:", error);
      // You can choose to return an empty array or a default value here
      return [];
    }
  };
  const offlineStoreForm = renderLocaleStorage();
  return {offlineStoreForm};
};
