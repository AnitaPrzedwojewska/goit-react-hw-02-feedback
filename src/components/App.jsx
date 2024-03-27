// import { Section } from './Sections/sections';
import { Statistics } from './Statistics/statistics';

const data = [
  { id: 'id-1', label: 'good', quantity: 3, percentage: 50 },
  { id: 'id-2', label: 'neutral', quantity: 2, percentage: 33 },
  { id: 'id-3', label: 'bad', quantity: 1, percentage: 17 },
];

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h2>Please leave feedback</h2>
        <div class="form">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
      </div>
      <Statistics title="Statistics" stats={data}></Statistics>
    </div>
  );
};