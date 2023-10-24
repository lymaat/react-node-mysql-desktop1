import { useEffect, useState } from 'react';
import { Button, Col, Form, Input, Modal, Row, Select, Space, Table, Tag, Tooltip, message } from 'antd';
import { request } from '../../share/request';
import { formatDateClient } from '../../share/helper';

const { Option } = Select;

const CustomerPageDash = () => {
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [listProvince, setListProvince] = useState([]);
    const [customerIdEdit, setCustomerIdEdit] = useState(null)
    const [form] = Form.useForm();
    const [listGender,setListGender] = useState([])
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

   
    function onEditRemove(item) {
        request("customer/" + item.customer_id, "delete", {}).then(res => {
            if (res) {
                message.success(res.message)
                getList();
            }
        })
    }
    function onEditClick(item) {
        setVisible(true)
        setCustomerIdEdit(item.customer_id)
        form.setFieldsValue({
            firstname: item.firstname,
            lastname: item.lastname,
            gender_id: item.gender_id,
            username: item.username,
            password: item.password,
            tel: item.tel,
            province_id: item.province_id,
            address_des: item.address_des

            //   {
            //     "firstname":"tes",
            //     "lastname":"lastname",
            //     "gender":"0",
            //     "username":"123",
            //     "password":"123",
            //     "province_id":"1",
            //     "tel":"tel",
            //     "address_des":"address_des"
            // }
        })
    }
    function onFinish(item) {
       
        if (customerIdEdit == null) {
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
                    
                    message.success(res.message)
                    form.resetFields();
                    setVisible(false);
                    getList();
                }
            })
        } else {
            var param = {
                "customer_id": customerIdEdit,
                "firstname": item.firstname,
                "lastname": item.lastname ,
                "gender_id": item.gender_id,
                "username": item.username ,
                "password": item.password ,
                "province_id": item.province_id ,
                "tel": item.tel,
                "address_des": item.address_des
            }
            request("customer", "put", param).then(res => {
                if (res) {
                    message.success(res.message)
                    form.resetFields();
                    setVisible(false);
                    getList();
                }
            })
        }

    }
    function onCancelModal() {
        setVisible(false)
        setCustomerIdEdit(null)
        form.resetFields()
      }
      function clearFilter(){
        // setObjFilter({
       //     ...objFilter,
       //     page:1,
       //     txtSearch:"",
       //     categorySearch:null,
       //     productStatus:null
       // })
       // getlist(objFilter)

       var objClear = {
         ...objFilter,
         page:1,
         txtSearch:"",
         RoleIdSearch:null,
        
     }
     setObjFilter({...objClear})
     getList(objClear)
 }




    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Customer  </h3>
                <Button type="primary" onClick={() => setVisible(true)}>
                    New customer
                </Button>
                <div>
      <div>
                   
                    <Space>
                        <Input.Search 
                            value={txtSearch}
                            placeholder="Search" 
                            allowClear={true}
                            style={{width:120}}
                            onChange={(event)=>{
                                setObjFilter({
                                    ...objFilter,
                                    txtSearch:event.target.value
                                })
                            }}
                        />
                        
                        <Button  onClick={()=>getList(objFilter)} type="primary">Filter</Button>
                        <Button  onClick={()=>clearFilter()} >Clear</Button>
                    </Space>

                </div>
      </div>
            </div>

            <Table   
            pagination={{
             defaultCurrent:1,
            pageSize:10,
             onChange:(page,pageSize)=>{
            setObjFilter({
                ...objFilter,
                page:page
            })
        },
        // onShowSizeChange  // Called when pageSize is changed

    }}
                columns={[
                    {
                        key: 'no',
                        title: 'No',
                        render: (text, record, index) => index + 1,
                    },
                    {
                        key: 'firstname',
                        dataIndex: 'firstname',
                        title: 'Firstname',
                    },
                    {
                        key: 'lastname',
                        dataIndex: 'lastname',
                        title: 'Lastname',
                    },
                    {
                        key: 'gender_id',
                        dataIndex: 'gender_id',
                        title: 'Gender',
                        render: (text, record) => {
                            // Find the province name based on the province_id
                            const gender = listGender.find((gender) => gender.gender_id === text);
                            return gender ? gender.name : ''; // Display gender name or empty string if not found
                        },
                    },
                    {
                        key: 'tel',
                        dataIndex: 'tel',
                        title: 'Tel',
                    },
                    {
                        key: 'username',
                        dataIndex: 'username',
                        title: 'Username',
                    },

                    {
                        key: 'password',
                        dataIndex: 'password',
                        title: 'Password',
                        ellipsis: {
                            showTitle: false,
                        },
                        render: (password) => (
                            <Tooltip placement="topLeft" title={password}>
                                {password}
                            </Tooltip>
                        ),
                    },
                    {
                        key: 'province_id',
                        dataIndex: 'province_id',
                        title: 'Province',
                        render: (text, record) => {
                            // Find the province name based on the province_id
                            const province = listProvince.find((province) => province.province_id === text);
                            return province ? province.name : ''; // Display province name or empty string if not found
                        },
                    },
                    {
                        key: 'address_des',
                        dataIndex: 'address_des',
                        title: 'Address Description',
                        ellipsis: {
                            showTitle: false,
                          },
                          render: (address_des) => (
                            <Tooltip placement="topLeft" title={address_des}>
                              {address_des}
                            </Tooltip>
                          ),
                    },
                    {
                        key: 'is_active',
                        dataIndex: 'is_active',
                        title: 'Active',
                        render: (text) => (
                            <Tag color={text === 1 ? 'green' : 'red'} key="1">
                                {text === 1 ? 'Active' : 'Inactive'}
                            </Tag>
                        ),
                    },
                    {
                        key: 'create_at',
                        dataIndex: 'create_at',
                        title: 'Create At',
                        render: (text) => formatDateClient(text),
                    },
                    {
                        key: 'action',
                        title: 'Action',
                        render: (text, record) => (
                            <Space>
                                <Button type="primary" onClick={() => onEditClick(record)}>Edit</Button>
                                <Button danger onClick={() => onEditRemove(record)}>Delete</Button>
                            </Space>
                        ),
                    },
                ]}
                dataSource={list}
            />
            <Modal
                visible={visible}
                title={customerIdEdit == null ? "Create" : "Edit"}
                onCancel={onCancelModal}
                width={800}
                footer={null}
            >
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Firstname"
                                name="firstname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please insert firstname',
                                    },
                                ]}
                            >
                                <Input placeholder="Firstname" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Lastname"
                                name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please insert lastname',
                                    },
                                ]}
                            >
                                <Input placeholder="Lastname" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                        <Form.Item label="gender_id" name="gender_id">
                                <Select placeholder="Gender" allowClear>
                                    {listGender?.map((item, index) => (
                                        <Option key={index} value={item.gender_id}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Province_id" name="province_id">
                                <Select placeholder="Province" allowClear>
                                    {listProvince?.map((item, index) => (
                                        <Option key={index} value={item.province_id}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please insert username',
                                    },
                                ]}
                            >
                                <Input placeholder="Username" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please insert password',
                                    },
                                ]}
                            >
                                <Input placeholder="Password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Address Description" name="address_des" >
                        <Input placeholder='address_des'></Input>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'right' }}>
                        <Space>
                            <Button danger>Cancel</Button>
                            <Button onClick={() => form.resetFields()}>Clear</Button>
                            <Button htmlType="submit" type="primary">
                            {customerIdEdit == null ? "Save" : "Update"}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CustomerPageDash;
