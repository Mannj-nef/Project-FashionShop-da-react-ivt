import React from "react";
import { getProducts } from "../../apis/productApi";
import { ERR_MESSAGE } from "../../common/message";

const Home = () => {
  const handleCallApi = async () => {
    try {
      const data = await getProducts();
      console.log(data);
    } catch (error) {
      console.log(ERR_MESSAGE.ERR_404);
    }
  };

  return (
    <div>
      Homes
      <button onClick={handleCallApi}>Get Api</button>
    </div>
  );
};

export default Home;
