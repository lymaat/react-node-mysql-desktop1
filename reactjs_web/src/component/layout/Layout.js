import {
    NotificationFilled,
    ShoppingCartOutlined 
} from "@ant-design/icons"
import "./Layout.css"
import nit_image from "../../assets/logo/nit.jpeg"
import { getUser } from '../../share/helper';
import {Outlet, useNavigate} from "react-router-dom"
import { Avatar, Badge, Button, Col, Dropdown, Row, Space, theme } from "antd"
import {BsAndroid2,BsApple,BsFacebook,BsYoutube,BsTiktok,BsTelegram} from "react-icons/bs"
import React, { useEffect, useState } from 'react';

function Layout({}){
        document.title = "Dashboard"
        const navigate = useNavigate()
        const [collapsed, setCollapsed] = useState(false);
        useEffect(()=>{
          const isLogin = localStorage.getItem("isLogin")
          if(isLogin == "0"){ // not yet login
            navigate("/dashboard/customer_login")  // if not yet login
          }
        },[])
    // const navigate = useNavigate()
    const onClickMenu = (routeName) => {
        navigate(routeName)
    } 
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleLogout = () => {
        localStorage.setItem("isLogin","0")
        window.location.href="/dashboard/customer_login"
      }

    const dataFollow = [
        {
            name : "Faceboox",
            icon : <BsFacebook className="iconNormal"/>,
            link : "https://www.facebook.com/YELLOWGFRAGRANCE"
        },
        {
            name : "Youtube",
            icon : <BsYoutube className="iconNormal"/>,
            link : "https://www.youtube.com/YELLOWGFRAGRANCE"
        },
        {
            name : "Tik tok",
            icon : <BsTiktok className="iconNormal"/>,
            link : "https://www.tiktok.com/YELLOWGFRAGRANCE"
        },
        {
            name : "Telegram",
            icon : <BsTelegram className="iconNormal"/>,
            link : "https://www.tiktok.com/YELLOWGFRAGRANCE"
        }
    ]
    const itemsProfile = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              My Account
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Chnage password
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Address
            </a>
          ),
        },
        {
            key: '4',
            label: (
              <a onClick={handleLogout}>
                Logout
              </a>
            ),
          },
      ];
    const user = getUser();

    return (
        <div className="main">
            
            <div className="mainHeader">
                <div className="brandContain" onClick={()=>onClickMenu("/")}>
                    <img 
                        src={nit_image} 
                        className="logo"
                    />
                    <div>
                        <div className="txtBrand">YELLOW G</div>
                        <div className="txtSubBrand">Perfume Shop & សេវាទិញអីវ៉ាន់ពីអាមេរិច</div>
                    </div> 
                </div>
                <div className="menuContain">
                    <ul className="menu">
                        <li onClick={()=>onClickMenu("/dashboard/cart")} className="menuItem"><ShoppingCartOutlined />  </li>
                        <li onClick={()=>onClickMenu("/")} className="menuItem">Home</li>
                        <li onClick={()=>onClickMenu("/about")} className="menuItem">About</li>
                        {/* <li onClick={()=>onClickMenu("/product")} className="menuItem">Produt</li>
                        <li onClick={()=>onClickMenu("/category")} className="menuItem">Category</li> */}
                        <li onClick={()=>onClickMenu("dashboard/login")} className="menuItem">Login</li>
                        <li onClick={()=>onClickMenu("/dashboard/customer_login")} className="menuItem">CustomerLogin</li>
                        {/* <li onClick={handleLogout} className="menuItem">Log out</li> */}


                        {/* <li onClick={()=>onClickMenu("/dashboard")} className="menuItem">To Backend</li> */}
                    </ul>
                </div>
                <div className="brandContain">
                <Space style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                
                    <Badge count={4} >
                        <Avatar  shape="square" size="small" />
                    </Badge>
                    <Badge count={2} >
                        <NotificationFilled style={{fontSize:24,marginLeft:10}}/>
                    </Badge>
                    <Dropdown
                            menu={{
                                items:itemsProfile,
                            }}
                            placement="bottomRight"
                            arrow
                    >
                        <Button style={{marginLeft:10}}>{user.firstname+"-"+user.lastname}</Button>
                    </Dropdown>
                </Space>
            </div>
            </div>

            <Outlet/>

            <div style={{marginTop:20,backgroundColor:'#FFE4C4',padding:'50px 10%'}}>
                <Row>
                    <Col xs={{span:24}} md={{span:8}} style={{padding:20}}>
                        <img 
                            src={nit_image}
                            width={130}
                            height={130}
                        />
                        <div className="textTitle">YELLOW G</div>
                        <div>Perfume Shop & សេវាទិញអីវ៉ាន់ពីអាមេរិច</div>
                        
                    </Col>

                    <Col xs={{span:24}} md={{span:8}} style={{padding:20}}>
                        <div className="textTitle">YELLOW G APP</div>
                        <a href="https://play.google.com/store/search?q=zara&c=apps&hl=en&gl=US" target="_blank">
                            <Space>
                                <BsAndroid2 className="iconNormal" /><div className="textNormal">Android App</div>
                            </Space>
                        </a>
                        <br/>
                        <a href="https://play.google.com/store/search?q=zara&c=apps&hl=en&gl=US" target="_blank">
                            <Space>
                                <BsApple className="iconNormal" /><div className="textNormal">IOS App</div>
                            </Space>
                        </a>
                    </Col>

                    <Col xs={{span:24}} md={{span:8}} style={{padding:20}}>
                        <div>
                            <div className="textTitle">Follow US</div>
                            {dataFollow.map((item,index)=>{
                                return (
                                    <div>
                                        <a key={index} href={item.link} target="_blank">
                                            <Space>
                                                {item.icon}<div className="textNormal">{item.name}</div>
                                            </Space>
                                        </a>
                                        <br/>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{textAlign:'center',padding:5}}>© 2023, BBU 111. All Rights Reserved.</div>
        </div>
    )
}

export default Layout;