function generateMarkdown(data) {
    return `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    * Installation
    * Usage
    * Contribution
    * Tests
    * Questions
    * License

    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    * Checkout my GitHub profile: https://github.com/${data.github} 
    
    * Any additional questions or feed back, feel free to send an email to ${data.email}. 
    ## License
    Copyright (c) ${data.github}  https://github.com/${data.github}. All rights reserved.
    
    Licensed under the ${data.license} license.
    
  `;
  }
  
  module.exports = generateMarkdown;