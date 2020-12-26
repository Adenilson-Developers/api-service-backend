require('dotenv').config()

const { GoogleSpreadsheet } = require('google-spreadsheet');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

const doc = new GoogleSpreadsheet('1JEWYHaAs_D1P-dpWv8meOZbGUoeSX-70LYeIx8BlAwk')

app.post('/create', async ( request, response) =>{

    const {
        name,
        email,
        whatsapp,
        descricao,
    } = request.body;

    try{
        await doc.useServiceAccountAuth({
           client_email: ,
           private_key:,
    });    

        await doc.loadInfo();
        const sheet = doc.sheetsById[0];
        sheet.addRow({name: request.body.name ,
        email: request.body.email, 
        whatsapp: request.body.whatsapp, 
        descricao: request.body.descricao});

        return response.status(201).send();

    }catch(error) {
        return response.status(400).json({error: 'Error ao inserir dados'})
    }
} )

app.listen(process.env.APP_URL || 3333);