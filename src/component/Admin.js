import React, { useContext } from "react"
import { Form, Button, Container, } from 'react-bootstrap'

import { Link, useSearchParams } from "react-router-dom"

import { useEffect } from "react"

import { useState } from "react"

import DataTable from 'react-data-table-component'
import { UserContext } from "../App.js"
import { authApi, endpoints } from "../configs/Api.js"
const Admin = () => {
    const [user, dispatch] = useContext(UserContext)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [cateId, setCateId] = useState()
    const [search, setSearch] = useState('')
    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);



    const caseInsensitiveSort = (rowA, rowB) => {
        const a = rowA.title.toLowerCase();
        const b = rowB.title.toLowerCase();

        if (a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }

        return 0;
    };
    const columns = [
        {
            name: 'Tiêu đề',
            selector: row => row.title,
            sortable: true,
            sortFunction: caseInsensitiveSort
        },
        {
            name: 'Nội dung tin tức',
            selector: row => row.description,
            sortable: true,
            sortFunction: caseInsensitiveSort
        },
    ];
    const paginationComponentOptions = {
        rowsPerPageText: 'Hiển thị',
        rangeSeparatorText: 'trong tổng số',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);

        console.log("Selected Rows: ", selectedRows);
        if (selectedRows.length > 0) {
            console.log("Selected Rows: ", selectedRows.at(0).id);

        }


    };

    // Toggle the state so React Data Table changes to clearSelectedRows are triggered
    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    };
    useEffect(() => {
        const loadProducts = async () => {
            const res = await authApi().get(endpoints['products'], { params: { cateId, search } })
            setProducts(res.data)
        }
        loadProducts()
    }, [cateId, search])


    useEffect(() => {
        const loadCategories = async () => {
            const res2 = await authApi().get(endpoints['categories'])
            console.log(res2.data)
            setCategories(res2.data)
        }
        loadCategories()
    }, [])



    const getCategories = async (id) => {
        setCateId(id)
    }

    const handleSearchInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSearchButtonClick = () => {
        setSearch(search);
    }
    let content = <>

        <Container>

            <div class="row align-items-center justify-content-between pt-3">
                <div class="col-auto mb-3">
                    <h3 class="page-header-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        Danh sách San Pham
                    </h3>
                </div>
                <div class="col-12 col-xl-auto mb-3">
                    <Link class="btn btn-sm btn-light text-primary" to="/add-product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus me-1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Thêm San Pham moi
                    </Link>
                </div>
            </div>
            {/* `/posts/update/${selectedRows.at(0).id}` */}
            {selectedRows.length > 0 ? <Link to={`/update/${selectedRows.at(0).id}`} ><Button style={{ backgroundColor: '#4CAF50', borderRadius: '10px' }} > Chỉnh Sửa</Button></Link>
                : <span></span>}
            <DataTable columns={columns} data={products} selectableRows onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows} pagination paginationComponentOptions={paginationComponentOptions} />

        </Container>

    </>





    return (
        <>

            {content}

        </>
    )

}
export default Admin;
