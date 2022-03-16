const router = require('express').Router()

const { application } = require('express')
const { restart } = require('nodemon')
const Posts = require('../models/Posts')
const personRoutes = require('./personRoutes')


//criação de dados
router.post('/', async (req, res) => {
    const { userId,id,title,body} = req.body
  
    const posts = {
        userId,
        id,
        title,
        body
    }
  
    try {
      await Posts.create(posts)
  
      res.status(201).json({ message: 'Posts inserido no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  //read dados

  router.get('/', async(req, res) =>{
    try{

        const postes = await Posts.find()

        res.status(200).json(postes)

    } catch (error) {
        res.status(500).json({ erro: error })
      }
})

router.get('/:id',async(req, res) =>{

    // extatir dado da requisição, pela url = req.params
    const id = req.params.id

    try{

        const posts = await Posts.findOne({id: id})

        if(!posts){
            res.status(422).json("Post nao encontrado")
            return
        }

        res.status(200).json(posts)

    }catch (error) {
        res.status(500).json({ erro: error })
      }

})


//update dados

router.patch('/:id', async(req,res) =>{

    const ids = req.params.ids

    const { userId,id,title,body} = req.body

    const posts = {
        userId,
        id,
        title,
        body
    }

    try{

        const updatePosts = await Posts.updateOne({id: id }, posts)

        if(updatePosts.matchedCount ===0){
            res.status(422).json("Posts nao encontrado")
            return
        }

        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json({ erro: error })
      }
})

// Delete dados

router.delete('/:id', async(req,res) =>{

    const id = req.params.id

    const posts = await Posts.findOne({id: id})

        if(!posts){
            res.status(422).json("Post nao encontrado")
            return
        }

    try{

        await Posts.deleteOne({id: id})
        res.status(200).json({message: 'Usuario removido'})

    }catch (error) {
        res.status(500).json({ erro: error })
      }
})

  module.exports = router