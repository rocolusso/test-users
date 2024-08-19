import React from 'react';

function ActionHeading({ isDeleted, isComplete }:{isDeleted:boolean, isComplete:boolean}) {
  return (
    <div className="relative top-0 left-0">
      {
                isDeleted
                && (
                <div
                  className="absolute top-5 right-5  p-5 rounded text-red-600 border border-red-600 text-center uppercase"
                >
                  User deleted success
                </div>
                )
            }
      {
                isComplete
                && (
                <div
                  className="absolute top-5 right-5 text-green-600 rounded p-5 border border-green-600 text-center uppercase"
                >
                  Success
                </div>
                )
            }
    </div>
  );
}

export default ActionHeading;
