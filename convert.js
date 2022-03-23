const fs = require('fs');

console.log("dirname : ", __dirname)

// read JSON object from file 

fs.readFile(`${__dirname}/input/input.json`, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object

    const input = JSON.parse(data.toString()); 

    const output = input.map( (item, index) => {
        const lastLoginTime = new Date(item.lastLogin.$date);
        const createDateTime = new Date(item.createDate.$date)

        let loginDate =
        ("0" + lastLoginTime.getDate()).slice(-2) +
        "/" +
        (lastLoginTime.getMonth() + 1) +
        "/" +
        (lastLoginTime.getFullYear() + 543);
      let loginTime =
        ("0" + lastLoginTime.getHours()).slice(-2) +
        ":" +
        ("0" + lastLoginTime.getMinutes()).slice(-2) +
        ":" +
        ("0" + lastLoginTime.getSeconds()).slice(-2);

        let createAtDate =
        ("0" + createDateTime.getDate()).slice(-2) +
        "/" +
        (createDateTime.getMonth() + 1) +
        "/" +
        (createDateTime.getFullYear() + 543);
      let createTime =
        ("0" + createDateTime.getHours()).slice(-2) +
        ":" +
        ("0" + createDateTime.getMinutes()).slice(-2) +
        ":" +
        ("0" + createDateTime.getSeconds()).slice(-2);

        const lastLogin = `${loginDate} ${loginTime}`;
        const createDate = `${createAtDate} ${createTime}`

        console.log("index : "+ index + " lastlogin : "+ lastLogin + " createDate : " + createDate)
        
        item.lastLogin = lastLogin;
        item.createDate = createDate;
        
        return item
})

    console.log("output : ", output)
    const final = JSON.stringify(output)
    const testOutput = output.toString();
    fs.writeFile(`${__dirname}/output/output.json`, final,'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });

    //print JSON object
    
})