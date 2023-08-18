import { useState, Suspense, lazy } from "react";

const Form = lazy(() => import("./FormLazy"));
const SlowComponent = lazy(() => import("./SlowComponent"));
const Button = lazy(() => import("./ButtonLazy"));

const UseTransitionDemo = () => {
  const [show, setShow] = useState(false);

  return (
    <Suspense
      fallback={
        <p className="m-4 p-4 text-center text-2xl font-medium">
          Component Loading...
        </p>
      }
    >
      <section className=" flex flex-col items-center">
        <Form />

        {show ? (
          <div className="flex flex-col items-center">
            <Button
              name={"Hide Items"}
              event={() => {
                setShow(!show);
              }}
            />
            <SlowComponent />
          </div>
        ) : (
          <Button
            name={"Show Items"}
            event={() => {
              setShow(!show);
            }}
          />
        )}
      </section>
    </Suspense>
  );
};

export default UseTransitionDemo;
