

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache'){
    licenseLink = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'Boost'){
    licenseLink = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
   else if (license == 'BSD3'){
    licenseLink = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
   else if (license == 'Eclipse'){
    licenseLink = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
   else if (license == 'IPL'){
    licenseLink = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
   else if (license == 'MPL'){
    licenseLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
   else if (license == 'Perl'){
    licenseLink = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }
   else if (license == 'GPLv3'){
    licenseLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
   else if (license == 'ISC'){
    licenseLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
   else if (license == 'MIT'){
    licenseLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
   else if (license == 'Unlicense'){
    licenseLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
   else if (license == 'WTFPL'){
    licenseLink = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.openSource === true && data.contribution === true) {
  return `# ${data.title}\n## Description\n${data.descript}\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n## Installation Instructions\n ${data.install}\n ## Usage\n${data.usage}\n## License\n This project is licensed under the ${data.license} license\n## Contributing\nPlease view my contribution guidelines at my [contribution file](${data.contribFile})\n## Tests\n${data.testInfo}\n## Questions\nPlease feel free to contact me with any questions at my email: ${data.email}. You can find access to this repo or any of my other projects at my [Github](${data.gitURL}) `
}
  else if (data.contribution === false && data.openSource === true) {
    renderLicenseLink(data.license);
    console.log(licenseLink);
  return `# ${data.title} ${licenseLink}\n## Description\n${data.descript}\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n## Installation Instructions\n ${data.install}\n ## Usage\n${data.usage}\n## License\n This project is licensed under the ${data.license} license\n## Contributing\n${data.contribGuide}\n## Tests\n${data.testInfo}\n## Questions\nPlease feel free to contact me with any questions at my email: ${data.email}. You can find access to this repo or any of my other projects at my [Github](${data.gitURL}) `
}

;
}

module.exports = generateMarkdown;
