const express = require("express");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/test", (req, res) => {
  const { arr } = req.body;
  const arrStrings = arr.replace("[", "").replace("]", "").split(",");
  let reg = new RegExp(/[a-z]/);
  let filter = [];
  let characters = "";
  arrStrings.map((value) => {
    if (Number(value)) {
      if (Number(value) % 2 === 0 && Number(value) <= 10)
        [filter.push(Number(value))];
    } else {
      characters += value.match(reg);
    }
  });

  res.status(200).json({
    message: {
      filter: filter,
      characters: characters,
    },
  });
});

app.listen(port, () => {
  console.log("server ok");
});
