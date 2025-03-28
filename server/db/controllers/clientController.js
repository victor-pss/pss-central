const Client = require('../models/clients');

/*******************************************
 * Schema: Clients
 * -------------------
 * name: String
 * clientCode: String
 * email: String
 * phone: String
 * status: Active | Inactive | Cancelling | Cancelled | Prospect
 * website_ids: Array of Website IDs
 * location_ids: Array of Location IDs
 * service_ids: Array of Service IDs
 * created_at: Date
 * updated_at: Date
 *
 *******************************************/

const createClient = async (req, res) => {
  try {
    client = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    }
    const newClient = new Client(client);
    //const newClient = new Client({
    //  name: "Victor Alcaraz",
    //  email: "vctralcaraz@gmail.com",
    //  status: "Active",
    //  phone: "+19096451449",
    //  created_at: new Date(),
    //  updated_at: new Date(),
    //});
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClients = async (req, res) => {
  try {
    const allClients = await Client.find({})
    res.status(200).json(allClients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClientByName = async (req, res) => {
  try {
    const term = req.body.name;
    const query = { name: { $regex: term, $options: 'i' }};
    
    const client = await Client.findOne(query);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "The ID you are requesting does not exist!" });
  }
};

const getClientsByStatus = async (req, res) => {
  try {
    const query = { status: req.params.status };
    
    const client = await Client.find(query);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClientById = async (req, res) => {
  try {
    const body = req.body;
    const update = { ...body, updated_at: new Date() };

    const client = await Client.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClientById = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createClient, getClients, getClientByName, getClientById, getClientsByStatus, updateClientById, deleteClientById };
