import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Table = () => {
  const [order, setOrder] = useState('ASC');
  const [on, off] = useState('');

  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:9000/data')
      .then(response => {
        return response.json()
      })
      .then(data => {

        console.log(data)


        setData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  // const Delete = (id) => {
  //   fetch(`http://localhost:9000/data/${id}`, {
  //     method: 'Delete'
  //   }).then(() => {
  //     console.log("Record Deleted")
  //     window.location.reload();
  //   })
  // }

  const history = useHistory();
  const redirect = (e) => {
    console.log(e);
    history.push('/create');
    window.location.reload();
  }

  const sort = (col) => {
    if (order === "ASC") {

      const sorted = [...data].sort((a, b) =>
        a[col] > b[col] ? 1 : -1);
      setData(sorted);
      console.log('Sorted')

      off(<i class="fa-solid fa-sort-up"></i>)
      setOrder("DSC")
    }
    if (order === 'DSC') {

      const sorted = [...data].sort((a, b) =>
        a[col] < b[col] ? 1 : -1);

      setData(sorted);

      console.log('Sorted')
      off(<i class="fa-solid fa-sort-down"></i>)
      setOrder("ASC")
    }
  }

  return (

    <div className="container2">
      <div className="top">
        <h3 className="ps">Products/Services</h3>
        <button onClick={redirect} className="create">Create</button>
      </div>
      {data.length > 0 && (
        <table className="table" border={0}>

          <tr className="table-dark">
            <input className="check" type="checkbox" value="" />
            <th onClick={() => sort("name")} > <span className="name"> Name {on} </span></th>
            <th onClick={() => sort("sku")} > <span className="sku"> Sku {on} </span></th>
            <th > <span className="by"> Created  By </span></th>
            <th > <span className="on "> Created  On </span></th>
            <th ><span className="to"> Assigned To </span></th>
            <th onClick={() => sort("type")} > <span className="type"> Type</span></th>
            <th > <span className="status"> Status </span></th>
            <th > <span className="stock"> Stock </span></th>
            <th > <span className="price"> Avg Price </span></th>
            <th > <span className="active2"> Active </span></th>

            <th className="action">Action</th>
          </tr>

          {
            data.map(data => (

              <tbody className="body">
                <tr key={data.id}>
                  <td className="td">
                    <input className="check" type="checkbox" value="" />
                  </td>
                  <td className="td"> <span className="td-name">{data.name}</span></td>
                  <td className="td"><span className="td-sku">{data.sku} </span></td>
                  <td className="td-su">
                    <span className="su">  SU</span></td>
                  <td className="td "> <span className="on"> 15 May 2022 </span>
                  </td>
                  <td className="td"> <span className="to"> --- </span></td>
                  <td className="td">
                    <span className="datatype">{data.type}</span>
                  </td>
                  <td className=" td ">
                    <span className="approved">
                      Approved </span></td>
                  <td className="td"> <span className="stock"> 0 </span></td>
                  <td className="td"> <span className="price"> Rs0.00 </span></td>
                  <td className="td">

                    <label class="switch1">
                      <input type="checkbox" checked />
                      <span className="slider1 round1"></span>
                      <span className="active1"></span>
                    </label>

                  </td>

                  <td className="aaa">...
                    {/* /* <button className="delete" onClick={() => Delete(data.id)}>
                      Delete
                    </button>  */ }
                  </td>
                </tr>

              </tbody>))}
        </table>
      )}
    </div>
  );
}

export default Table;