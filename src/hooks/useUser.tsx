import { useState, useEffect } from "react";
import axios from "axios";

export const useUser = () => {
  const [datas, setData] = useState([]);
  const [img, setimage] = useState<any>([]);

  useEffect(() => {
    getapp();
  }, []);

  function getapp(): any {
    axios
      .get(
        "https://7f3c862b-2536-4727-baf8-58a5f434bea9.mock.pstmn.io/v1/clans?name=wolf"
      )
      .then((result) => {
        setData(result.data.items);
        setimage(result.data.items[0].badgeUrls.small);
        console.log(result.data.items);
      })
      .catch(console.log);
  }
  return {
    datas,
    img,
  };
};
