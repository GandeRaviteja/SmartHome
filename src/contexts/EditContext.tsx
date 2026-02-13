import { createContext, useContext, useState, ReactNode } from "react";

type EditContextType = {
  isEditMode: boolean;
  toggleEditMode: () => void;
};

const EditContext = createContext<EditContextType>({
  isEditMode: false,
  toggleEditMode: () => {},
});

export const useEditMode = () => useContext(EditContext);

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  return (
    <EditContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditContext.Provider>
  );
};
