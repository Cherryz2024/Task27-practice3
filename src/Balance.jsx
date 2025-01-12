function Balance({balance}) {
  return (
    <div>
      {/* display balance from the shared state, making text black if positive and red if negative */}
       <h3 style = {{color: balance < 0 ? 'red' : 'black'}}>Your account balance is : {balance}</h3>
    </div>
  )
}

export default Balance
