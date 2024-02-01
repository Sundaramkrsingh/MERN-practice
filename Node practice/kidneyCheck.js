const express = require("express");
const app = express();
const port = 3000;

var users = [
    {
        name: "Sundaram",
        age: 20,
        kidneys: {first: true, second: false},
    }, 
];

app.use(express.json());

app.get("/get", (req, res) => {
    const name = req.query.name;
    
    const user = users.find(item => item.name === name);

    if (!user) 
    {
        res.status(404).send("User not found");
        return;
    }

    const kidney1 = user.kidneys.first;
    const kidney2 = user.kidneys.second;

    res.status(200).send("Right kidney = " + kidney1 + " Left kidney " + kidney2);
});

app.post("/post", (req, res) => {
    const {name, age, k1, k2} = req.body;

    users.push({
        name: name,
        age: age,
        kidneys: {first: k1, second: k2},
    });

    console.log("Updated users array:", users); 

    res.status(200).json({
        msg: "Done!"
    })
});

app.put("/put", (req, res) => {
    const {oldName, name} = req.body;

    const user = users.find(item => item.name === oldName);

    user.name = name;

    console.log(users);

    res.status(200);
    res.send("Your new name is updated");
});

app.delete("/delete", (req, res) => {
    const {name} = req.query;
    const userIndex = users.findIndex(item => item.name === name);

    if (userIndex !== -1) {
        users.splice(userIndex, 1); // Remove the user from the array
        res.status(200).send("Your entry has been removed");
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});