function ramsAsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("hi there")
        }, 3000)
    })
    return p;
}

async function main() {
    let value = await ramsAsyncFunction();
    console.log("hi there1");
    console.log(value);
}

main();
console.log("after main");