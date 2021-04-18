import React, { useState,useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"
import {database} from "../firebase"
import { LineChart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';
import Typed from 'react-typed';
import '../css/dashboard.css'
// import Chart from "./Chart"


export default function Dashboard() {
  const [error, setError] = useState("")
  const [data, setData] = useState([]);
  const [pulse, setPulse] = useState([]);
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  var ecg_sensor = database.ref('Sensor/ecg')
  var pulse_sensor = database.ref('Sensor/pulse')
  var d = new Date()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  const switchOn = () =>{
      database.ref('LED_STATUS').set(1)
  }

  const switchOff = () =>{
    
      database.ref('LED_STATUS').set(0)
  }

  // useEffect(()=>{
  //   const gotPulse = (pulse) =>{
  //     // console.log(data.val())
  //     // return data.val()
  //     console.log(pulse.val())
  //     setData(currentPulse => [...currentPulse,{ 
  //       time: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getUTCMilliseconds(),
  //       pulsevalue: pulse.val()}])
  //    }
     


  //    const errPulse = (err) =>{
  //     //console.log(err);
  //     return err
  //   }
  
  //   pulse_sensor.on('value',gotPulse, errPulse)
  // },[]);

  useEffect(()=>{
    const gotDate = (data) =>{
      // console.log(data.val())
      // return data.val()
      setData(currentData => [...currentData,{ 
        name: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getUTCMilliseconds(),
        value: data.val()}])
     }

    //  const gotPulse = (pulse) =>{
    //       // console.log(data.val())
    //       // return data.val()
    //       console.log(pulse.val())
    //       setData(currentPulse => [...currentPulse,{ 
    //         time: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getUTCMilliseconds(),
    //         pulsevalue: pulse.val()}])
    //      }
     


     const errData = (err) =>{
      //console.log(err);
      return err
    }

    //      const errPulse = (err) =>{
    //   //console.log(err);
    //   return err
    // }
  
    ecg_sensor.on('value',gotDate, errData)
    // pulse_sensor.on('value',gotPulse, errPulse)
  },[]);
 

 
 
  

  return (
    <>
      <Card className="profile">
        <Card.Body>
          <h1 className="text-center mb-4">Health Care Monitoring Dashboard</h1>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
         <li><strong>Email:</strong> {currentUser.email} </li> 
         <li><strong>Date:</strong> {d.getDate() + '/' + d.getMonth()  + '/' + d.getFullYear()}</li> 
         <li><strong>Day:</strong> {d.getDay()}</li> 
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

    <div className="w-100 text-center mt-2">
          <Button onClick= {switchOn} className="mx-3" variant="danger">
              Switch On
          </Button>

          <Button onClick= {switchOff} variant="info">
              Switch Off
          </Button>

          
    </div>
    <div>
    <h2 className = "heading">ECG Sensor Graph </h2>

    <h5 className = "heading-sub">  <Typed
                strings={[
                    'Check your Heart Rate',
                    'Press Switch on to measure ECG',
                    'Place the electrodes on left arm; right arm; and left leg']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed></h5>
    </div>
   

        <LineChart className = "ecg" width={800} height={500} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#fff" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="value" stroke="#ea2c62" />
        </LineChart>



       
     
    </>
  )
}