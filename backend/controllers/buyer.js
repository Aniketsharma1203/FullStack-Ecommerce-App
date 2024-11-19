import Products from "../models/products.js";

export const getTshirts = async(req, res) => {
    const Tshirts = await Products.find({special_category: "tshirt"})
    if(!Tshirts) res.status(400).send("No Data Found")
        else res.status(200).send(Tshirts);
};

export const getWomenClothes = async(req, res) => {
    const clothes = await Products.find({category: "women"})
    if(!clothes) res.status(400).send("No Data Found")
        else res.status(200).send(clothes);
};

export const getMenClothes = async(req, res) => {
    const clothes = await Products.find({category: "men"})
    if(!clothes) res.status(400).send("No Data Found")
        else res.status(200).send(clothes);
};

