import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const URL_API = process.env.URL_API;
export const getAll = async (req, res) => {
  try {
    const { data: users } = await axios.get(`${URL_API}users`);
    if (users.length === 0) {
      res.send({
        messenger: "Danh sách user trống",
      });
    }
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const getDetail = async (req, res) => {
  try {
    const { data: user } = await axios.get(`${URL_API}users/${req.params.id}`);
    if (!user) {
      res.send({
        messenger: "Không tìm thấy người dùng nào",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const create = async (req, res) => {
  try {
    const { data: user } = await axios.post(`${URL_API}users`, req.body);
    if (!user) {
      res.send({
        messenger: "Thêm người dùng không thành công",
      });
    }
    return res.json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};

export const remove = async (req, res) => {
  try {
    await axios.delete(`${URL_API}users/${req.params.id}`);
    return res.status(200).json({
      message: "Người dùng đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: user } = await axios.put(
      `${URL_API}users/${req.params.id}`,
      req.body
    );
    if (!user) {
      res.send({
        messenger: "Update người dùng không thành công",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
export const update2 = async (req, res) => {
  try {
    const { data: user } = await axios.patch(
      `${URL_API}users/${req.params.id}`,
      req.body
    );
    if (!user) {
      res.send({
        messenger: "Update người dùng không thành công",
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ messenger: err });
  }
};
