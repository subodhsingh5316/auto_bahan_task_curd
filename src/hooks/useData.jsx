import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      name: "The Lazy Dev Otaku",
      age: 23,
    });
  }, []);

  return data;
};

export default useData;
