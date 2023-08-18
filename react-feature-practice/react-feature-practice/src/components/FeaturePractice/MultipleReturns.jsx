import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user_json = await response.json();
      setUser(user_json);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <h2 className=" flex h-screen text-5xl font-bold justify-center items-center">
        Loading...
      </h2>
    );
  }
  if (isError) {
    return (
      <h2 className=" flex h-screen text-5xl font-bold justify-center items-center">
        Error...
      </h2>
    );
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div className="user mt-16 mx-8 flex flex-col gap-y-6 items-center justify-center">
      <img className=" rounded-xl max-h-40" src={avatar_url} alt={name} />
      <h2 className=" text-5xl font-bold">{name}</h2>
      <h4 className=" text-3xl">Works At {company}</h4>
      <p className=" text-lg">{bio}</p>
    </div>
  );
};

export default MultipleReturns;
