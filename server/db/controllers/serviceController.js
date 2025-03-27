// service controller
const Service = require('../models/services');

/*******************************************
 * Schema: Services
 * -------------------
 * name: String
 * department: String
 * description: String
 * status: Active | Inactive
 * created_at: Date
 * updated_at: Date
 *
 *******************************************/

const createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    //const newService = new Service({
    //  name: "SEO",
    //  department: "Marketing",
    //  description: "Search Engine Optimization for website rankings.",
    //  created_at: new Date(),
    //  updated_at: new Date(),
    //});
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServices = async (req, res) => {
  try {
    const allServices = await Service.find({})
    res.status(200).json(allServices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServiceByName = async (req, res) => {
  try {
    const term = req.body.name;
    const query = { name: { $regex: term, $options: 'i' }};
    
    const service = await Service.findOne(query);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "The ID you are requesting does not exist!" });
  }
};

const getServicesByStatus = async (req, res) => {
  try {
    const query = { status: req.params.status };
    
    const service = await Service.find(query);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateServiceById = async (req, res) => {
  try {
    const body = req.body;
    const update = { ...body, updated_at: new Date() };

    const service = await Service.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteServiceById = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getServices,
  getServiceByName,
  getServiceById,
  getServicesByStatus,
  updateServiceById,
  deleteServiceById
};
