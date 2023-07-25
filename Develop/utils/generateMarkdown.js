// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  }
  if (license === "APACHE2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "MIT") { 
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "MPL2.0") {
    return "[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else if (license === "Boost1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  }
  if (license === "APACHE2.0") {
    return "[APACHE2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[License: MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "MLP2.0") {
    return "[License: MLP2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Boost1.0") {
    return "[License: Boost1.0](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return
  }
  return 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
## Installation
${data.installtion}
## Useage
${data.useage}
## License
${renderLicenseLink(data.license)}
## Contributing
${data.contributing}
## Test
${data.test}
## Questions
${data.email}
[GitHub](https://github.com/${data.github})
`;
};

module.exports = generateMarkdown;
