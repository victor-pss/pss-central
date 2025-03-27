// website controller
const Website = require('../models/websites');

/*******************************************
 * Schema: Websites
 * -------------------
 * url: String
 * ip: String
 * dns_hosts: Array of Strings
 * registrar: String
 * isProduction: Boolean
 * status: Live | Suspended | Launching
 * ssl_status: Valid | Invalid
 * last_checked: Date
 * created_at: Date
 * updated_at: Date
 *
 *******************************************/

const createWebsite = async (req, res) => {
  try {
    const newWebsite = new Website(req.body);
    //const newWebsite = new Website({
    //  url: "plasticsurgerystudios.com",
    //  ip: "92.204.128.116",
    //  dns_hosts: ["ns1.psscloud.com", "ns2.psscloud.com", "ns3.psscloud.com", "ns4.psscloud.com"],
    //  registrar: "GoDaddy",
    //  isProduction: true,
    //  status: "Live",
    //  ssl_status: "Valid",
    //  last_checked: new Date(),
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

const getWebsiteByUrl = async (req, res) => {
  try {
    const term = req.body.url;
    const query = { url: { $regex: term, $options: 'i' }};
    
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

module.exports = { createWebsite, getWebsites, getWebsiteByUrl, getWebsiteById, getWebsitesByStatus, updateWebsiteById, deleteWebsiteById };
