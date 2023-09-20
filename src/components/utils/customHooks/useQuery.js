import React from "react";

const useQuery = (search) => {
  return React.useMemo(() => new URLSearchParams(search).toString(), [search]);
};

export default useQuery;
