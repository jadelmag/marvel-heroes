import SearchIcon from "@/assets/svg/icon-search.svg";
import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { createURL } from "@/functions/url.functions";
import { heroService } from "@/modules/hero/hero.service";
import { useState } from "react";
import "./search-input.css";

export interface SearchInputProps {
  type: string;
  placeholder?: string;
}

const SearchInput = ({ type = "text", placeholder = "" }: SearchInputProps) => {
  const { setHeroes } = useHeroes();
  const { loading, setLoading } = useLoader();
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
      setHeroes([]);
      setLoading(true);
      const url = createURL(searchValue);
      const heroes = await heroService.getHeroes(url);
      setHeroes(heroes);
      setLoading(false);
    }
  };

  return (
    <div className="search-input">
      <SearchIcon />
      <input
        type={type}
        disabled={loading}
        placeholder={placeholder}
        value={searchValue}
        onChange={onHandleSearch}
        onKeyUp={onHandleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
