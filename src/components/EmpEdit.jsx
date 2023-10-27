import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EmpEdit = () => {

    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[active, setActive] = useState(true)

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        const empdata= {id, name, email, phone, active}

        fetch("http://localhost:8000/employee/"+empid, {
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert('Saved successfully!')
            navigate('/')
        }).catch((err)=>{
            console.log(err.message)
        })
    }

  const { empid } = useParams();

//   const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // empdatachange(resp);
        setId(resp.id)
        setName(resp.name)
        setEmail(resp.email)
        setPhone(resp.phone)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='row'>
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-title">
                        <h2>Employee Edit</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">ID</label>
                                    <input value={id} disabled="disabled" required type="text" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input value={name} onChange={e=>setName(e.target.value)} required type="text" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input value={email} onChange={e=>setEmail(e.target.value)} required type="emal" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <input value={phone} onChange={e=>setPhone(e.target.value)} required type="number" className='form-control'/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">
                                <input checked={active} onChange={e=>setActive(e.target.checked)} required type="checkbox" className='form-check-input'/>
                                    <label className='form-check-label' >Is Active</label>
                                    
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button type='submit' className='btn btn-success'>Save</button>
                                    <Link to="/" className='btn btn-danger'>back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
};

export default EmpEdit;
