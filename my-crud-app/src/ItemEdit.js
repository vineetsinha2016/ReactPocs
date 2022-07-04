import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ItemEdit = () => {
  const initialFormState = {
    itemName: '',
    itemDescription: '',
    category: '',
    categoryCode: '',
    frequency: ''
  };
  const navigate = useNavigate();
  const { itemUid } = useParams();
  const [item, setItem] = useState(initialFormState);
  

  useEffect(() => {
    if (itemUid !== 'new') {
      fetch(`http://localhost:8091/hmp/v1/items/${itemUid}`)
        .then(response => response.json())
        .then(data => setItem(data.data));
    }
  }, [itemUid, setItem]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setItem({ ...item, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:8091/hmp/v1/items' + (item.itemUid ? '/' + item.itemUid : ''), {
      method: (item.itemUid) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    setItem(initialFormState);
    navigate('/items');
  }

  const title = <h2>{item.itemUid ? 'Edit Item' : 'Add Item'}</h2>;

  return (<div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="itemName">Name</Label>
            <Input type="text" name="itemName" id="itemName" value={item.itemName || ''}
                   onChange={handleChange} autoComplete="itemName"/>
          </FormGroup>
          <FormGroup>
            <Label for="itemDescription">Description</Label>
            <Input type="text" name="itemDescription" id="itemDescription" value={item.itemDescription || ''}
                   onChange={handleChange} autoComplete="itemDescription"/>
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input type="text" name="category" id="category" value={item.category || ''}
                   onChange={handleChange} autoComplete="category"/>
          </FormGroup>
          {/* <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="stateOrProvince">State/Province</Label>
              <Input type="text" name="stateOrProvince" id="stateOrProvince" value={group.stateOrProvince || ''}
                     onChange={handleChange} autoComplete="address-level1"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="country">Country</Label>
              <Input type="text" name="country" id="country" value={group.country || ''}
                     onChange={handleChange} autoComplete="address-level1"/>
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="country">Postal Code</Label>
              <Input type="text" name="postalCode" id="postalCode" value={group.postalCode || ''}
                     onChange={handleChange} autoComplete="address-level1"/>
            </FormGroup>
          </div> */}
          <FormGroup>
            <Label for="categoryCode">Category Code</Label>
            <Input type="text" name="categoryCode" id="categoryCode" value={item.categoryCode || ''}
                   onChange={handleChange} autoComplete="categoryCode"/>
          </FormGroup>
          <FormGroup>
            <Label for="frequency">Frequency</Label>
            <Input type="text" name="frequency" id="frequency" value={item.frequency || ''}
                   onChange={handleChange} autoComplete="frequency"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/items">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default ItemEdit;