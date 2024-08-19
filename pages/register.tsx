import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Register() {
  const router = useRouter();
  const email = 'eve.holt@reqres.in';
  const [inputPassword, setInputPassword] = useState('');

  const submitHandler = async (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password: inputPassword,
      }),
    };

    const req = await fetch('https://reqres.in/api/register', options);
    const res = await req.json();

    if (res.token.length) {
      await router.push('/');
    }
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full h-screen flex flex-col gap-10 justify-center items-center "
      >
        <div className="text-[36px]">
          Register
        </div>
        <div>
          <input
            className="p-5 rounded w-80 text-black"
            placeholder="Login"
            value={email}
            readOnly
          />
        </div>
        <div>
          <input
            className="p-5 rounded w-80 text-black"
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
          />

        </div>
        <button
          type="submit"
          className="p-5 bg-white text-black w-80 rounded uppercase"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
