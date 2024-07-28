import SearchIcon from "@/assets/svg/icon-search.svg";
import { useTyping } from "@/contexts/typingContext";
import { createURL } from "@/functions/url.functions";
import { useFindHero } from "@/hooks/useFindHero";
import { LegacyRef, useRef, useState } from "react";
import "./search-input.css";

export interface SearchInputProps {
  type: string;
  placeholder?: string;
}

const SearchInput = ({ type = "text", placeholder = "" }: SearchInputProps) => {
  const { fetchFindHero } = useFindHero();
  const { setTyping } = useTyping();
  const refValue: LegacyRef<HTMLInputElement> | undefined = useRef(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);


  const onHandleSearch = () => {
    setTyping(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      fetchHero();
    }, 1000);
    setTimeoutId(id);
  };

  const onHandleKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (event.key === "Enter") {
      fetchHero();
    }
  };

  const fetchHero = () => {
    if (!refValue || !refValue.current || !refValue.current.value) return;
    const url = createURL(refValue.current.value);
    fetchFindHero(url);
  };

  return (
    <div className="search-input">
      <SearchIcon />
      <input
        ref={refValue}
        type={type}
        placeholder={placeholder}
        onChange={onHandleSearch}
        onKeyUp={onHandleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
