

const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs);

let readDemo = async () => {
    console.log("Hello Async Awai");

    const filePath1 = "C:/Users/Dell/Desktop/demo.txt";
    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log(data1);

    const filePath2 = "C:/Users/Dell/Desktop/demo2.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log(data2);

    // const filePath3 = "/Users/research/Desktop/temp-2.txt";
    // const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    // console.log(data3);
};

readDemo();