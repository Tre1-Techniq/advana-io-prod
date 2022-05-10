exports.homeKpi = (req, res) => {
  let message = req.query.message || "HOME KPI DATA";
  res.status(200).send(message);
};
