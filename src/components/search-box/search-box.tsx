import SearchInput from "@/components/search-input/search-input";
import "./search-box.css";

export interface SearchBoxProps {
  total: number;
}

const SearchBox: React.FC<SearchBoxProps> = ({ total = 0 }) => {
  return (
    <div className="search-box">
      <SearchInput type="text" placeholder="Search a character..." />
      <span>{`${total} Results`}</span>
    </div>
  );
};

export default SearchBox;
