import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuert] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuert("");
  }

  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuert(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
