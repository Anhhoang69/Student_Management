import Teacher from "../models/teacher.model.js";

const headers = {
  "PRIVATE-KEY": "14bf1d3f-a86c-4b1b-ad74-9675722ee4f8",
};
export const getAllTeacher = async (req,res) => {
  try {
    const ListTeachers = await Teacher.find({ lop: req.params.lop });

    res.json({ success: true, ListTeachers });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAllTeacher" });
  }
};

export const updateTeacher = async (req, res) => {
  try {
    console.log(req.body);
    const { name, birthday, gender, phone, email, address } = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      { _id: req.params.id },
      { name, birthday, gender, phone, email, address }
    );
    if (updatedTeacher) {
      res.json({ message: "Update successfully" });
    } else {
      res.json({ message: "Update fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ updateTeacher" });
  }
};

export const createTeacher = async (req, res) => {
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

    const isExist = await Teacher.findOne({ ID });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, message: "Teacher already exist!" });
    }

    const newTeacher = new Teacher({
      ID,
      name,
      birthday,
      gender,
      phone,
      email,
      address,
      lop,
    });
    await newTeacher.save();
    console.log("Create successfully");
  } catch (error) {
    res.status(500).json({ message: "Server error ~ createTeacher" });
  }
};

export const deleteTeacher = async (req, res) => {
  // const userID = req.params.id;
  try {
    const deletedTeacher = await Teacher.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedTeacher) {
      res.json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteTeacher" });
  }
};


export const getTeacherDetail = async (req, res) => {
  try {
    const TeacherDetail = await Teacher.find({ _id: req.params.id });
    res.json({ TeacherDetail });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getTeacherDetail" });
  }
};
