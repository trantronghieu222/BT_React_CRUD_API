import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { addStore, updateStore } from '../../redux/reducers/ProductReducer';
const FormStore = ({editingStore, setEditingStore}) => {
    const dispatch = useDispatch();

    const frmStore = useFormik({
        initialValues: {
            id: editingStore ? editingStore.id : '',
            name: editingStore ? editingStore.name : '',
            alias: editingStore ? editingStore.alias : '',
            latitude: editingStore ? editingStore.latitude : '',
            longtitude: editingStore ? editingStore.longtitude : '',
            description: editingStore ? editingStore.description : '',
            image: editingStore ? editingStore.image : '',
            deleted: editingStore ? editingStore.deleted : false,
        },
        enableReinitialize: true,
        onSubmit: (store) => {
            if (editingStore) {
                dispatch(updateStore(store));
            } else {
                dispatch(addStore(store));
            }
            frmStore.resetForm();
            setEditingStore(null); 
        }
    });
    return (
        <div>
            <h1>Form Store</h1>
            {/* ID */}
            <form action="" onSubmit={frmStore.handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Id</label>
                    <input
                        type="number"
                        class="form-control"
                        name="id"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.id}
                    />
                </div>
                {/* Name */}
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="name"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.name}
                    />
                </div>
                {/* Alias */}
                <div class="mb-3">
                    <label for="" class="form-label">Alias</label>
                    <input
                        type="text"
                        class="form-control"
                        name="alias"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.alias}
                    />
                </div>
                {/* Latitude */}
                <div class="mb-3">
                    <label for="" class="form-label">Latitude</label>
                    <input
                        type="text"
                        class="form-control"
                        name="latitude"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.latitude}
                    />
                </div>
                {/* Longtitude */}
                <div class="mb-3">
                    <label for="" class="form-label">Longtitude</label>
                    <input
                        type="text"
                        class="form-control"
                        name="longtitude"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.longtitude}
                    />
                </div>

                {/* Description */}
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <input
                        type="text"
                        class="form-control"
                        name="description"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.description}
                    />
                </div>
                {/* image */}
                <div class="mb-3">
                    <label for="" class="form-label">Image</label>
                    <input
                        type="text"
                        class="form-control"
                        name="image"
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={frmStore.handleChange}
                        value={frmStore.values.image}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    {editingStore ? 'Cập nhật' : 'Thêm'}
                </button>
            </form>
        </div>
    )
}

export default FormStore