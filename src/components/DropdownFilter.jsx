import React from "react";

export const DropdownFilter = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="dropdown-filter">
      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
      >
        <option value="">All Topics</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
