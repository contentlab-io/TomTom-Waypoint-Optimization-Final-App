const request = require("request");

exports.findOptimizedRoute = async (req, res) => {
  const { waypoints, options } = req.body;
  request.post(
    {
      url: `${process.env.BASE_URL}routing/waypointoptimization/${process.env.VERSION}?key=${process.env.TOMTOM_API_KEY}`,
      body: JSON.stringify({ waypoints, options }),
      headers: {
        "content-type": "application/json",
      },
    },
    function (err, resp) {
      if (err) {
        res.status(400).json({ message: "There was a problem with this request." })
      } else {
        res.json(JSON.parse(resp.body));
      }
    }
  );
};
