import { useState } from "react";
import { onSignup } from "../api/auth";
import { Layout } from "../components/Layout";

export function Signup() {
    const [values, setValues] = useState({
      email: '',
      username: '',
      password: ''
    })

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChange = (e:any) => {
      setValues({
        ...values, [e.target.name]: e.target.value
      })
      if(success){
        setSuccess(false)
      } else if(error){
        setError(false)
      }
    }

    const onSubmit = async (e:any) => {
      e.preventDefault()

      try {
        const {data} = await onSignup(values)
        setError(false)
        setSuccess(data.message)
        setValues({email: '', username: '', password: ''})
      } catch (error) {
        setError(error.response.data.errors[0].msg)
        setSuccess(false)
      }
    }

    return (
      <Layout>
        <div className="d-flex flex-column align-self-start mt-5 w-100">
          <h1>Signup to ShopApp</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum cupiditate!</p>
        </div>
        <form className="d-flex flex-column align-self-start bg-light p-5 rounded" style={{"width": 
        '100%'
        }} onSubmit={(e) => onSubmit(e)}>
          <div className="w-100">
            <input onChange={(e) => onChange(e)} className="w-100 border border-primary p-2" id="email" name="email" type="email" placeholder="Email" value={values.email} required></input>
          </div>
          <div className="w-100 mt-3">
            <input onChange={(e) => onChange(e)} className="w-100 border border-primary p-2" id="username" name="username" type="text" placeholder="Username" value={values.username} required></input>
          </div>
          <div className="w-100 mt-3">
            <input onChange={(e) => onChange(e)} className="w-100 border border-primary p-2" id="password" name="password" type="password" placeholder="Password" value={values.password} required></input>
            <div style={{
              color: "red", margin: "10px 0"
            }}>{error}</div>
            <div style={{
              color: "green", margin: "10px 0"
            }}>{success}</div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">Signup</button>
          </div>
        </form>
      </Layout>
    )
  }
  
  