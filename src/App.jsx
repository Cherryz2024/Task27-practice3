import { useEffect } from 'react';
import { useState } from 'react';
import Balance from './Balance';
import Transaction from './Transaction';

//top level component
function App() {
  //define state and state management function
  const [balance, setBalance] = useState(0);

  return (
    <div>
      {/* child component to manage transactions */}
      <Transaction balance={balance} setBalance={setBalance} />

      {/* child component to display balance */}
      <Balance balance={balance} />
    </div>
  )
}

export default App
