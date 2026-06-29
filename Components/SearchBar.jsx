import "../src/App.css"

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="🔍 Search Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;