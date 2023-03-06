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
        Greetings!!! ${c.blue.bold("I'm Maurício Taffarel")}!
        
        🧑 I'm a ${c.bgRed.white.bold(
          "passionate"
        )} knowledge seeker living in ${c.bold(
          "Bahia, Brazil"
        )}\n💻 Working for ${link(
          c.hex("#221f52").bold("<db>"),
          "https://db.tec.br/"
        )} as a ${c.bgRed.white.bold(
          "IoT & Fullstack Developer"
        )}.\n🎓 ${c.bold(
          "Electrical engineering"
        )} at ${c.underline.bold.yellow(
          "Federal University of Bahia"
        )}.\n📚 Passionate about learning new ${c.underline.bold.black(
          "languages"
        )}\n🌐 I love being part of development of web technologies.\n📖 I love ${c.underline.bold.green(
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
              `🐱  What am I doing about Open Source? (${c.bold("GitHub")})`
            ),
            value: "https://github.com/taffarel55",
          },
          {
            name: c.yellow(
              `🦊  What am I doing about Open Source? (${c.bold("GitLab")})`
            ),
            value: "https://gitlab.com/taffarel55",
          },
          {
            name: c.white(
              `📝  My personal webpage and blog? (${c.bold("taffarel.tech")})`
            ),
            value: "https://taffarel.tech",
          },
          {
            name: c.cyan(`🐦  What do I think? (${c.bold("Twitter")})`),
            value: "https://twitter.com/taffarel555",
          },
          {
            name: c.blue(
              `📜  Curriculum vitae, the path of my life (${c.bold(
                "LinkedIn"
              )})`
            ),
            value: "https://linkedin.com/in/mauriciotaffarel",
          },
          { name: c.red("👋  Nope. Bye.\n"), value: false },
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
