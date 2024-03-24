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
      <div className="history__interaction">
            <div>№</div>
            <div>Work</div>
            <div>Contractor</div>
            <div>Cost</div>
            <div>Type</div>
            <div>Date</div>
            <div>Regular</div>
          {error ? (
            <div>Oh no, there was an error</div>
          ) : isLoading || isFetching ? (
            <div>Loading...</div>
          ) : data ? (
            data.map((interaction, index) => (
              <>
                <div>{ index + 1 }</div>
                <div>{interaction?.contactor?.name}</div>
                <div>{interaction.work}</div>
                <div>{formatPrice(interaction.cost)}</div>
                <div>{interaction.type}</div>
                <div>{formatDate(interaction.date)}</div>
                <div>{interaction.regular}</div>
              </>
            ))
          ) : null}
      </div>
    </div>
    </div>
  );
}

export default History;
