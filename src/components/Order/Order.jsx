import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllOrders } from '../../redux/Actions/OrderActions'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import { BASE_URL } from '../../api/Config';
const Order = () => {
    const [category, setCategory] = useState("")
    const [orderT, setOrderT] = useState([])

    console.log(orderT);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const changeOrderTrack = (event) => {
        let index = event.target.selectedIndex;
        let optionElement = event.target.childNodes[index]
        var option =  optionElement.getAttribute('data-id');
        console.log(option);
    }
    let { orders } = useSelector((state) => state.orders)
    const dispatch = useDispatch()

    const orderTracking = async () => {
        let orderTrack = await fetch(`${BASE_URL}OrderTracking/getallordertracking`)
            .then(res => res.json()).then(data => setOrderT(data.message))
    }


    useEffect(() => {
        orderTracking()
        dispatch(GetAllOrders())
    }, [dispatch])

    console.log(orders);




    return (
        <div className='my-5'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Adi</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Miqdari</th>
                        <th scope="col">Qiymet</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders &&
                        orders.map((order) => (
                            <tr key={order.id}>
                                <th scope="row">{order.id}</th>
                                <td>{order.productName}</td>
                                <td>{order.sku}</td>
                                <td>{order.totalQuantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {
                                        order.status.length > 0 ?
                                            <select defaultValue={order.status} onChange={changeOrderTrack} className="form-select" aria-label="Default select example">
                                                {
                                                    orderT &&
                                                    orderT.map((o) => (
                                                        <option key={o.id} data-id={o.id} defaultValue={o.name}>{o.name}</option>
                                                    ))
                                                }
                                            </select>
                                            : ""
                                    }
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Order