const Helado = require('../models/Helado.js');

const getHelados =  async (req, res) => {
    const {hasta=8, desde=0} = req.query;
        const query = {estado:true}

    const [total, helado] = await Promise.all([
        Helado.countDocuments(query),
        Helado.find(query)
            .populate('nombre')
            .skip( Number(desde))
            .limit(Number(hasta))
    ]);

    res.json({
        total,
        helado
    })
}


const postHelados = async (req, res)=>{  
    const body = req.body;
    const helado = new Helado(body);
    await helado.save();
    res.json({
        helado
    })
}

const putHelados = (req, res) => {
    res.json({
        "message":"Post api",
    })
}

const deleteHelados = (req, res) => {
    res.json({
        "message":"Post api",
    })
}

module.exports = {
    getHelados,
    postHelados,
    deleteHelados,
    putHelados
}
