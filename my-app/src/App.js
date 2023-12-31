// import logo from './logo.svg';
import './App.css';
import ExpenseDetails from './components/ExpenseDetails';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDate from './components/ExpenseDate';
function App() {
  const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        location:'India'
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:'USA' },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        location:'UK'
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        location:'London'
      },
    ];
    
    return (
      <div>
      <h2>Let's get started</h2>
        {
          expenses.map((expns) => {
          return (
            <>
          <ExpenseDate date={expns.date} />
           <ExpenseDetails  title={expns.title}
           amount={expns.amount}  
             location={expns.location}
             />
             </>
             )
        })}
      </div>
     );
}

export default App;
