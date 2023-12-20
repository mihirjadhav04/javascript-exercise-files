const myObject = {
    "js" : "javascript",
    "cpp" : "C++",
}

for (const key in myObject) {
    console.log(key);
    if (Object.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(`KEY VALUE:${element}`);
    }
}



