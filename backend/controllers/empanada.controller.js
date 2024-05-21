const Empanada = require('../models/Empanada.js');

const getEmpanada =  async (req, res) => {
    const {hasta=8, desde=0} = req.query;
        const query = {estado:true}

    const [total, empanada] = await Promise.all([
        Empanada.countDocuments(query),
        Empanada.find(query)
            .populate('nombre')
            .skip( Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        empanada
    })
}


const postEmpanada = async (req, res)=>{  
    const body = req.body;
    const empanada = new Empanada(body);
    await empanada.save();
    res.json({
        empanada
    })
}

const putEmpanada= (req, res) => {
    res.json({
        "message":"Post api",
    })
}

const deleteEmpanada = (req, res) => {
    res.json({
        "message":"Post api",
    })
}

module.exports = {
    getEmpanada,
    postEmpanada,
    putEmpanada,
    deleteEmpanada
}
