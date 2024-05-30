//Change the serverBaseUrl to the URL of your server
const serverBaseUrl = "http://localhost:3000";

const calenderImg =
  "https://img.icons8.com/?size=100&id=5eGrkjD0mALU&format=png&color=000000";
const calenderIm =
  "data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogICAgPHBhdGggZD0iTSAxNSA0IEMgMTMuMzUgNCAxMiA1LjM1IDEyIDcgTCAxMiAxMCBMIDcgMTAgQyA1LjMgMTAgNCAxMS4zODk3NjYgNCAxMy4wMDk3NjYgTCA0IDU0Ljk2MDkzOCBDIDQgNTYuNTgwOTM3IDUuMyA1Ny45NzA3MDMgNyA1Ny45NzA3MDMgTCA1NSA1Ny45NzA3MDMgQyA1Ni43IDU3Ljk3MDcwMyA1OCA1Ni41ODA5MzggNTggNTQuOTYwOTM4IEwgNTggMTMuMDA5NzY2IEMgNTggMTEuMzg5NzY2IDU2LjcgMTAgNTUgMTAgTCA1MCAxMCBMIDUwIDcgQyA1MCA1LjM1IDQ4LjY1IDQgNDcgNCBDIDQ1LjM1IDQgNDQgNS4zNSA0NCA3IEwgNDQgMTAgTCAzNCAxMCBMIDM0IDcgQyAzNCA1LjM1IDMyLjY1IDQgMzEgNCBDIDI5LjM1IDQgMjggNS4zNSAyOCA3IEwgMjggMTAgTCAxOCAxMCBMIDE4IDcgQyAxOCA1LjM1IDE2LjY1IDQgMTUgNCB6IE0gMTUgNiBDIDE1LjU1IDYgMTYgNi40NSAxNiA3IEwgMTYgMTAgTCAxNiAxMS45NzA3MDMgTCAxNiAxNSBDIDE2IDE1LjU1IDE1LjU1IDE2IDE1IDE2IEMgMTQuNDUgMTYgMTQgMTUuNTUgMTQgMTUgTCAxNCAxMS45NzA3MDMgTCAxNCAxMCBMIDE0IDcgQyAxNCA2LjQ1IDE0LjQ1IDYgMTUgNiB6IE0gMzEgNiBDIDMxLjU1IDYgMzIgNi40NSAzMiA3IEwgMzIgMTAgTCAzMiAxMS45NzA3MDMgTCAzMiAxNSBDIDMyIDE1LjU1IDMxLjU1IDE2IDMxIDE2IEMgMzAuNDUgMTYgMzAgMTUuNTUgMzAgMTUgTCAzMCAxMS45NzA3MDMgTCAzMCAxMCBMIDMwIDcgQyAzMCA2LjQ1IDMwLjQ1IDYgMzEgNiB6IE0gNDcgNiBDIDQ3LjU1IDYgNDggNi40NSA0OCA3IEwgNDggMTAgTCA0OCAxMS45NzA3MDMgTCA0OCAxNSBDIDQ4IDE1LjU1IDQ3LjU1IDE2IDQ3IDE2IEMgNDYuNDUgMTYgNDYgMTUuNTUgNDYgMTUgTCA0NiAxMS45NzA3MDMgTCA0NiAxMCBMIDQ2IDcgQyA0NiA2LjQ1IDQ2LjQ1IDYgNDcgNiB6IE0gNyAxMS45NzA3MDMgTCAxMiAxMS45NzA3MDMgTCAxMiAxNSBDIDEyIDE2LjY1IDEzLjM1IDE4IDE1IDE4IEMgMTYuNjUgMTggMTggMTYuNjUgMTggMTUgTCAxOCAxMS45NzA3MDMgTCAyOCAxMS45NzA3MDMgTCAyOCAxNSBDIDI4IDE2LjY1IDI5LjM1IDE4IDMxIDE4IEMgMzIuNjUgMTggMzQgMTYuNjUgMzQgMTUgTCAzNCAxMS45NzA3MDMgTCA0NCAxMS45NzA3MDMgTCA0NCAxNSBDIDQ0IDE2LjY1IDQ1LjM1IDE4IDQ3IDE4IEMgNDguNjUgMTggNTAgMTYuNjUgNTAgMTUgTCA1MCAxMS45NzA3MDMgTCA1NSAxMS45NzA3MDMgQyA1NS42IDExLjk3MDcwMyA1NiAxMi40Mjk3NjYgNTYgMTMuMDA5NzY2IEwgNTYgMjAgQyA1NS40IDIwIDU1IDIwLjQ0NyA1NSAyMSBMIDU1IDIzIEMgNTUgMjMuNTUzIDU1LjQgMjQgNTYgMjQgTCA1NiA1NC45NjA5MzggQyA1NiA1NS41NDA5MzcgNTUuNiA1NiA1NSA1NiBMIDcgNTYgQyA2LjQgNTYgNiA1NS41NDA5MzcgNiA1NC45NjA5MzggTCA2IDI0IEMgNi42IDI0IDcgMjMuNTUzIDcgMjMgTCA3IDIxIEMgNyAyMC40NDcgNi42IDIwIDYgMjAgTCA2IDEzLjAwOTc2NiBDIDYgMTIuNDI5NzY2IDYuNCAxMS45NzA3MDMgNyAxMS45NzA3MDMgeiBNIDExIDIwIEMgMTAuNCAyMCAxMCAyMC40NDcgMTAgMjEgTCAxMCAyMyBDIDEwIDIzLjU1MiAxMC40IDI0IDExIDI0IEMgMTEuNiAyNCAxMiAyMy41NTMgMTIgMjMgTCAxMiAyMSBDIDEyIDIwLjQ0NyAxMS42IDIwIDExIDIwIHogTSAxNiAyMCBDIDE1LjQgMjAgMTUgMjAuNDQ3IDE1IDIxIEwgMTUgMjMgQyAxNSAyMy41NTIgMTUuNCAyNCAxNiAyNCBDIDE2LjYgMjQgMTcgMjMuNTUzIDE3IDIzIEwgMTcgMjEgQyAxNyAyMC40NDcgMTYuNiAyMCAxNiAyMCB6IE0gMjEgMjAgQyAyMC40IDIwIDIwIDIwLjQ0NyAyMCAyMSBMIDIwIDIzIEMgMjAgMjMuNTUyIDIwLjQgMjQgMjEgMjQgQyAyMS42IDI0IDIyIDIzLjU1MyAyMiAyMyBMIDIyIDIxIEMgMjIgMjAuNDQ3IDIxLjYgMjAgMjEgMjAgeiBNIDI2IDIwIEMgMjUuNCAyMCAyNSAyMC40NDcgMjUgMjEgTCAyNSAyMyBDIDI1IDIzLjU1MiAyNS40IDI0IDI2IDI0IEMgMjYuNiAyNCAyNyAyMy41NTMgMjcgMjMgTCAyNyAyMSBDIDI3IDIwLjQ0NyAyNi42IDIwIDI2IDIwIHogTSAzMSAyMCBDIDMwLjQgMjAgMzAgMjAuNDQ3IDMwIDIxIEwgMzAgMjMgQyAzMCAyMy41NTIgMzAuNCAyNCAzMSAyNCBDIDMxLjYgMjQgMzIgMjMuNTUzIDMyIDIzIEwgMzIgMjEgQyAzMiAyMC40NDcgMzEuNiAyMCAzMSAyMCB6IE0gMzYgMjAgQyAzNS40IDIwIDM1IDIwLjQ0NyAzNSAyMSBMIDM1IDIzIEMgMzUgMjMuNTUyIDM1LjQgMjQgMzYgMjQgQyAzNi42IDI0IDM3IDIzLjU1MyAzNyAyMyBMIDM3IDIxIEMgMzcgMjAuNDQ3IDM2LjYgMjAgMzYgMjAgeiBNIDQxIDIwIEMgNDAuNCAyMCA0MCAyMC40NDcgNDAgMjEgTCA0MCAyMyBDIDQwIDIzLjU1MiA0MC40IDI0IDQxIDI0IEMgNDEuNiAyNCA0MiAyMy41NTMgNDIgMjMgTCA0MiAyMSBDIDQyIDIwLjQ0NyA0MS42IDIwIDQxIDIwIHogTSA0NiAyMCBDIDQ1LjQgMjAgNDUgMjAuNDQ3IDQ1IDIxIEwgNDUgMjMgQyA0NSAyMy41NTIgNDUuNCAyNCA0NiAyNCBDIDQ2LjYgMjQgNDcgMjMuNTUzIDQ3IDIzIEwgNDcgMjEgQyA0NyAyMC40NDcgNDYuNiAyMCA0NiAyMCB6IE0gNTEgMjAgQyA1MC40IDIwIDUwIDIwLjQ0NyA1MCAyMSBMIDUwIDIzIEMgNTAgMjMuNTUyIDUwLjQgMjQgNTEgMjQgQyA1MS42IDI0IDUyIDIzLjU1MyA1MiAyMyBMIDUyIDIxIEMgNTIgMjAuNDQ3IDUxLjYgMjAgNTEgMjAgeiBNIDMxIDI3LjAxNzU3OCBDIDMwLjcxNTI1IDI3LjAxNzU3OCAzMC40MzAyMzQgMjcuMTI4MTA5IDMwLjI0MDIzNCAyNy4zNDk2MDkgTCAyNC4yNDAyMzQgMzQuMzQ5NjA5IEMgMjMuOTg2MjM0IDM0LjY0NTYwOSAyMy45Mjg3OTcgMzUuMDYyOTY5IDI0LjA5MTc5NyAzNS40MTc5NjkgQyAyNC4yNTQ3OTcgMzUuNzcxOTY5IDI0LjYwOSAzNiAyNSAzNiBMIDM3IDM2IEMgMzcuMzkxIDM2IDM3Ljc0NDIwMyAzNS43NzE5NjkgMzcuOTA4MjAzIDM1LjQxNzk2OSBDIDM4LjA3MTIwMyAzNS4wNjI5NjkgMzguMDEyNzY2IDM0LjY0NjYwOSAzNy43NTk3NjYgMzQuMzQ5NjA5IEwgMzEuNzU5NzY2IDI3LjM0OTYwOSBDIDMxLjU2OTc2NiAyNy4xMjgxMDkgMzEuMjg0NzUgMjcuMDE3NTc4IDMxIDI3LjAxNzU3OCB6IE0gMzEgMjkuNTM3MTA5IEwgMzQuODI2MTcyIDM0IEwgMjcuMTc1NzgxIDM0IEwgMzEgMjkuNTM3MTA5IHogTSAyNSAzOCBDIDI0LjYwOSAzOCAyNC4yNTU3OTcgMzguMjI4MDMxIDI0LjA5MTc5NyAzOC41ODIwMzEgQyAyMy45Mjg3OTcgMzguOTM3MDMxIDIzLjk4NzIzNCAzOS4zNTMzOTEgMjQuMjQwMjM0IDM5LjY1MDM5MSBMIDMwLjI0MDIzNCA0Ni42NTAzOTEgQyAzMC40MzAyMzQgNDYuODcyMzkxIDMwLjcwOCA0NyAzMSA0NyBDIDMxLjI5MiA0NyAzMS41Njk3NjYgNDYuODcyMzkxIDMxLjc1OTc2NiA0Ni42NTAzOTEgTCAzNy43NTk3NjYgMzkuNjUwMzkxIEMgMzguMDEzNzY2IDM5LjM1NDM5MSAzOC4wNzEyMDMgMzguOTM3MDMxIDM3LjkwODIwMyAzOC41ODIwMzEgQyAzNy43NDUyMDMgMzguMjI4MDMxIDM3LjM5MSAzOCAzNyAzOCBMIDI1IDM4IHogTSAyNy4xNzM4MjggNDAgTCAzNC44MjYxNzIgNDAgTCAzMSA0NC40NjI4OTEgTCAyNy4xNzM4MjggNDAgeiBNIDkgNTAgQyA4LjQ0OCA1MCA4IDUwLjQ0OCA4IDUxIEMgOCA1MS41NTIgOC40NDggNTIgOSA1MiBMIDUzIDUyIEMgNTMuNTUyIDUyIDU0IDUxLjU1MiA1NCA1MSBDIDU0IDUwLjQ0OCA1My41NTIgNTAgNTMgNTAgTCA5IDUwIHoiLz4KPC9zdmc+Cg==";

const certificateImg =
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2bzWoUQRDHfxtQ46pv4CER9AHEjyfYnPy4RdFdb+Zq1hhCDoE5hVzFg6whYIz6Aj5C1HjWiAcNiuhZIQETIaw01ISyd2dmZ/arpzN/KDbTU13T9Z+u6uqZCbTiBHAduA/MeSJ14BpQJgYlYBb4DTQ9lV/AjPj6H0aAlw4McFDywiZh1lL4AjSAJU+kIT5pH02IH8S8nvbLwDH8g/FpxQqHMpIcwsbPnjofwvi2pfy9YhofqIbH+I+GHQaBajB/+44Wf4OCAIoZ0CxCgCIHNIskSLEKBPiP1MvgOdkrzOVMZmXsXROw5cDuLauYDVBBQLcz4Cyw4MCWNq0syNi7JsA3FARQzACKEKDIARRJ0NVKsCaP6Z1ZBbaGUMHVDjsB1T4SULOvEzhWCVb7HAIjco2D6/hSCY4CE8CU5JIpOTbtsQhyTsA4sArsRITTjpw3et4RUAf2OswrRm/aJwIetXHyvXqp25BjW8f0yz0Bdcup18CFCN2LwBtLfzrPBIxb0/4ZcCShjzm/pvrs6pwQDKgSTKrw9PLU8gWHwqp155OcD3EU2FB9jR0GXQjFVXhVpXc7QscsadtKL2raR+GS6mvsjA6agGqXBExYCS8LNpWNyiArwaQKrySO34oJgSk1VpPls+CJsnG3EwJcwrwa62JGG4vKxnzeCOjFDFjO8wyoqLF+yGjjY9oc4BLsVcAUOWlwOcsq4Bp0HfA2ZR3wLksd4BrGpZILx7wmzsXBnH+etRJ0EdNWfbEhRU7UtNd33sg9rRDkkICo3eCmZPkl+dUJL3I3ONODpWWYM0GHQ5zs2nc+xFXrfXrePpU1sfw05onQtpwfizJQlg+Hww4rOSQBWdIqUtzMyW+lk2eCdhg0ZQPUGMJnLZ1smWtdvjxpa6Mk/0TQdEDitsx3OtQji42SfD2tw2EYErdl7sWKlWijLImxPoTPWpK2zAMhwGUUBJB898Zk2zx22GZAWdr+yPm/wEPgVAobziNq8CZnfYtIqj8l85d8JOA8sN7G6R9t2tZF3xsCvgL7lpPfgUm525NyrM/vSz8vCGgq2ZN4P2npH7fygi0BHhDwCjiT0O+0vELLPQE31eA/hQ81U6Ai/UIbN/o0zr7CDNq8POn0WaAN08+8gDFk8g8gvCUW8XswFAAAAABJRU5ErkJggg==";

const whiteBoardImg =
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFh0lEQVR4nO2ba4hVVRTHfzPpmKVBZmHSu4iMjOj9IMjAHo5F9IYeVBZFkX0YKhqhIsgGv9RQQS97fKoR/eKYUV8MDU2sSStnQsvAsIJqmtSsMccbC/4HFnvOuffcO3PvPefO/GHDnrXXPvus/z177bXX3gPZwWnAE0AbcDxjDHOBf4CCym7gYsYIJgI/yvDlwIeqfws0MwZwnwzeKoNbHCF3kAFMABYBfUB/Fcqg+/TDMlilMc2WdtlWEs8WecG8l6fTEPCTlK8BjmyQMk827UxDQMRWoyGVXS1Oca+Wpw3AI/LeDU3ATOBzKQ0B21SGJOsBZpBPnCMbfk9SmARslNL7QWRm9S617auSly5WLE6IsLqC9n73I76SRMCDzvimmHaTLauT5/7KvcfmCtqj8gZwaBIB68XScUkKwAnAQU2FWnpwHx02V9Ceyvn1a76XwnY5xzwhFQF7UxLwPbCHBiRgo6ZAsW3piZoCtiw2HAELpdRVxAkul47FBA1HwCTnQZfJ4flfPjK+R7p5QurIdqaWlII+9e0qB53xx5I/lBXat+gTX+86Wv1hteURZe9tJrjQ0cr9wI3AeTndD6QiYCJwJ/CJwt2kaMryeGuABcBUGoSAK4HvnKIth73ACuBNlRWSDQW7RYutp5FjAtqAA1Lo0+du4WMSzNiH3MbJym/6IuKWz0wTsND94s+kzZc5XKCgKBpgJTCdnBBwEfCfjL9rBA9vUpb3Dw2yS1Mq0wQ0uaBnySgNYiH0WvdFvQbMzsiqMYyAuRL8XGx/LMwHnlRpLaF7iKbS/oQV5IAOP26lzgS8LsFzTnamSoi/3AMGnPxsxQVxOEXJh94EMiyyvIU6ErBVgsuczIz7M6azpZM7VOYF+mZIJ3BYyhdp0eGEjb2FOhIwIMG0EYSL/hfdpmmVBlNdbrFWGGZbQaV5FAjY4urmBB8AZgGHJ3wBi6T7JRkggFEgwIx63H1VaYqtEtfRIAREmALcq1zCDwqTQ8P/VeDkfUnDEJBljBPA+BfA+BSgyj5gdXBGlyVZTaZAIeUz6yEbpjPo1nCU5h5TBGySoF3rdxSdGTFpsT8gcXNwSpsl2TAC5idEaHZAGuIjzakQ/cF+ojnmjl9WZLFfd6vyenu0R4+7QOSnRngatFPyrF9xjdL7vxRTmiUl2797THcEhLm+PskH6nBjpJwSZbFfLEbA+VIy3+BxkiPg5KAt8iNZL5bQeRWYXIyAK6RsBx4es92DrO7xqeTXV3Dj4wy3WbrBjRHV/5bOaN8uSUTkFLsD+aXu5S4J2lZJbn3LxdsujR46qW7VTadmuN1dkPK42r3cVUFbdGvM+paDczUvbck9PYaAU7VtNp0LqREW6AXeCuQ3u5e7KWhbKrn1TQtLx69TvxeKLFMd+ntDrU6bHtOALwXye9zLWd2jU3LrmxZ3q8+vwBFFCJiiA5aC+lQd7Rrs+UD+qHs5q3ssltyiyLTJ0CSj1imfGEfWrlqcQi92oXEcMVaeCtqi8Nn6pkGHu2zRVOZ0sb5VRacGssPSOGLiDI2mjfUthUodW5zDrAqWyhg75PR42RFg9TjHaX1LoTvByZbzbtGSWRV0aZDbAvm7joB3EpbOD0o8OzqH3F3hBatjXMr9WqqEVRogPPyMrsYVdEPEo1XyMBsTIjqGs4sYlaJNz7BNW1WwRgNYSOzxsSPA6nHhs4XExbBWzmwkx+TW97MUY1WMTTLGNkUe4VW58HZI3AYql+iVMbYt9vjaEfBNwhbatsW5R4+MmeNkk5UsKTgn5pMicyS3vrnHEmfMWfK870n2hU5yox3a0dLpGeUrNnXFUcCOmGTCPl2iuDzh8uQO9W0IzNBab/9VZTdFLBHqnaI5PUuQWpvdC7SvIZf/QfY/x2eKZSYO54YAAAAASUVORK5CYII=";

async function fetchData() {
  try {
    //As of now we are fetching data from json file, but in future we can fetch data from API of the Success Factor.
    const response = await fetch("./model/data2.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

//GENERATE LEFT HEADERS
async function generateSections() {
  try {
    const data = await fetchData();

    const leftContainer = document.querySelector(".left-div");

    var htmlHeading = "";
    data.headers.forEach((header, hindex) => {
      //CREATE HEADERS-FP+DF(PART 1)
      var imgSrc = "";
      if (hindex === 0) {
        console.log("inside calender");
        imgSrc = calenderImg;
      } else if (hindex === 1) {
        console.log("inside certificate");
        imgSrc = certificateImg;
      } else if (hindex === 2) {
        imgSrc = whiteBoardImg;
      } else if (hindex === 3) {
        imgSrc = certificateImg;
      }
      htmlHeading = `<div class="first-part index-${hindex}" >
      <div dir="rtl" lang="ar" style="margin-top: 24px" class="heading">
        <span> ${header.headerTitle}</span>
      </div>
      <div style="margin-top: 24px" class="circle">
        <img
        class="imgStyle"
          src="${imgSrc}"
          style="position: absolute; z-index: 2; right: 6px; top: 7px"
        />
      </div>
      </div>
      <div class="sub-detail-${hindex}" >
      </div>`;

      leftContainer.innerHTML += htmlHeading;
      const subDetailMain = document.querySelector(`.sub-detail-${hindex}`);

      // CREATE DF-NO(PART 2)
      var htmlSubHeading = "";
      header.fulldetails.forEach((detail, subindex) => {
        htmlSubHeading += `
        <div dir="rtl" class="details">
           <span class="yr">${detail.year}</span>
          
           <span class="detail-name">${detail.details.detailTitle}</span>
           
           <text class="detail-description">${detail.details.detailDiscription}</text>
          </div>`;
      });

      subDetailMain.innerHTML = htmlSubHeading;
    });
  } catch (error) {
    console.error("Error generating sections:", error);
  }
}

function removeStyleFromHtml(htmlContent) {
  // Convert HTML string to DOM object
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Remove the class from the body element within the parsed document
  const container = doc.querySelector(".container");
  container.classList.remove("displayNone");
  const body = doc.querySelector("body");
  body.classList.remove("body-style");

  const spinner = doc.querySelector(".spinnerFullpage");
  //Remove the spinner if it exists
  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  }

  // Return modified HTML content
  return doc.documentElement.outerHTML;
}

async function convertToPdf() {
  try {
    console.log("inside converter");
    // Get the HTML content of the entire page
    let htmlContent = document.documentElement.outerHTML;

    // Remove the button from the HTML content
    htmlContent = removeStyleFromHtml(htmlContent);

    // Options for html2pdf
    const options = {
      margin: 0.1,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        logging: true, // Enable logging for debugging
        useCORS: true, // Enable cross-origin resource sharing
      },
      jsPDF: {
        unit: "in",
        format: [12, 14.7], // Custom size: 12 inches width, 14.7 inches height
        orientation: "portrait",
      },
    };
    console.log("after options");

    console.log("Image URLs:", options.html2canvas.images);

    // Convert HTML to PDF and create a Blob
    const blob = await html2pdf().from(htmlContent).set(options).output("blob");

    // Optional: Trigger a download (adapted from Response B)
    const url = URL.createObjectURL(blob);

    // Remove existing content from the document body
    document.body.innerHTML = "";

    // Create an iframe to display the PDF
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";

    // Set the height of the document body and HTML element to 100%
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0"; // Remove any default margins

    // Append the iframe to the document body
    document.body.appendChild(iframe);
  } catch (error) {
    alert("Error generating PDF:", error);
    // Handle error
  }
}

// Function to replace placeholders with data
async function replacePlaceholders() {
  const data = await fetchData();

  // Access the element where you want to replace placeholders
  let contentElement = document.querySelector(".right-div");

  if (!contentElement) {
    console.error("Content element not found.");
    return;
  }

  // Get the HTML content of the element
  let htmlContent = contentElement.innerHTML;

  // Replace placeholders in HTML content with actual data
  htmlContent = htmlContent
    .replace(/{date}/g, data.date)
    .replace(/{employeename}/g, data.employeeName)
    .replace(/{phone}/g, data.phoneNumber)
    .replace(/{number}/g, data.number)
    .replace(/{salary}/g, data.salary)
    .replace(/{salutation}/g, data.salutation)
    .replace(/{payGrade}/g, data.payGrade)
    .replace(/{position}/g, data.position)
    .replace(/{originalDepartment}/g, data.originalDepartment)
    .replace(/{image}/g, data.employeePhoto);

  // Update the HTML content of the element with the replaced HTML
  contentElement.innerHTML = htmlContent;
}

document.addEventListener("DOMContentLoaded", async function (event) {
  event.preventDefault();
  // Call generateSections first
  await generateSections();

  // Then call replacePlaceholders
  await replacePlaceholders();

  // await convertToPdf();
  // convertToPdf();
  setTimeout(convertToPdf, 3000); // Adjust the delay time as needed
});
