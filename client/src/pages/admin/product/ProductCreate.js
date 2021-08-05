import React, { useState } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";

const initialState = {
    title: "",
    description: "",
    price: "0",
    categories: [],
    category: "",
    subs: [],
    shipping: "Yes",
    quantity: "0",
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Casio", "Ibanez", "Yamaha"],
    color: "White",
    brand: "Casio",
};

const ProductCreate = () => {
    const [values, setValues] = useState(initialState);

    // redux
    const { user } = useSelector((state) => ({ ...state }));

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(values, user.token)
            .then((res) => {
                console.log(res);
                toast.success(`"${res.data.title}" is created`);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                // if (err.response.status === 400) toast.error(err.response.data);
                toast.error(err.response.data.err);
            });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(e.target.name, " ----- ", e.target.value);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>

                <div className="col-md-10">
                    <h4>Product create</h4>
                    <hr />

                    <ProductCreateForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        values={values}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;
