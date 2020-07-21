const auth = "563492ad6f91700001000001ee4eff7673904e9cadfc62f9356cd56c";
const gallery = document.querySelector(".gallery");
const search = document.querySelector(".searh-input");
const submitButton = document.querySelector(".submit-btn");
let searchValue;

async function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth
      }
    }
  );
  const data = await dataFetch.json();
  console.log(data);
  data.photos.forEach((photo) => {});
}

curatedPhotos();
