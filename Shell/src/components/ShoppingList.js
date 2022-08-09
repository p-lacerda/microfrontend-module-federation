import React, { useEffect, useRef } from "react";
const { mount } = React.lazy(() => import("list/ShoppingList"));

const ListModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
 
  return <div ref={ref} />
};

export default ListModule;