#!/usr/bin/env node
"use strict";
var c = require("chalk");
var link = require("terminal-link");
var img = require("terminal-image");
var got = require("got");
var ww = require("word-wrap");
var iq = require("inquirer");
var opn = require("open");

const githubID = 18634201;

got(`https://avatars3.githubusercontent.com/u/${githubID}`, {
  responseType: "buffer",
})
  .then(function (image) {
    return img.buffer(image.body, { width: "33%" });
  })
  .then(function (image) {
    console.log(image);
    console.log(
      ww(
        `
        Greetings!!! ${c.blue.bold("I'm Maurรญcio Taffarel")}!
        
        ๐ง I'm a ${c.bgRed.white.bold(
          "passionate"
        )} knowledge seeker living in ${c.bold(
          "Bahia, Brazil"
        )}\n๐ป Working for ${link(
          c.hex("#221f52").bold("<db>"),
          "https://db.tec.br/"
        )} as a ${c.bgRed.white.bold(
          "IoT & Fullstack Developer"
        )}.\n๐ ${c.bold(
          "Electrical engineering"
        )} at ${c.underline.bold.yellow(
          "Federal University of Bahia"
        )}.\n๐ Passionate about learning new ${c.underline.bold.black(
          "languages"
        )}\n๐ I love being part of development of web technologies.\n๐ I love ${c.underline.bold.green(
          "open source development"
        )}. 
        My GitHub profile ${link(
          c.red.bold("github.com/taffarel55"),
          "https://github.com/taffarel55"
        )}.`.trim(),
        { width: 200, trim: true }
      )
    );

    console.log("\n");
    iq.prompt([
      {
        type: "list",
        message: "Do you want to learn more about me?",
        name: "open",
        choices: [
          {
            name: c.magenta(
              `๐ฑ  What am I doing about Open Source? (${c.bold("GitHub")})`
            ),
            value: "https://github.com/taffarel55",
          },
          {
            name: c.yellow(
              `๐ฆ  What am I doing about Open Source? (${c.bold("GitLab")})`
            ),
            value: "https://gitlab.com/taffarel55",
          },
          {
            name: c.white(
              `๐  My personal webpage and blog? (${c.bold("taffarel.tech")})`
            ),
            value: "https://taffarel.tech",
          },
          {
            name: c.cyan(`๐ฆ  What do I think? (${c.bold("Twitter")})`),
            value: "https://twitter.com/taffarel555",
          },
          {
            name: c.blue(
              `๐  Curriculum vitae, the path of my life (${c.bold(
                "LinkedIn"
              )})`
            ),
            value: "https://linkedin.com/in/mauriciotaffarel",
          },
          { name: c.red("๐  Nope. Bye.\n"), value: false },
        ],
      },
    ])
      .then(function (a) {
        opn(a.open);
        process.exit();
      })
      .catch(function () {});
  })
  .catch(function (e) {
    console.log(e);
  });
