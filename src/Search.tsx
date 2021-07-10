import { useEffect, useState } from 'react';
import ResultItem from './ResultItem';
import useDebounce from './util';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const debouncedSearchTerm = useDebounce<String>(searchTerm, 200);

  const getSearchResult = () => {
    fetch(`http://localhost:8000/?query=${debouncedSearchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      getSearchResult();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="search-wrapper">
      <div
        className={
          searchResults.length > 0 ? 'search-input active' : 'search-input'
        }
      >
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <div className="search-result-box">
          {searchResults.map((searchResult) => (
            <ResultItem content={searchResult} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
