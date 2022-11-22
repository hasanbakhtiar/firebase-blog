import React from 'react'
import { useState } from 'react'
import u from '../../data/user';
const Login = props => {
    const [user,setUser] = useState();
    const [pass,setPass] = useState();
    const loginSubmit=e=>{
        e.preventDefault();
        if (!user || !pass) {
                alert('fill out input');
        }else{
            if (user === u.username && pass === u.pass) {
                props.history.push('/admin');
            }else{
                alert('err')
            }
        }
    }
  return (
    <form onSubmit={loginSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input onChange={(u)=>{setUser(u.target.value)}} type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(p)=>{setPass(p.target.value)}} type="password" className="form-control"  />
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>

  )
}

export default Login