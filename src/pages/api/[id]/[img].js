export default function handler(req, res) {
    let param = req.query
  
    res.status(200).json({ id: `${param.id}`, image: `${param.img}` })
  }
  