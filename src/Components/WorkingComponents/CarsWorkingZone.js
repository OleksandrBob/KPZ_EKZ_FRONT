import React, { useCallback, useEffect, useState } from 'react';

function CarsWorkingZone() {
  const [operation, setOperation] = useState('');

  useEffect(()=>{
    const txtArea = document.getElementById('txtArea');

    const createCar = document.getElementById('CreateCar');
    const createCarf = () => {
      setOperation('create');
      txtArea.value = '';
    };
    createCar.addEventListener('click', createCarf);

    const readCar = document.getElementById('ReadCar');
    const readCarf = () => {
      setOperation('read');
      txtArea.value = '';
    }
    readCar.addEventListener('click', readCarf);

    const updateCar = document.getElementById('UpdateCar');
    const updateCarf = () => {
      setOperation('update');
      txtArea.value = '';
    }
    updateCar.addEventListener('click', updateCarf);

    const deleteCar = document.getElementById('DeleteCar');
    const deleteCarf = () => {
      setOperation('delete');
      txtArea.value = '';
    }
    deleteCar.addEventListener('click', deleteCarf);

    return () => {
      createCar.removeEventListener('click', createCarf);
      readCar.removeEventListener('click', readCarf);
      updateCar.removeEventListener('click', updateCarf);
      deleteCar.removeEventListener('click', deleteCarf);
    }
  },[]);

  const sendRequest = useCallback(async () => {
    if(operation === 'read'){
      let response = await fetch('https://localhost:7077/api/Cars/' + document.getElementById('id').value, {
        method: 'GET',
      });

      let data = await response.json();
      const myJSON = JSON.stringify(data);
      console.log(myJSON);

      const txtArea = document.getElementById('txtArea');
      //for(let i = 0; i< data.length; i++){
        txtArea.value = myJSON;
      //}

      alert(response.status);
    }
    else if(operation === 'create'){
      const mName = document.getElementById('modelName').value;
      const mlg = document.getElementById('brand').value;
      const price = document.getElementById('price').value;
      const sldDate = document.getElementById('soldDate').value;

    let car = {
      modelName: mName,
      brand: parseInt(mlg),
      price: parseInt(price),
      soldDate: sldDate
    }

      let response = await fetch('https://localhost:7077/api/Car', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(car)
      });

      alert(response.status);
    }

    else if(operation === 'update'){
      const id = document.getElementById('id').value;
      const mName = document.getElementById('modelName').value;
      const mlg = document.getElementById('brand').value;
      const price = document.getElementById('price').value;
      const sldDate = document.getElementById('soldDate').value;

    let car = {
      modelName: mName,
      brand: parseInt(mlg),
      price: parseInt(price),
      soldDate: sldDate
    }

        let response = await fetch('https://localhost:7077/api/Car/' + id, {

          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          method: 'PUT',
          body: JSON.stringify(car)
        });

        alert(response.status);
      }

      else if(operation === 'delete'){  
        const id = document.getElementById('id').value;
  
        let response = await fetch('https://localhost:7077/api/Car/' + id, {
          method: 'DELETE',
        });

        alert(response.status);
      }
  }, [operation]);

  return (
    <div id = 'fractalsWorkingZone'>
      <div id = 'fractalRenderMenu'>
        <div className = 'RenderMenuTitle'>
            {operation + ' '}Cars
        </div>

        <div id = 'RenderMenuButtons'>
            <div class = 'RenderMenuButton' id = 'CreateCar'>
                CREATE
            </div>
            <div class = 'RenderMenuButton' id = 'ReadCar'>
                READ
            </div>
            <div class = 'RenderMenuButton' id = 'UpdateCar'>
                UPDATE
            </div>
            <div class = 'RenderMenuButton' id = 'DeleteCar'>
                DELETE
            </div>
        </div>

        <button class='sendBut' onClick={sendRequest}>send</button>
      </div>
      <div id = 'fields'>
        {(operation ==='update' || operation === 'delete' || operation === 'read') && <input type={'text'} id ='id'></input>}
        {operation === 'read' && <textarea id='txtArea'></textarea>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='modelName'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='brand'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='price'></input>}
        {(operation ==='update' || operation === 'create') && <input type={'text'} id ='soldDate'></input>}
      </div>
    </div>
  )
}

export default CarsWorkingZone;
