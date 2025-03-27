// website controller
const Website = require('../models/websites');

/*******************************************
 * Schema: Websites
 * -------------------
 * name: String
 * websiteCode: String
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

const createWebsite = async (req, res) => {
  try {
    const newWebsite = new Website(req.body);
    //const newWebsite = new Website({
    //  name: "Victor Alcaraz",
    //  email: "vctralcaraz@gmail.com",
    //  status: "Active",
    //  phone: "+19096451449",
    //  created_at: new Date(),
    //  updated_at: new Date(),
    //});
    const savedWebsite = await newWebsite.save();
    res.status(201).json(savedWebsite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWebsites = async (req, res) => {
  try {
    const allWebsites = await Website.find({})
    res.status(200).json(allWebsites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWebsiteByName = async (req, res) => {
  try {
    const term = req.body.name;
    const query = { name: { $regex: term, $options: 'i' }};
    
    const website = await Website.findOne(query);
    res.status(200).json(website);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWebsiteById = async (req, res) => {
  try {
    const website = await Website.findById(req.params.id);
    res.status(200).json(website);
  } catch (error) {
    res.status(500).json({ message: "The ID you are requesting does not exist!" });
  }
};

const getWebsitesByStatus = async (req, res) => {
  try {
    const query = { status: req.params.status };
    
    const website = await Website.find(query);
    res.status(200).json(website);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateWebsiteById = async (req, res) => {
  try {
    const body = req.body;
    const update = { ...body, updated_at: new Date() };

    const website = await Website.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(website);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteWebsiteById = async (req, res) => {
  try {
    const website = await Website.findByIdAndDelete(req.params.id);
    res.status(200).json(website);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createWebsite, getWebsites, getWebsiteByName, getWebsiteById, getWebsitesByStatus, updateWebsiteById, deleteWebsiteById };
