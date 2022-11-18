import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import AuthContext from './context'

function Plan(){
    const [plans,setPlans]=useState([])
    const [planId,setPlanId]=useState()
    const head=useContext(AuthContext)

    async function buyplan(){
        await axios.post('http://localhost:2000/api/buyplan',{
        planId
        },{headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Accept": 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token':head.token
        }})
    }

    async function getplans(){
        await axios.get('http://localhost:2000/api/getplans')
        .then(res=>{console.log(res)
            setPlans(res.data)
        })
    }
    useEffect(()=>{
        getplans()
    },[])
    return(
        <>
        <div>
            <h4>buy plan</h4>
            <input type='text' placeholder='Plan ID' onChange={(e)=>setPlanId(e.target.value)}/>
            <button onClick={buyplan}>Buy Plan</button>
        </div>

        <div>
            <table>
                <thead>
                    <td>PlanID</td>
                    <td>Price</td>
                    <td>Validity</td>
                    <td>Description</td>
                </thead>
                {plans.map(item=>(
                    <tbody>
                        <td>item.planId</td>
                        <td>item.price</td>
                        <td>item.validity</td>
                        <td>item.descrption</td>

                    </tbody>

                ))}
            </table>

        </div>

        </>
    )
}

export default Plan