import React from 'react';

function AuthHeading({ isLogged }:{isLogged:boolean}) {
  return (
    <>
      {
            !isLogged
            && (
            <div className="text-center pt-10">
              <h3 className="text-[26px]">To edit users you must be authentificated or logged in</h3>
            </div>
            )
        }
      {
              isLogged
              && (
              <div className="text-center pt-10">
                <h3 className="text-[26px]">Hello! Now you can edit each user</h3>
              </div>
              )
          }
    </>

  );
}

export default AuthHeading;
