const Desayuno = require('../models/Desayuno.js');

const getDesayuno =  async (req, res) => {
    const {hasta=8, desde=0} = req.query;
        const query = {estado:true}

    const [total, desayuno] = await Promise.all([
        Desayuno.countDocuments(query),
        Desayuno.find(query)
            .populate('nombre')
            .skip( Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        desayuno
    })
}


const postDesayuno = async (req, res)=>{  
    const body = req.body;
    const desayuno = new Desayuno(body);
    await desayuno.save();
    res.json({
        desayuno
    })
}

const putDesayuno= (req, res) => {
    res.json({
        "message":"Post api",
    })
}

const deleteDesayuno = (req, res) => {
    res.json({
        "message":"Post api",
    })
}

module.exports = {
    getDesayuno,
    postDesayuno,
    putDesayuno,
    deleteDesayuno
}
