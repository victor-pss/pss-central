const Client = require('../models/clients');

const createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    //const newClient = new Client({
    //  name: "Victor Alcaraz",
    //  email: "vctralcaraz@gmail.com",
    //  status: "Active",
    //  created_at: new Date(0),
    //  updated_at: new Date(0),
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

module.exports = { createClient, getClients };
