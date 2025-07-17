
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import "../../styles/Homepage2.css";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../main";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0); // Total number of products
    const [page, setPage] = useState(1); // Current page
    const [loading, setLoading] = useState(false); // Loading state for "Load More"
    const navigate = useNavigate();

    // Get total products count
    const getTotal = async () => {
        try {
            const { data } = await axios.get(`${serverUrl}/api/v1/product/product-count`);
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
            toast.error("Error fetching total products");
        }
    };

    // Get products for the current page
    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${serverUrl}/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts((prev) => (page === 1 ? data.products : [...prev, ...data.products]));
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };

    // Fetch total and products on component mount
    useEffect(() => {
        getTotal();
        getAllProducts();
    }, []);

    // Load more products when page changes
    useEffect(() => {
        if (page > 1) getAllProducts();
    }, [page]);

    return (
        <Layout>
            <div className="row dashboard">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1 className="text-center">All Products List</h1>
                    <div className="d-flex flex-wrap">
                        {products?.map((p) => (
                            // <Link
                            //     key={p._id}
                            //     to={`/dashboard/admin/product/${p.slug}`}
                            //     className="product-link"
                            // >
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img
                                    src={`${serverUrl}/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    {/* <p className="card-text">{p.description}</p> */}
                                    <p className="card-text">{p.description.substring(0, 60)}...</p>


                                </div>
                                <div className="text-center my-2">
                                    <button
                                        className="btn btn-outline-dark watch-more-btn"
                                        onClick={() => {

                                            () => navigate(`/dashboard/admin/product/${p.slug}}`)
                                        }

                                        }
                                    >
                                        Update Product
                                    </button>
                                </div>

                            </div>

                            // </Link>
                        ))}
                    </div>
                    {/* Load More Button */}
                    <div className="m-2 p-3 text-center">
                        {products && products.length < total && (
                            <button
                                className="btn loadmore"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1);
                                }}
                            >
                                {loading ? "Loading ..." : <> Load More <AiOutlineReload /> </>}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default Products;