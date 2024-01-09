import { useSelector } from 'react-redux';
import { post, removePost, edit } from './../store/interactionsSlice';
import { formatDate, formatPrice } from './../utils/formatters';
import { useGetInteractionsQuery } from './../store/interactionsApi';

function History() {
  const interactions = useSelector((state) => state.interactions.value);

  const { isLoading, isFetching, data, error } = useGetInteractionsQuery(null);
  return (
    <div>
      <div className="app-page__banner-title dark">
        <h2 className="h2__title">History</h2>
        <h4>History of your interactions</h4>
      </div>
      <div className="container">   
      <table className="history__interaction">
        <thead>
          <tr>
            <th>№</th>
            <th>Work</th>
            <th>Contractor</th>
            <th>Cost</th>
            <th>Type</th>
            <th>Date</th>
            <th>Regular</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <td><td>Oh no, there was an error</td></td>
          ) : isLoading || isFetching ? (
            <tr><td>Loading...</td></tr>
          ) : data ? (
            data.map((interaction, index) => (
              <tr
                key={interaction.id}
              >
                <td>{ index + 1 }</td>
                <td>{interaction?.contactor?.name}</td>
                <td>{interaction.work}</td>
                <td>{formatPrice(interaction.cost)}</td>
                <td>{interaction.type}</td>
                <td>{formatDate(interaction.date)}</td>
                <td>{interaction.regular}</td>
              </tr>
            ))
          ) : null}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default History;
