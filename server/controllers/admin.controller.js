import Admin from "../models/admin.model.js";

const headers = {
  "PRIVATE-KEY": "14bf1d3f-a86c-4b1b-ad74-9675722ee4f8",
};
export const getAllAdmin = async (req,res) => {
  try {
    const ListAdmins = await Admin.find();

    res.json({ success: true, ListAdmins });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAllAdmin" });
  }
};


export const createAdmin = async (req, res) => {
  try {
    const {
      ID,
      name,
      birthday,
      gender,
      phone,
      email,
      address,
      lop,
    } = req.body;

    const isExist = await Admin.findOne({ ID });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, message: "Admin already exist!" });
    }

    const newAdmin = new Admin({
      ID,
      name,
      birthday,
      gender,
      phone,
      email,
      address,
      lop,
    });
    await newAdmin.save();
    console.log("Create successfully");
  } catch (error) {
    res.status(500).json({ message: "Server error ~ createAdmin" });
  }
};
export const updateAdmin = async (req, res) => {
    try {
      console.log(req.body);
      const { name, birthday, gender, phone, email, address } = req.body;
      const updatedAdmin = await Admin.findByIdAndUpdate(
        { _id: req.params.id },
        { name, birthday, gender, phone, email, address }
      );
      if (updatedAdmin) {
        res.json({ message: "Update successfully" });
      } else {
        res.json({ message: "Update fail" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error ~ updateAdmin" });
    }
  };
export const deleteAdmin = async (req, res) => {
  // const userID = req.params.id;
  try {
    const deletedAdmin = await Admin.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedAdmin) {
      res.json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteAdmin" });
  }
};


export const getAdminDetail = async (req, res) => {
  try {
    const AdminDetail = await Admin.find({ _id: req.params.id });
    res.json({ AdminDetail });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAdminDetail" });
  }
};
