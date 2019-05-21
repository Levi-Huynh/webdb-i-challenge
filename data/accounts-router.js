const express = require('express');
 const Accounts = require('./accounts-model.js');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        const budget = await Accounts.find();
        res.status(200).json(budget);
    }catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving Budget'
        })
    }
})


router.get('/:id', async (req, res) => {
    try{
        const budget = await Accounts.findById(req.params.id);
        if(budget) {
            res.status(200).json(budget);
        }else{
            res.status(404).json({message: 'budget does not exist'});
        }
    } catch (error) {
      
        res.status(500).json({
          message: 'Error retrieving the post',
        });
      }
})

 
router.post('/', async(req, res) =>{
    try{
        const budget = await Accounts.add(req.body);
        res.status(201).json(budget);
    }
    catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error adding user',
        });
      }
})

router.delete('/:id', async(req, res) =>{
    try{
        const budget=await Accounts.remove(req.params.id);
        if(budget>0) {
            res.status(200).json({message: 'budget removed'});
        }else {
            res.status(404).json({message: 'budget not found'});
        }
    }catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error removing the user',
        });
      }
})

router.put('/:id', async (req, res) => {
    try{
        const budget= await Accounts.update(req.params.id, req.body);
        if(budget) {
            res.status(200).json(budget);
        }else{
            res.status(404).json({message: 'budget not found'});
        }
    }catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error updating the hub',
        });
      }

})

module.exports = router;