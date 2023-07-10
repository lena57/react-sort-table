import React, {useCallback, useState} from 'react';
import data from './data.json';
import SortButton from './SortButton';

function sortData({tableData, columnName, reverse}){
  if(!columnName) return tableData;

  const sortedColumn = data.sort((a, b)=>{
    return a[columnName] > b[columnName] ? 1 : -1;
  })
  if(reverse) return sortedColumn.reverse();
  return sortedColumn;
}

const SortableTable = ({data}) => {

  const [columnName, setColumnName] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');

  const headerName = [
    {key: 'id', label: 'ID', render: (row)=><div>{row.id}</div>},
    {key: 'first_name', label: 'First Name', render: (row)=><div>{row.first_name}</div>},
    {key: 'last_name', label: 'Last Name', render: (row)=><div>{row.last_name}</div>},
    {key: 'email', label: 'Email', render: (row)=><div>{row.email}</div>},
    {key: 'gender', label: 'Gender', render: (row)=><div>{row.gender}</div>},
    {key: 'ip_address', label: 'IP address', render: (row)=><div>{row.ip_address}</div>},
  ];


  const sortedData = useCallback(
    () => sortData({
          tableData: data, 
          columnName, 
          reverse: sortOrder==='desc'
          }), [data, columnName, sortOrder])

  const handleIconChange = (sortKey) => {
    setColumnName(sortKey);
    setSortOrder(sortOrder==='asc' ? 'desc' : 'asc')
  }

  return (
    <div className='container' style={{marginTop: "50px"}}>
      <table className='table table-bordered'>
        <thead>
          <tr>
            {headerName.map((header)=>
            <th scope="col" key={header.key}>
              {header.label}
              {<SortButton sortKey={header.key} sortOrder={sortOrder} columnName={columnName} 
              onClick={()=>handleIconChange(header.key)}/>}
            </th>)}
          </tr>
        </thead>

        <tbody>
            {sortedData().map((personObj)=><tr key={personObj.id}>
              {headerName.map((header)=><td >{header.render(personObj)}</td>)}
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default SortableTable


