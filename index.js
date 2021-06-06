const app = require("./server/server");
const PORT = 3000;

app.get("/read_me", (req, res) => {
  res.sendFile(__dirname + "/readme.md");
});
app.listen(PORT, () => console.log("Started App on port:", PORT));
