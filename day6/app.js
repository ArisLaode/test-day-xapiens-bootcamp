#!/usr/bin/env node

const { program } = require("@caporal/core");
const os = require("os");
const axios = require("axios");
const cheerio = require("cheerio");

const palindrome = (words) => {
  words = words
    .split(" ")
    .join("")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .toLowerCase();
  const ori = JSON.stringify(words.split(""));
  const rev = JSON.stringify(words.split("").reverse());
  return ori === rev ? true : false;
};

async function scrapeKompas() {
  const html = await axios.get("https://indeks.kompas.com/headline");
  const $ = await cheerio.load(html.data);
  let data = [];

  $(".article__link").each((i, elem) => {
    data.push({
      title: $(elem).text(),
      link: $(elem).attr("href"),
    });
  });

  console.log(data);
}

program
  .version("1.0.0")
  //task 1
  .command("lowercase", "huruf kecil semua")
  .argument("<text>", "lower-case")
  .action(({ logger, args }) => {
    console.log(` output lowercase : ${args.text.toLowerCase()}`);
  })

  .command("uppercase", "huruf besar semua")
  .argument("<text>", "upper-case")
  .action(({ logger, args }) => {
    console.log(`output uppercase : ${args.text.toUpperCase()}`);
  })

  .command("capitalize", "huruf besarnya hanya didepan")
  .argument("<text>", "capitalize")
  .action(({ logger, args }) => {
    console.log(
      ` output capitalize : ${args.text
        .toLowerCase()
        .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())}`
    );
  })

  //task 2
  .command("add", "Menambahkan semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    console.log(`output add : ${args.num.reduce((a, b) => a + b)}`);
  })

  .command("subtract", "Mengurangi semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    console.log(`output subtract : ${args.num.reduce((a, b) => a - b)}`);
  })

  .command("multiply", "Mengalikan semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    console.log(`output multiply : ${args.num.reduce((a, b) => a * b)}`);
  })
  .command("divide", "Membagi semua angka")
  .argument("[num...]", "number")
  .action(({ logger, args }) => {
    console.log(`output divide : ${args.num.reduce((a, b) => a / b)}`);
  })

  //task 3
  .command(
    "palindrome",
    "Palindrome itu kalau kata/kalimat dibalik dibaca tetep sama"
  )
  .argument("<text>", "String")
  .action(({ logger, args }) => {
    console.log(
      `output: "${args.text}" \n Is palindrome? ${
        palindrome(args.text) ? "Yes" : "No"
      }`
    );
  })

  // task 4
  .command("obfuscate")
  .argument("<text>")
  .action(({ logger, args }) => {
    logger.info(
      args.text
        .split("")
        .map((char) => `&#${char.charCodeAt(0)};`)
        .join("")
    );
  })
  .command("deobfuscate")
  .argument("<text>")
  .action(({ logger, args }) => {
    logger.info(
      args.text
        .replace(/&#/g, "")
        .split(";")
        .map((unicode) => String.fromCharCode(unicode))
        .join("")
    );
  })

  // task 5
  .command("random")
  .option("--panjang <number>", "", {
    default: 32,
    validator: program.NUMBER,
  })
  .option("--letters <boolean>", "", {
    default: true,
  })
  .option("--numbers <boolean>", "", {
    default: true,
  })
  .option("--uppercase <boolean>", "", {
    default: false,
  })
  .option("--lowercase <boolean>", "", {
    default: false,
  })
  .action(({ logger, options }) => {
    let char = "abcdefghijklmnopqestuvwxyz1234567890";
    if (!options.letters) char = char.replace(/[A-Za-z]/g, "");
    if (!options.numbers) char = char.replace(/[0-9]/g, "");
    char = char.split("");
    let output = "";

    while (output.length < options.panjang) {
      let sizeRandom = options.uppercase
        ? "toUpperCase"
        : options.lowercase
        ? "toLowerCase"
        : Math.floor(Math.random() * 2) === 1
        ? "toUpperCase"
        : "toLowerCase";
      output += char[Math.floor(Math.random() * char.length)][sizeRandom]();
    }
    console.log(output);
  })

  //task 6
  .command("ip")
  .action(() => {
    var networkInterfaces = os.networkInterfaces();
    let addrShort = {};
    Object.keys(networkInterfaces).forEach((device) => {
      addrShort[device] = [];
      networkInterfaces[device].forEach((addr) => {
        if (addr.internal) addrShort[device].push(addr.address);
        else delete addrShort[device];
      });
    });
    console.log(addrShort);
  })

  //task 7
  .command("ip-external")
  .action(() => {
    var networkInterfaces = os.networkInterfaces();
    let addrShort = {};
    Object.keys(networkInterfaces).forEach((device) => {
      addrShort[device] = [];
      networkInterfaces[device].forEach((addr) => {
        if (!addr.internal) addrShort[device].push(addr.address);
        else delete addrShort[device];
      });
    });
    console.log(addrShort);
  })

  //task 8
  .command("headline")
  .action(() => {
    scrapeKompas();
  });

program.run();
