import React, { useEffect, useState, useCallback } from 'react';

function SellersWorkingZone() {
    const [operation, setOperation] = useState('');

    useEffect(()=>{
      const createCustomer = document.getElementById('CreateCustomer');
      const createCustomerf = () => setOperation('create');
      createCustomer.addEventListener('click', createCustomerf);
  
      const readCustomer = document.getElementById('ReadCustomer');
      const readCustomerf = () => setOperation('read');
      readCustomer.addEventListener('click', readCustomerf);
  
      const updateCustomer = document.getElementById('UpdateCustomer');
      const updateCustomerf = () => setOperation('update');
      updateCustomer.addEventListener('click', updateCustomerf);
  
      const deleteCustomer = document.getElementById('DeleteCustomer');
      const deleteCustomerf = () => setOperation('delete');
      deleteCustomer.addEventListener('click', deleteCustomerf);
  
      return () =>{
        createCustomer.removeEventListener('click', createCustomerf);
        readCustomer.removeEventListener('click', readCustomerf);
        updateCustomer.removeEventListener('click', updateCustomerf);
        deleteCustomer.removeEventListener('click', deleteCustomerf);
      }
    },[]);
  
    const sendRequest = useCallback(async () => {
      if(operation === 'read'){
        let response = await fetch('https://localhost:7118/api/Customers', {
          method: 'GET',
        });
  
        let data = await response.json();
  
        const txtArea = document.getElementById('txtArea');
        for(let i = 0; i< data.length; i++){
          txtArea.value += JSON.stringify(data[i]) + '\n \n';
        }

        alert(response.status);
      }
      else if(operation === 'create'){

      const fullName = document.getElementById('fullName').value;
      const doccumentsCode = document.getElementById('doccumentsCode').value;
      const eMail = document.getElementById('eMail').value;

      let customer = {
        fullName: fullName,
        doccumentsCode: doccumentsCode,
        eMail: eMail
      }
  
        let response = await fetch('https://localhost:7118/api/Customers', {
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          method: 'POST',
          body: JSON.stringify(customer)
        });

        alert(response.status);
      }

      else if(operation === 'update'){
        const fullName = document.getElementById('fullName').value;
        const doccumentsCode = document.getElementById('doccumentsCode').value;
        const eMail = document.getElementById('eMail').value;
        const id = document.getElementById('id').value;
  
        let customer = {
          fullName: fullName,
          doccumentsCode: doccumentsCode,
          eMail: eMail
        }

          let response = await fetch('https://localhost:7118/api/Customers/' + id, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            method: 'PUT',
            body: JSON.stringify(customer)
          });
  
          alert(response.status);
        }
  
        else if(operation === 'delete'){    
          const id = document.getElementById('id').value;

            let response = await fetch('https://localhost:7118/api/Customers/' + id, {
              method: 'DELETE',
            });
    
            alert(response.status);
          }
    }, [operation]);
  
    return (
      <div id = 'fractalsWorkingZone'>
        <div id = 'fractalRenderMenu'>
          <div className = 'RenderMenuTitle'>
              {operation + ' '}Customers
          </div>
  
          <div id = 'RenderMenuButtons'>
              <div class = 'RenderMenuButton' id = 'CreateCustomer'>
                  CREATE
              </div>
              <div class = 'RenderMenuButton' id = 'ReadCustomer'>
                  READ
              </div>
              <div class = 'RenderMenuButton' id = 'UpdateCustomer'>
                  UPDATE
              </div>
              <div class = 'RenderMenuButton' id = 'DeleteCustomer'>
                  DELETE
              </div>
          </div>
  
          <button class='sendBut' onClick={sendRequest}>send</button>
        </div>
        <div id = 'fields'>
        {operation === 'read' && <textarea id='txtArea' disabled></textarea>}
        {(operation ==='update' || operation === 'delete') && <input type={'text'} id ='id'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='fullName'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='doccumentsCode'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='eMail'></input>}
      </div>
      </div>
    )
}

export default SellersWorkingZone;
