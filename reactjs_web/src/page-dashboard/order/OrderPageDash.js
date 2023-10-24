



import { useState, useEffect } from "react"
import { request } from "../../share/request"
import { Button, Col, Empty, Form, Image, Input, Modal, Row, Select, Space, Table, Tooltip, message } from "antd"
import { isEmptyOrNull, formatDateClient } from "../../share/helper"
const { Option } = Select
function OrderPageDash() {

    const [visible, setVisible] = useState(false)
    const [cart_by_customer, setCartByCustomer] = useState([])
    const [indexSelect, setIndexSelect] = useState(0)
    const [list, setList] = useState([])
    const [orderStatus, setOrderStatus] = useState([])
    const [form] = Form.useForm();
    const [orderIdEdit, setOrderIdEdit] = useState(null)
    const [listpaymentmethode,setListPaymentMethode] = useState([])
    const [objFilter, setObjFilter] = useState({
        page: 1,
        txtSearch: "",
        status: null

    })
    const { page, txtSearch, status } = objFilter

    useEffect(() => {
        getList(objFilter)
    }, [page])

    function getList(parameter = {}) {
        var param = "?page=" + (parameter.page || 1)
        param += "&txtSearch=" + (parameter.txtSearch || "")
        param += "&status=" + (parameter.status)
        request("order"+param, "get", {}).then(res => {
            if (res) {
                setList(res.list)
                setOrderStatus(res.orderStatus)
                setListPaymentMethode(res.listpaymentmethode)
            }
        })
    }
    function onEditRemove(item) {
        request("order/"+item.order_id, "delete", {}).then(res => {
            if (res) {
                message.success(res.message)
                getList();
            }
        })
    }
    function onEditClick(item) {
        setVisible(true)
        setOrderIdEdit(item.order_id)
        form.setFieldsValue({
            order_status_id: item.order_status_id,
            comment: item.comment
        })
    }
    function onFinish(item) {
        var param = {
            "order_id": orderIdEdit,
            "order_status_id": item.order_status_id,
            "comment": item.comment
        }
        request("order", "put", param).then(res => {
            if (res) {
                message.success(res.message)
                form.resetFields();
                setVisible(false)
                getList();

            }
        })
    }
    function onCancelModal() {
        setVisible(false)
        setOrderIdEdit(null)
        form.resetFields()
    }
    function clearFilter() {

        var objClear = {
            ...objFilter,
            page: 1,
            txtSearch: "",
            status: null,

        }
        setObjFilter({ ...objClear })
        getList(objClear)
    }
    

    return (
        <div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>

                    <h3>Order:<span style={{ color: 'blue' }}>{list.length}</span> </h3>
                    {/* <Button type='primary' onClick={() => setVisible(true)} >New</Button> */}
                </div>
                <div>
                    <div>

                        <Space>
                            <Input.Search
                                value={txtSearch}
                                placeholder="Search"
                                allowClear={true}
                                style={{ width: 120 }}
                                onChange={(event) => {
                                    setObjFilter({
                                        ...objFilter,
                                        txtSearch: event.target.value
                                    })
                                }}
                            />
                            <Select
                                value={status}
                                placeholder="Status"
                                style={{ width: 120 }}
                                allowClear
                                onChange={(value) => {
                                    setObjFilter({
                                        ...objFilter,
                                        status: value
                                    })
                                }}
                            >
                                {orderStatus?.map((item, index) => {
                                    return (
                                        <Option key={index} value={item.order_status_id}>{item.name}</Option>
                                    )
                                })}
                            </Select>


                            <Button onClick={() => getList(objFilter)} type="primary">Filter</Button>
                            <Button onClick={() => clearFilter()} >Clear</Button>
                        </Space>

                    </div>
                </div>
            </div>
            <div>
                <Table scroll={{ x: 1500, y: 300, }}
                    pagination={{
                        defaultCurrent: 1,
                        pageSize: 5,
                        onChange: (page, pageSize) => {
                            setObjFilter({
                                ...objFilter,
                                page: page
                            })
                        },
                        // onShowSizeChange  // Called when pageSize is changed

                    }}
                    columns={[
                        {
                            key: "no",
                            title: "No",
                            fixed: 'left',
                            width: 30,
                            // render:(item,recorde,index)=>index+1
                            render: (item, recorde, index) => {
                                return index + 1
                            }
                        },
                        {
                            key: "invoice_no",
                            title: "invoice_no",
                            dataIndex: "invoice_no",
                            fixed: 'left',
                            sorter: true,
                            width: 100

                        },
                        {
                            key: "telephone",
                            title: "telephone",
                            dataIndex: "telephone",

                        },
                        {
                            key: "customer_id",
                            title: "Customer_id",
                            dataIndex: "customer_id",
                            width: 80,
                            
                        },
                        {
                            key: "order_status_id",
                            title: "order_status_id",
                            dataIndex: "order_status_id",
                            width: 80,
                            render: (text, record) => {
                                // Find the province name based on the province_id
                                const order_status = orderStatus.find((order_status) => order_status.order_status_id === text);
                                return orderStatus ? order_status.name : ''; // Display gender name or empty string if not found
                            },
                        },
                        {
                            key: "payement_methode_id",
                            title: "payement_methode_id",
                            dataIndex: "payement_methode_id",
                            width: 80,
                            render: (text, record) => {
                                // Find the province name based on the province_id
                                const payement_methode = listpaymentmethode.find((payement_methode) => payement_methode.payement_methode_id === text);
                                return payement_methode ? payement_methode.name : ''; // Display gender name or empty string if not found
                            },
                        },

                        {
                            key: "order_total",
                            title: "order_total",
                            dataIndex: "order_total",
                            width: 80
                        },
                        {
                            key: "address_des",
                            title: "address_des",
                            dataIndex: "address_des",
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
                            key: "comment",
                            title: "comment",
                            dataIndex: "comment",
                            ellipsis: {
                                showTitle: false,
                              },
                        },
                        {
                            key: "firstname",
                            title: "firstname",
                            dataIndex: "firstname",
                            width: 100
                        },
                        {
                            key: "lastname",
                            title: "lastname",
                            dataIndex: "lastname",
                            width: 100
                        },


                        {
                            key: "create_at",
                            title: "create_at",
                            dataIndex: "create_at",
                            sorter: true,
                            render: (text, record, index) => {
                                return formatDateClient(text)
                            }
                        },
                        {
                            key: "action",
                            title: "Acton",
                            fixed: 'right',

                            render: (text, record, index) => {
                                return (
                                    <Space key={index}>
                                        <Button type="primary" onClick={() => onEditClick(record)} >Edit</Button>
                                        <Button danger onClick={() => onEditRemove(record)} >Delete</Button>
                                    </Space>
                                )
                            }
                        }
                    ]}
                    dataSource={list} />
            </div>
            <Modal open={visible} title={orderIdEdit == null ? "Create" : "Edit"} onCancel={onCancelModal} footer={null} maskClosable={false} width={700} >
                <Form layout='vertical' form={form} onFinish={onFinish}>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item label={"Order_Status"} name="order_status_id">
                                <Select>
                                    {orderStatus?.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.order_status_id}>{item.name}</Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <Space align='end' >
                                        
                                    <Button htmlType='submit' type='primary'  >{orderIdEdit == null ? "Save" : "Update"}</Button>
                                </Space>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>

        </div>
    )
}

export default OrderPageDash;
