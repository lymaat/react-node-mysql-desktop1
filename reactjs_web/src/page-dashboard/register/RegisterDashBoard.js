import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form, Input,Select,message } from 'antd';

import { request } from '../../share/request';

import {Link} from "react-router-dom"
const { Option } = Select;
const RegisterDashBoard = () => {
  const [form] = Form.useForm(); 
  const [listProvince, setListProvince] = useState([]);
  const [loading,setLoading] = useState(false)
  const [listGender,setListGender] = useState([])
  const [list, setList] = useState([]);
  const [objFilter, setObjFilter] = useState({
    page: 1,
    txtSearch: "",
    

})
const { page, txtSearch } = objFilter

const getList = (parameter={}) => {
    var param = "?page="+(parameter.page || 1)
    param += "&txtSearch="+(parameter.txtSearch || "")
    request("customer"+param,"get",{}).then(res => {
        
        if (res) {
            setList(res.list);
            setListProvince(res.listProvince);
            setListGender(res.listGender);

        }
    })
}
useEffect(() => {
    getList(objFilter)
},[page])
function onFinish(item) {
         var param = {
          "firstname": item.firstname,
          "lastname": item.lastname ,
          "gender_id": item.gender_id,
          "username": item.username ,
          "password": item.password ,
          "province_id": item.province_id ,
          "tel": item.tel,
          "address_des": item.address_des
      }
      request("customer", "post", param).then(res => {
          if (res) {
            form.resetFields(); // This clears the form fields
            message.success(res.message);
        
           
          }
      })
}


  return (
    <div className='mainform'>
    <div className=''>
      <div className='form'>
      <h1>Cusomer Register</h1>
      <Form
       form={form} // Use the created form instance
        name="basic"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        
        autoComplete="off"
      >
        
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="firstname"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="lastname"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="gender" name="gender_id">
                                <Select placeholder="Gender" allowClear   rules={[
            {
              required: true,
              message: 'Please input your gender!',
            },
          ]}>
                                    {listGender?.map((item, index) => (
                                        <Option key={index} value={item.gender_id}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                     
                    <Form.Item label="Province_id" name="province_id">
                                <Select placeholder="Province" allowClear   rules={[
            {
              required: true,
              message: 'Please input your province_id!',
            },
          ]}>
                                    {listProvince?.map((item, index) => (
                                        <Option key={index} value={item.province_id}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
          label="tel"
          name="tel"
          rules={[
            {
              required: true,
              message: 'Please input your tel!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="address"
          name="address_des"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{textAlign:"right"}}
          // wrapperCol={{
          //   offset: 12,
          //   span: 12,
          // }}
        >
          <div className="links">
          <br />
          <br />
          <Link to="/dashboard/customer_login" >Back Login</Link>
        
        </div>
      <br />
          <Button loading={loading} type="primary" htmlType="submit" className="btnlogin">
            Create
          </Button>
          <br />
          <br />

        </Form.Item>
  
      </Form>
      </div>
    </div>
    </div>
    
   
  )
  
  
}

export default RegisterDashBoard;

// import React from 'react'
// import "./LoginDashBoard.css"

// function LoginDashBoard() {
//     const onLogin = () => {
//         // check in api : past username,password
//         // login success

//         // localStorage.setItem("key","value") // create new local variable "" 
//         // const data = localStorage.getItem("key") // get value from local variable
//         // localStorage.removeItem("key") // remove key
        
//         localStorage.setItem("isLogin","1")
//         window.location.href="/dashboard"
//     }
//   return (
//     <div>
//         <div className='LoginDashBoardContainer'>
//             <div>Login</div>
//             <input placeholder='Username'/><br/>
//             <input placeholder='Passsword'/><br/>
//             <div>
//                 <button onClick={onLogin}>Login</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LoginDashBoard



