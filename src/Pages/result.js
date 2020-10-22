import React, { useState, Fragment } from 'react';
import Modal from './../components/Modal';

function App (
  {

  })
{
  const data = {
    Roojai: {
      Honda:
      {
        Civic:
        {
          2564:
          {

          },
        },
        City:
        {

        },
        Accord:
        {

        },
      },
      Toyota:
      {

      },
      Nissan:
      {

      },
    },
  }
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const model = urlParams.get('model');
  const year = urlParams.get('year');
  const insurance = urlParams.get('insurance');


  console.log(name, model, year, insurance)
  return (
    <div className="App">
      <div className="Container">
        <div className="ContainerCard">
          <div className="Card">
            <div className="View">
              <img src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/insure-company-9419.jpg?alt=media&token=44f74cf4-0782-472f-855d-e226aa7f8f35"} />
            </div>
            <div className="Head">
              คนขับอายุ 30 ขึ้นไป / ติดกล้อง / ไม่ใช้รถในเชิงธุรกิจ
            </div>
            <div className="SubHead">
              สําหรับรถยนต์ {name} รุ่น {model}
            </div>
            <div className="Tag">
              <div className="child">
                ประกันชั้นที่ {insurance}
              </div>
              <div className="child">
                ไม่รวม พ.ร.บ.
              </div>
            </div>
            <div className="price">
              <div>
                ราคาล่าสุด:
              </div>
              <div className="date">
                21/10/2020
              </div>
              <div className="cost">
                ฿ 2,560 ต่อปี
              </div>
            </div>
            <div className="description">
              <div className="w80">
                <img src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/ic-car-insure.svg?alt=media&token=88f95528-3396-4a1d-82c4-adf965def7b0" />
                <span>ทุนประกัน</span>
              </div>
              <div className="w20 right">
                -
              </div>
              <div className="w80">
                <img src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/ic-money.svg?alt=media&token=02175951-e00a-4449-a3ff-77ed6c4e4f7e" />
                <span>ค่าเสียเวลาส่วนเเรก</span>
              </div>
              <div className="w20 right">
                -
              </div>
              <div className="w80">
                <img src="https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/ic-maintenance.svg?alt=media&token=533e5798-62a9-4d46-bd67-dbe5cd2a8aa0" />
                <span>ประเภทการซ่อม</span>
              </div>
              <div className="w20 right ">
                อู่
              </div>
            </div>
            <div style={{ margin: "8px 0" }}>
              <Modal />
            </div>
            <div className="cash">
              <div className="linear">
                ผ่อนเงินสด!
              </div>
              <div className="bank">
                ผ่อน 0% 10 เดือนผ่านบัตรเดบิตหรือ บัตรเครดิต
              </div>
            </div>
            <div className="divider"></div>
            <a className="contact">
              <div className="button">ให้ติดต่อกลับ</div>
            </a>
            <div className="by">
              ให้บริการโดย:<span className="Roojai">Roojai</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .App
        {
          max-width:1024px;
          margin:auto;
          font-family: 'Kanit';
        }
        .divider
        {
          border-top: 1px solid #f4f5f5;
          margin-top: 32px;
          margin-bottom: 16px;
        }
        .Container , .price , .description , .cash
        {
          display:flex;
          flex-wrap:wrap;
        }
        .Head
        {
          padding: 0 24px;  
          text-align:center;
        }
        .ContainerCard
        {
          width:100%;
          padding:16px;
        }
        .right
        {
          text-align: right;
        }
        .Card
        {
          box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
          border-radius: 12px;
          padding: 8px 24px;  
        }
        .View
        {
            width:100px;
            height:100px;
            margin:auto;
        }
        span
        {
          padding-left:8px;
        }
        .bank
        {
          padding-top: 8px;
          width:100%;
        }
        .Tag
        {
          display:flex;
          justify-content: center;
        }
        .SubHead
        {
          color:#666f75;
          text-align:center;
          margin:6px 0; 
        }
        .cash
        {
          font-size:10px;
          background-color:#f4f5f5;
          padding:8px;
          border-radius: 8px;
          margin:8px 0;
        }
        .linear
        {
          background-image: linear-gradient(to right, #ffc800 , #ffaa00);
          width:auto;
          padding: 4px 12px;
          border-radius: 12px 12px 25px 12px;
          height: 22px;
        }
        .price
        {
          background-color:#f4f5f5;
          padding:8px;
          border-radius: 8px;
        }
        .w80
        {
          width:80%;
        }
        .w20
        {
          width:20%;
        }
        .date
        {
          font-size:10px;
          color:#666f75;
          display: flex;
          align-items: center;
          padding-left:4px;
          padding-top:2px;
        }
        .contact
        {
          margin-top:16px;
        }
        .child
        {
          padding: 8px 12px;
          border-radius: 40px;
          border: 1px solid #ffa400;
          color: #ffa400;
          font-size:12px;
          margin: 8px;
        }
        .Roojai
        {
          color:#ffa400;
        }
        .by
        {
          font-size:10px;
          text-align:center;
          margin:10px 0;
        }
        .cost
        {
          width:100%;
          text-align:center;
          font-size:24px;
          font-weight:600;
        }
        .button
        {
          background: #ffa400;
          color: white;
          padding: 8px;
          border-radius: 12px;
          text-align: center;
          width: 100%;
          text-decoration:none;
        }
        .description
        {
          padding:8px;
        }
        @media (min-width: 768px)
        {
          .ContainerCard
          {
            width:33.33%;
            margin: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default App;