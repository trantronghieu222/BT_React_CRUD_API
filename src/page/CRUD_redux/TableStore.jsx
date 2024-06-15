import React, { useEffect, useState } from 'react'
import FormStore from './FormStore'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStoreApi } from '../../redux/reducers/ProductReducer'
import { delStore, updateStore } from '../../redux/reducers/ProductReducer'

const TableStore = () => {
    const { arrStore } = useSelector((state) => state.storeReducer);
    const [editingStore, setEditingStore] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStoreApi());
    }, [])

    const handleEdit = (store) => {
        setEditingStore(store)
    }
    return (
        <div>
            <FormStore editingStore={editingStore} setEditingStore={setEditingStore}></FormStore>
            <hr />
            {/* Danh sách store */}
            <h1 className='py-5'>Danh sách store</h1>
            <div
                class="table-responsive"
            >
                <table
                    class="table"
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Alias</th>
                            <th scope='col'>longtitude</th>
                            <th scope='col'>description</th>
                            <th scope='col'>image</th>
                            <th scope='col'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrStore.map((store, index) => {
                            return (
                                <tr class="" key={index}>
                                    <td scope="row">{store.id}</td>
                                    <td>{store.name}</td>
                                    <td>{store.alias}</td>
                                    <td>{store.latitude}</td>
                                    <td>{store.longtitude}</td>
                                    <td>{store.description}</td>
                                    <td><img src={store.image} alt="image" /></td>
                                    <td>
                                        <button className='btn btn-primary me-2' onClick={() => {
                                            handleEdit(store);
                                        }}>Cập nhật</button>
                                        <button className='btn btn-danger' onClick={() => {
                                            dispatch(delStore(store));
                                        }}>Xoá</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TableStore