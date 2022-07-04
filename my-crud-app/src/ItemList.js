import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const ItemList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('hmp/v1/items')
        .then(response => response.json())
        .then(data => {
          setItems(data.data);
          setLoading(false);
        })
    }, []);

    const remove = async (itemUid) => {
        await fetch(`hmp/v1/items/${itemUid}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedItems = [...items].filter(i => i.itemUid !== itemUid);
          setItems(updatedItems);
        });
      }

      if (loading) {
        return <p>Loading...</p>;
      }

      const itemList = items.map(item => {
        const category = `${item.category}`;// || ''} ${group.city || ''} ${group.stateOrProvince || ''}`;
        return <tr key={item.itemUid}>
          <td style={{whiteSpace: 'nowrap'}}>{item.itemName}</td>
          <td>{category}</td>
          <td>
            {item.frequency}
          </td>
          <td>
            <ButtonGroup>
              <Button size="sm" color="primary" tag={Link} to={"/items/" + item.itemUid}>Edit</Button>
              <Button size="sm" color="danger" onClick={() => remove(item.itemUid)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      });
      return (
        <div>
          <AppNavbar/>
          <Container fluid>
            <div className="float-end">
              <Button color="success" tag={Link} to="/items/new">Add Item</Button>
            </div>
            <h3>Item List in Component</h3>
            <Table className="mt-4">
              <thead>
              <tr>
                <th width="20%">Name</th>
                <th width="20%">Category</th>
                <th>Frequency</th>
                <th width="10%">Actions</th>
              </tr>
              </thead>
              <tbody>
              {itemList}
              </tbody>
            </Table>
          </Container>
        </div>
      );
    };

      export default ItemList;