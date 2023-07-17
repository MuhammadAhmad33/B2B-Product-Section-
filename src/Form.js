import { useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";


const Form = () => {

    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [Category, setCategory] = useState('');
    const [subCategory, setsubCategory] = useState('');
    const [color, setColor] = useState('');
    const [cost, setCost] = useState('');
    const [currency, setCurrency] = useState('');
    const [price, setPrice] = useState('');
    const [price2, setPrice2] = useState('');
    const [profit, setProfit] = useState('');
    const [vat, setVat] = useState('');

    const h = useHistory();

    const submit = (e) => {
        e.preventDefault();
        const data = { sku, name, type, brand, Category, subCategory, color, cost, currency, price, price2, profit, vat };
        console.log(data);
        fetch('http://localhost:9000/data', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Record Added');
        })
        h.push('/');
        window.location.reload();
    }
    const back = (e) => {
        console.log(e, 'bCK')
        h.push('/');
        window.location.reload();
    }

    return (
        <div className="container">
            <div>
                <button onClick={back} className="button1"><i class="fa-solid fa-arrow-left-long"></i></button>
                <h3 className="h3">Add New Product/Service</h3>
            </div>
            <div className="c2">
                <h4 className="h4">Product Details</h4>
                <label class="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                    <span className="active">Active</span>
                </label>
                <input type="checkbox" className="checkbox1" />
                <label className="buy">Buy</label>
                <input type="checkbox" className="checkbox2" />
                <label className="sell">Sell</label>
                <input type="date" className="date" />
            </div>
            <form onSubmit={submit} className="form">
                <label className="e1"><span className="a">*</span> Sku</label>
                <input className="i1"
                    id="sku" value={sku} minLength="4"
                    onChange={(e) => setSku(e.target.value)}
                    type="text" placeholder="Sku" required="fill it" />
                <label className="e2"><span className="a">*</span> Product/Service Name</label>
                <input className="i2"
                    value={name} minLength="4" onChange={(e) => setName(e.target.value)} type="text" placeholder="Product/Service Name" required />
                <label className="e3">Type</label>

                <select className="i3"
                    value={type} onChange={(e) => setType(e.target.value)}
                >
                    <option hidden>Inventory</option>
                    <option className="c" >Inventory</option>
                    <option className="c">Service</option>
                </select>

                <label className="e4">Brand</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} className="i4">
                    <option selected hidden>Brand</option>
                    <option className="c" >Apple</option>
                    <option className="c">Coca-Cola</option>
                </select>

                <label className="e5">Category</label>
                <select value={Category} onChange={(e) => setCategory(e.target.value)} className="i5">
                    <option className="c" selected hidden>Category</option>
                    <option className="c" >Soft-Drinks</option>
                    <option className="c">Mobile</option>
                    <option className="c">Phones</option>
                </select>
                <label className="e6">Sub Category</label>
                <select value={subCategory} onChange={(e) => setsubCategory(e.target.value)} className="i6">
                    <option selected hidden>Sub Category</option>
                    <option className="c" >New</option>
                    <option className="c">4gb Ram</option>
                    <option className="c">Fizzy</option>
                </select>
                <label className="e7">Color</label>
                <select value={color} onChange={(e) => setColor(e.target.value)} className="i7">
                    <option selected hidden>Color</option>
                    <option className="c" >Gold</option>
                    <option className="c">Red</option>
                    <option className="c">White</option>

                </select>
                <label className="e8">Purchase Cost</label>
                <input className="i8" value={cost} onChange={(e) => setCost(e.target.value)} type="text" placeholder="Purchase Cost" />
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="b1">
                    <option className="c" hidden>British Pound Sterling |£</option>
                    <option className="c" >British Pound Sterling |£</option>
                    <option className="c">Pakistani Rupees |PKRs</option>
                </select>
                <label className="e9">Sales Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} className="i9" type="text" placeholder="Sales Price" />
                <select value={price2} onChange={(e) => setPrice2(e.target.value)} className="b2">
                    <option className="c" hidden>British Pound Sterling |£</option>
                    <option className="c" >British Pound Sterling |£</option>
                    <option className="c">Pakistani Rupees |PKRs</option>
                </select>
                <label className="e10">Profit (%)</label>
                <input value={profit} onChange={(e) => setProfit(e.target.value)} className="i10" type="text" placeholder="Profit (%)" />
                <label className="e11">VAT (%)</label>
                <input value={vat} onChange={(e) => setVat(e.target.value)} className="i11" type="text" placeholder="Default VAT Rate" />
                <button className="save">Save</button>
            </form>
        </div>
    );
}

export default Form;