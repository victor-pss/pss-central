const Location = require('../models/locations');

/*******************************************
 * Schema: Locations
 * -------------------
 * name: String
 * address: {
 *    street: String,
 *    city: String,
 *    state: String,
 *    zip: String,
 *    country: String
 *  }
 * phone: String
 * email: String
 * status: Active | Inactive | Closed
 * created_at: Date
 * updated_at: Date
 *
 *******************************************/

const createLocation = async (req, res) => {
  try {
    //const newLocation = new Location(req.body);
    const newLocation = new Location({
      name: "PSS HQ",
      address: {
        street: "8659 Have Ave",
        city: "Rancho Cucamonga",
        state: "CA",
        zip: "91730",
        country: "USA"
      },
      phone: "+19097588300",
      email: "customerservice@plasticsurgerystudios.com",
      status: "Active",
      created_at: new Date(),
      updated_at: new Date(),
    });
    const savedLocation = await newLocation.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocations = async (req, res) => {
  try {
    const allLocations = await Location.find({})
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocationByName = async (req, res) => {
  try {
    const term = req.body.name;
    const query = { name: { $regex: term, $options: 'i' }};
    
    const location = await Location.findOne(query);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: "The ID you are requesting does not exist!" });
  }
};

const getLocationsByStatus = async (req, res) => {
  try {
    const query = { status: req.params.status };
    
    const location = await Location.find(query);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLocationById = async (req, res) => {
  try {
    const body = req.body;
    const update = { ...body, updated_at: new Date() };

    const location = await Location.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLocationById = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLocation, getLocations, getLocationByName, getLocationById, getLocationsByStatus, updateLocationById, deleteLocationById };
