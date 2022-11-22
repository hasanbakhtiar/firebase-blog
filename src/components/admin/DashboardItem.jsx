import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const DashboardItem = ({id,title,desc,count,img}) => {
  return (
    <tr>
    <th scope="row">{count+1}</th>
    <td>{id}</td>
    <td><img width="70" src={img} alt={img} /></td>
    <td>{title}</td>
    <td>{desc}</td>
    <td><Link className='btn btn-warning' to={`edit/${id}`}>Edit</Link></td>
  </tr>
  )
}

export default DashboardItem