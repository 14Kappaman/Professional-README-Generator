const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")

async function CreateReadMe(){
    let readmedata = {
        
    }
    readmedata.title = await getUserInput("enter the title:")
    readmedata.description = await getUserInput("enter description:")
    readmedata.installation = await getUserInput("how does the user install this:")
    readmedata.usage = await getUserInput("what is this project used for:")
    readmedata.license = await getUserchoice(
        "choice a license",
        [ 
            "GNU GPLv3", 
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "none"


        ]
    )
    readmedata.contribute = await getUserInput("how can people contribute to the project:")
    //test
    //question

    readmedata.test = await getUserInput("Enter instructions for testing this application")
    readmedata.username = await getUserInput("Enter github username")
    readmedata.email = await getUserInput("Enter email for questions")



    var content = `# ${readmedata.title} 

## Description

${readmedata.description} 

## Table of Contents

- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage-information)
- [License](#license-information)
- [Contribution](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)


## Installation Instructions

${readmedata.installation}

## Usage Information

${readmedata.usage} 

## License Information

${readmedata.license}

## Contribution Guidelines

${readmedata.contribute}

## Test Instructions

${readmedata.test}

## Questions 

Please contact the email below with questions

github username: ${readmedata.username}

email: ${readmedata.email}` 




    console.log(content)

    fs.writeFileSync(path.join(__dirname,"readme_out.md"),content)
} CreateReadMe()

async function getUserInput(message){

    return (await inquirer.prompt({
        type: "input", 
        name: "response",
        message: message,
        
            })).response;


} 
async function getUserchoice(message,choices){

    return (await inquirer.prompt({
        type: "list",
        name: "response",
        message: message,
        choices: choices

            })).response;


}