import useFetch from "./useFetch";

const url = "https://api.github.com/users";

const FetchCustomHook = () => {
  const [users, isLoading, isError] = useFetch([], url);

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

  return (
    <section className=" flex flex-col items-center h-full mx-12 mt-12">
      <h3 className=" m-4 font-bold text-3xl">Github Users Fetch Example</h3>
      <h4 className=" m-4 font-bold text-2xl">with Custom useFetch Hook</h4>
      <ul className="users w-full">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li
              key={id}
              className=" flex flex-row my-8 py-6 bg-white rounded-lg items-center justify-stretch"
            >
              <img
                src={avatar_url}
                alt={login}
                className=" h-32  rounded-full mx-10"
              />
              <div className=" flex flex-col items-start justify-evenly font-bold">
                <h5 className=" text-2xl">{login}</h5>
                <a href={html_url} className=" text-xl text-blue-700">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchCustomHook;
