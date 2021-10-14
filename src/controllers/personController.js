import PersonService from "../services/personService";


const getAllPersons = async (req,res) => {
    try {
       const persons = await  PersonService.getPersons()

       res.status(200).send(persons)

    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

const createPerson = async (req,res) => {
    
        const newPerson = req.body
    try {
       const person = await  PersonService.addPerson(newPerson)
        res.status(201).send(person)
    } catch (error) {
        res.send({message: 'shit happens' ,error})
        console.log(error)
    }
}

const getOnePerson = async (req,res) => {
    const {_id} = req.params
    try {
        const person = await  PersonService.getOnePersons(_id)
        res.status(200).send(person)
    } catch (error) {
        res.send(error)
        
    }
}
const updatePerson = async (req,res) => {
    const {_id} = req.params
    const updatedPerson = req.body
    try {
        const person = await  PersonService.editPerson(_id,updatedPerson)
        res.status(200).send(person)
        
    } catch (error) {
        res.send(error)
        
    }
}
const deletePerson = async (req,res) => {

    const {_id} = req.params
    try {
        const person = await  PersonService.deletePerson(_id)
        res.status(200).send(person)
    } catch (error) {
        res.send(error)
        
    }
}

export default { deletePerson, createPerson,getOnePerson, updatePerson, getAllPersons}