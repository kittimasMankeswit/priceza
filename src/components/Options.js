import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Gen_Dropdown from '../components/Gen';
import Years_Dropdown from '../components/Years';
import Insurance_Dropdown from '../components/Insurance';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
function App (
  {

  })
{
  const [name, setName] = useState("รถยี่ห้อ");
  const [model, setModel] = useState("---");
  const [year, setYears] = useState("---");
  const [insurance, setInsurance] = useState("---");

  const [$model, set$Model] = useState("---");
  const [$year, set$Years] = useState("---");

  return (
    <div className="App">
      <div className="bg-image">
        <div className="comtainer">
          <div className="content">
            <div className="padding">
              <Dropdown
                text={name}
                onChange={setName}
                prop_value_1={"Honda"}
                prop_value_2={"Toyota"}
                prop_value_3={"Nissan"} />
            </div>
            <div className="padding">
              <Gen_Dropdown
                name={name}
                onChange={setModel}
                set$Model={set$Model}
              />
            </div>
            <div className="padding">
              <Years_Dropdown
                model={model}
                onChange={setYears}
                set$Years={set$Years}
              />
            </div>
            <div className="padding">
              <Insurance_Dropdown
                name={name}
                model={$model}
                years={$year}
                onChange={setInsurance}
              />
            </div>
            <div className="padding">
              {/* <a className="link" href={`/Result?name=${name}&model=${$model}&year=${$year}&insurance=${insurance}`}>ตกลง</a> */}
              <a className="link" href={`/Result?name=${name}&model=${$model}&year=${$year}&insurance=${insurance}`}>
                <button className="button">ตกลง</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
          .comtainer
          {
            max-width:480px;
            margin:auto;
            padding:32px 8px;

          }
          .content
          {
            width:100%;
            /* background:white; */
            background: rgba(255,255,255,0.8);
            padding: 16px;
            border-radius: 12px;
          }
          .padding
          {
            padding:8px 8px;
          }
          .App
          {
            background:white;
            font-family:kanit;
          }
          .bg-image
          {
            width:100%;
            padding:6%;
            background-image: url("https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/car-insure-total-bg.jpg?alt=media&token=23a1ce8f-e5c8-45cd-a516-9e611a531b53");
            background-repeat: no-repeat;
            background-position: center;
            background-size:cover;
          }
          .link
          {
            color:white;
            text-decoration:none;
          }

          .link
          {
            border: none;
            width: 100%;
            border-radius: 4px;
            text-align: center;
          }
          
          .button
          {
            width:100%;
            background: none;
            border: none;
            background: #30c13b;
            color: white;
          }
          @media (min-width: 768px)
          {

          }
      `}</style>
    </div>
  );
}

export default App;