const Ensalada = require('../models/Ensalada.js');

const getEnsalada =  async (req, res) => {
    const {hasta=8, desde=0} = req.query;
        const query = {estado:true}

    const [total, ensalada] = await Promise.all([
        Ensalada.countDocuments(query),
        Ensalada.find(query)
            .populate('nombre')
            .skip( Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        ensalada
    })
}


const postEnsalada = async (req, res)=>{  
    const body = req.body;
    const ensalada = new Ensalada(body);
    await ensalada.save();
    res.json({
        ensalada
    })
}

const putEnsalada= (req, res) => {
    res.json({
        "message":"Post api",
    })
}

const deleteEnsalada = (req, res) => {
    res.json({
        "message":"Post api",
    })
}

module.exports = {
    getEnsalada,
    postEnsalada,
    deleteEnsalada,
    putEnsalada
}
