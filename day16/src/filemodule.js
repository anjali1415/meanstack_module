const fs = require("fs"); // internal module
let readDemo = () => {
    const filepath = "C:/Users/Dell/Desktop/demo.txt";
    fs.readFile(filepath, { encoding: "utf-8" }, (error, data) => {
        console.log(data);
    }
    )
};

readDemo();