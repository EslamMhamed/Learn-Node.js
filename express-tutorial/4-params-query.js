const express = require("express")
const app = express()
const {products} = require("./data")



app.get("/api/v1/query", (req, res)=>{
    const {search, limit} = req.query
    let sortedProducts= [...products]
    if(search){
        sortedProducts = sortedProducts.filter(product => product.name.includes(search))
    }
    if(limit){
        sortedProducts= sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts< 1){
        // res.status(200).send("No Products matched your search")
        res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)

})


app.use((req, res)=>{
    res.status(404).send("Page Not Found")
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
})