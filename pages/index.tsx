import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-cyan-500 text-4xl underline">Heading content</h1>
      <form action="" className="max-w-md">
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" />
        </div>
        <div>
          <button className="bg-teal-800 text-white p-2 rounded-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
