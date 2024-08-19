import React from 'react';
import Link from 'next/link';
import useLoggedStore from '../store/store.ts';

function Header() {
  const { isLogged, removeLogin } = useLoggedStore<any>((state) => state);
  const removeAuth = async () => {
    await removeLogin();
  };

  return (
    <div className="bg-white  text-black">
      <div className="container mx-auto ">
        {!isLogged
                    && (
                    <div className="flex justify-end items-center gap-5 ">
                      <div className="my-5">
                        <Link
                          href="/login"
                          className="rounded py-3 px-5 border border-black  bg-black text-white"
                        >
                          Login
                        </Link>
                      </div>
                      <div className="my-5 ">
                        <Link
                          href="/register"
                          className=" py-3 px-5 rounded border border-black "
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                    )}
        {isLogged
                    && (
                    <div className="flex justify-end items-center gap-5 ">
                      <div className="my-5">
                        <button
                          type="button"
                          onClick={removeAuth}
                          className="rounded  border border-black py-3 px-5 bg-black text-white"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                    )}
      </div>
    </div>
  );
}

export default Header;
