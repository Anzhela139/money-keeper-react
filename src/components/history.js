async function History() {
  const historyData = [];

  fetch()
    .then(async(res) => {
      historyData.push();
    })
    .catch((err) => console.log(err));
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
            <th>Income</th>
            <th>Regular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {historyData.map((x, i) =>
              <td key={i} />
            )}
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default History;
