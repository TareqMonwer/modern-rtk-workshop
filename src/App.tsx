import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [limit, setLimit] = React.useState(5);
  const { data, isFetching } = useFetchBreedsQuery(limit);

  const handleClick = () => {
    dispatch(incremented());
  };

  const handleIncrementAmount = () => {
    dispatch(amountAdded(5));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <div>
              Fetch&nbsp;
              <select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              &nbsp;dogs
            </div>
            <p>
              <button type="button" onClick={handleClick}>
                count is: {count}
              </button>
              <br />
              <button type="button" onClick={handleIncrementAmount}>
                count +5 is: {count}
              </button>
            </p>
          </div>
          <table width="600px" border="1">
            <caption>
              <h3>Number of dogs fetched: {data?.length}</h3>
            </caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height="150" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
