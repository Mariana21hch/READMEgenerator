// function to generate markdown for ReadME
function generateMarkdown(data){
  return
#${data.title}
  ${data.description}


  [See deployed version here.]({$dat,url})

  ---

  ## Contents
  
  1. [About](#about)
    1. [User Story](#user%story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
    4. [Build](#build)
  2. [Installation](#installtion)
  3.[License](#license)
  4.[Contibuting](#contribution)
  5.[Test](#test)
  6. [Authors and Acknowlegement](#authors%20and%20acknowlegemnt)

---

## About:

  ${data.about}

---

## User Story:


---

## Acceptance Criteria:


---

## Visuals:

  ![]()

---

## Installation:

  ${data.installation}

    Clone the repo:

      git clone ${data.clone}

---

## License

  License for this project - ${data.license}

## Contributing: 


## Test:

  ${data.test}

---

## Authors and Acknowlegements:

  ${data.author}

---

## Contact Information:

  GitHub Username: ${data.userName}
  Github Email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;
