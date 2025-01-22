export const AmountCard = ({ title, amount, order, isBlue }) => {
  return (
    <>
      {isBlue ? (
        <div className="grid grid-cols-1 shadow-2xl p-5 rounded-md m-5 bg-blue-500 hover:bg-red-600">
          <h2 className="text-gray-500">{title}</h2>
          <div className="flex justify-between">
            <div >{amount} </div>
            {order ? (
              <div className="flex justify-between cursor-pointer">
                {order}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 shadow-2xl p-5 rounded-md m-5 hover:bg-orange-400">
          <h2 className="text-gray-500">{title}</h2>
          <div className="flex justify-between">
            <div>{amount}</div>
            {order ? (
              <div className="flex justify-between cursor-pointer">
                {order}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      )}
      {/* <div className="grid grid-cols-1 shadow-2xl p-5 rounded-md m-5">
        <h2 className="text-gray-500">{title}</h2>
        <div className="flex justify-between">
          <div>{amount}</div>
          {order ? <div>{order}</div> : null}
        </div>
      </div> */}
    </>
  );
};
