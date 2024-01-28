"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [average, setAverage] = useState(0);

  function setDatailCustomer(detail) {
    setSelectedCustomer(detail);
    console.log(detail);
  }

  function calculateAverage(array) {
    const numericValues = array
      .map((value) => {
        const numericValue = parseFloat(value);
        return isNaN(numericValue) ? null : numericValue; // Use null for non-numeric values
      })
      .filter((value) => value !== null); // Filter out non-numeric values

    if (numericValues.length === 0) {
      return 0;
    }

    const sum = numericValues.reduce((acc, value) => acc + value, 0);
    const average = sum / numericValues.length;

    return Math.round(average);
  }

  return (
    <ModalContext.Provider
      value={{
        setDatailCustomer,
        selectedCustomer,
        setSelectedCustomer,
        average,
        calculateAverage,
        setAverage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
