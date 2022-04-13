function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    return (
        <>
        <h5>All Data in Store:</h5>
        {data}
        
        </>

//         <table className= "table" id ="table">
//   <thead className="thead-dark">
//     <tr>
//       <th data-field="Name" scope="col">
//         <span className="text-success">
//           Name
//         </span>
//       </th>

//       <th data-field="Email" scope="col"> 
//           <span className="text-success">
//                 Email
//           </span>
//       </th>

//       <th data-field="Balance" scope="col">
//           <span className="text-success">
//                 Balance
//           </span>
//       </th>

//     </tr>
//     {data.map((user,index) => {
//       return(
//         <tr key={index}>
//           <td>{data.name}</td>
//           <td>{data.email}</td>
//           <td>{data.balance}</td>

//         </tr>
//       )
//     })}
//   </thead>
// </table>

    );
}
