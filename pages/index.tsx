import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header.tsx';
import AuthHeading from '../components/authHeading.tsx';
import useLoggedStore from '../store/store.ts';

export default function Home({ users } : {
    users : {
        avatar:string,
        email:string,
        first_name:string,
        id:number,
        last_name:string,
    }[]
}) {
  const { isLogged } = useLoggedStore<any>((state) => state);
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">
          <AuthHeading isLogged={isLogged} />
          <ul className="mt-10 users_grid grid grid-cols-1 w-fit  sm:grid-cols-6 gap-10 mx-auto">
            {
                          users?.map((user) => (
                            <li
                              key={user.id + user.first_name}
                              className="hover:scale-105 duration-300"
                            >
                              <Link href={`/users/${user.id}`}>
                                <div>
                                  <Image
                                    src={user.avatar}
                                    alt=""
                                    width={170}
                                    height={170}
                                  />
                                </div>
                                <div className="pt-5">
                                  User ID:
                                  {' '}
                                  {user.id}
                                </div>
                                <div>
                                  Name:
                                  {' '}
                                  {user.first_name}
                                </div>
                                <div>
                                  Last Name
                                  {' '}
                                  {user.last_name}
                                </div>
                                <div>
                                  Email:
                                  {' '}
                                  {user.email}
                                </div>
                              </Link>
                            </li>
                          ))
                      }
          </ul>
        </div>

      </main>

    </>
  );
}

export const getServerSideProps = async () => {
  const firstUsers = await fetch('https://reqres.in/api/users?page=1');
  const secondUsers = await fetch('https://reqres.in/api/users?page=2');
  const first = await firstUsers.json();
  const second = await secondUsers.json();

  return {
    props: {
      users: [...first.data, ...second.data],
    },
  };
};
