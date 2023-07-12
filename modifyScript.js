import fs from "fs";
import cheerio from "cheerio";

// Read the HTML file
const html = fs.readFileSync("./index.html", "utf-8");

// Load HTML into Cheerio
const $ = cheerio.load(html);

// Find all elements with data-cy attribute
$("[dir]").each((index, element) => {
  // Remove data-cy attribute
  $(element).removeAttr("dir");
});

// Save the modified HTML
const modifiedHtml = $.html();
fs.writeFileSync("./dist/index.html", modifiedHtml, "utf-8");
