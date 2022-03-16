const router = require('express').Router()

const { application } = require('express')
const { restart } = require('nodemon')
const Person = require('../models/Person')

//criação de dados
router.post('/', async (req, res) => {
    const { id,name,userName,email,street,suite,city,zipcode,lat,lng,phone,website,nameCompany,catchPhrase,bs} = req.body
    if(!name){
      res.status(422).json({error: 'O nome é obrigatorio'})
      return
    }
  
    const person = {
      id,
      name,
      userName,
      email,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
      phone,
      website,
      nameCompany,
      catchPhrase,
      bs
    }
  
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

// read dados

router.get('/', async(req, res) =>{
    try{

        const people= await Person.find()

        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({ erro: error })
      }
})

router.get('/:id',async(req, res) =>{

    // extatir dado da requisição, pela url = req.params
    const id = req.params.id

    try{

        const person = await Person.findOne({id: id})

        if(!person){
            res.status(422).json("usuario nao encontrado")
            return
        }

        res.status(200).json(person)

    }catch (error) {
        res.status(500).json({ erro: error })
      }

})

//update dados

router.patch('/:ids', async(req,res) =>{

    const ids = req.params.ids

    const { id,name,userName,email,street,suite,city,zipcode,lat,lng,phone,website,nameCompany,catchPhrase,bs} = req.body

    const person = {
        id,
        name,
        userName,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        nameCompany,
        catchPhrase,
        bs
      }

    try{

        const updatePerson = await Person.updateOne({id: ids }, person)

        if(updatePerson.matchedCount ===0){
            res.status(422).json("usuario nao encontrado")
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ erro: error })
      }
})


// Delete dados

router.delete('/:id', async(req,res) =>{

    const id = req.params.id

    const person = await Person.findOne({id: id})

        if(!person){
            res.status(422).json("usuario nao encontrado")
            return
        }

    try{

        await Person.deleteOne({id: id})
        res.status(200).json({message: 'Usuario removido'})

    }catch (error) {
        res.status(500).json({ erro: error })
      }
})

  module.exports = router