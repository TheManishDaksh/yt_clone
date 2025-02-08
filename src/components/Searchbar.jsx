import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Searchbar() {
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchItem) {
      navigate(`/feed/search/${searchItem}`);
      setSearchItem('');
    }
  }

  return (
    <div className="text-slate-600">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchItem}
          placeholder='Search...'
          className="rounded-3xl p-[6px] w-[120px] md:w-96 lg:w-96 bg-black border-solid border-slate-800 border-2 text-white"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Searchbar;