import SearchIcon from "@/assets/svg/icon-search.svg";
import { createURL } from "@/functions/url.functions";
import { useFindHero } from "@/hooks/useFindHero";
import { useState } from "react";
import "./search-input.css";

export interface SearchInputProps {
  type: string;
  placeholder?: string;
}

const SearchInput = ({ type = "text", placeholder = "" }: SearchInputProps) => {
  const { fetchFindHero } = useFindHero();
  const [searchValue, setSearchValue] = useState<string>("");

  const onHandleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSearchValue(value);
  };

  const onHandleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (event.key === "Enter") {
      const url = createURL(searchValue);
      fetchFindHero(url);
    }
  };

  return (
    <div className="search-input">
      <SearchIcon />
      <input
        type={type}
        placeholder={placeholder}
        value={searchValue}
        onChange={onHandleSearch}
        onKeyUp={onHandleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
