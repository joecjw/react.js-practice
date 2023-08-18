import { useEffect, useState, useTransition } from "react";

const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img className=" w-20 bg-white" src="/react.png" alt="" />
    </div>
  );
});

const SlowComponent = () => {
  const [items, setItems] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setItems(newItems);
    });
  }, []);

  return (
    <div className="slow-component">
      {isPending ? (
        <p className="m-4 p-4 text-center text-2xl font-medium">
          Data Loading...
        </p>
      ) : (
        <div className="items grid grid-cols-6 mt-8">{items}</div>
      )}
    </div>
  );
};

export default SlowComponent;
