import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import type { SelectProps } from "antd";
import "./style.css"

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

interface SearchBoxProps {
  className: string;
}
const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const SearchBar: React.FC<SearchBoxProps> = () => {
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };

  return (
    <div className="search-autocomplete">
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{width: 250, height: 40, borderRadius: 20, backgroundColor: "#0f0f10"}}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" className="searchButton" placeholder="input here" enterButton />
    </AutoComplete>
    </div>
  );
};

export default SearchBar;
