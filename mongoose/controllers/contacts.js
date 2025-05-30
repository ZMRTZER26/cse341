const Contact = require('../models/contact');

const getContacts = async (req, resizeBy,) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
    next(err);
  }

};

const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    next(err);
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,            
      runValidators: true  
    });

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(updatedContact);
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact successfully deleted' });
  } catch (err) {
    next(err);
  }
};
