import React, { useEffect, useState } from 'react';
import ProductList from '../../component/list/ProductList';
import { request } from '../../share/request';
import { Row, Col, Form, Select, Input, Space, Button, message, notification } from 'antd';

const { Option } = Select;

function HomeHotItem(props) {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(0); // Added selectedProduct state
  const [totalRecord, setTotalRecord] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [form] = Form.useForm();
  const [customer_id, setCustomer_id] = useState(null); // Set this to the logged-in customer's ID
  const [token, setToken] = useState(null); // Set this to the authentication token
  const [objFilter, setObjFilter] = useState({
    page: 1,
    txtSearch: '',
    categorySearch: null,
    productStatus: null,
  });
  const { page, txtSearch, categorySearch, productStatus } = objFilter;

  useEffect(() => {
    getList(objFilter);
  }, [objFilter.page]);

  const handleAddToCart = async () => {
    const data = { product_id: selectedProduct, quantity: 1 };

    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the authentication token
        'Customer-ID': customer_id, // Include the customer_id in a custom header
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Handle a successful response, e.g., show a success message
      setCart([...cart, selectedProduct]); // Add selectedProduct to the cart
      notification.success({
        message: 'Item Added to Cart',
        description: 'The item has been added to your cart.',
      });
    } else {
      notification.error({
        message: 'Error',
        description: 'Failed to add the item to the cart.',
      });
    }
  };

  const getList = (parameter = {}) => {
    var param = `?page=${parameter.page || 1}`;
    param += `&txtSearch=${parameter.txtSearch || ''}`;
    param += `&categoryId=${parameter.categorySearch || ''}`; // Added a default value
    param += `&productStatus=${parameter.productStatus || ''}`; // Added a default value
    request(`product${param}`, 'get', {}).then((res) => {
      if (res) {
        setList(res.list);
        if (res.totalRecord && res.totalRecord.length > 0) {
          setTotalRecord(res.totalRecord[0]);
        }
        setCategoryList(res.list_category);
      }
    });
  };

  const clearFilter = () => {
    const objClear = {
      page: 1,
      txtSearch: '',
      categorySearch: null,
      productStatus: null,
    };
    setObjFilter(objClear);
    getList(objClear);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalRecord / itemsPerPage);

  const handlePageChange = (page) => {
    setObjFilter({
      ...objFilter,
      page: page,
    });
  };

  return (
    <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <div style={{ fontSize: 35, fontWeight: 'bold' }}>Product</div>
      <Space>
        <Input.Search
          value={txtSearch}
          placeholder="Search"
          allowClear={true}
          style={{ width: 120 }}
          onChange={(event) => {
            setObjFilter({
              ...objFilter,
              txtSearch: event.target.value,
            });
          }}
        />
        <Select
          value={categorySearch}
          placeholder="Category"
          style={{ width: 120 }}
          allowClear
          onChange={(value) => {
            setObjFilter({
              ...objFilter,
              categorySearch: value,
            });
          }}
        >
          {categoryList?.map((item, index) => {
            return (
              <Option key={item.category_id} value={item.category_id}>
                {item.name}
              </Option>
            );
          })}
        </Select>

        <Select
          value={productStatus}
          placeholder="Status"
          style={{ width: 120 }}
          allowClear
          onChange={(value) => {
            setObjFilter({
              ...objFilter,
              productStatus: value,
            });
          }}
        >
          <Option value="1">Actived</Option>
          <Option value="0">Disactive</Option>
        </Select>

        <Button onClick={() => getList(objFilter)} type="primary">
          Filter
        </Button>
        <Button onClick={() => clearFilter()}>Clear</Button>
      </Space>
      <Row gutter={12}>
        {list.map((item, index) => {
          return (
            <Col key={item.product_id} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
              <ProductList
                name={item.name}
                price={item.price + '$'}
                description={item.description}
                image={item.image}
                quantity={item.quantity + 'pcs available'}
                onAddToCart={() => handleAddToCart(item.product_id)} // Pass selected product ID
              />
            </Col>
          );
        })}
      </Row>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          disabled={objFilter.page === 1}
          onClick={() => handlePageChange(objFilter.page - 1)}
        >
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {objFilter.page} of {totalPages}
        </span>
        <button
          disabled={objFilter.page === totalPages}
          onClick={() => handlePageChange(objFilter.page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomeHotItem;
