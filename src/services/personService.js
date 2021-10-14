import Person from "../models/Person";

const getPersons = async (payload) => await Person.find({...payload})


const getOnePersons = async (_id) => await Person.findOne({_id})

const addPerson = async (payload) => await Person.create(payload)

const deletePerson = async (_id) => await Person.findByIdAndDelete({_id})

const editPerson = async (_id,payload) => await Person.findByIdAndUpdate({_id}, {...payload})


export default { getPersons, getOnePersons  , addPerson, deletePerson, editPerson };
