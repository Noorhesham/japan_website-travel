const sections = document.querySelectorAll("section");
console.log(sections);
const load = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    console.log(entry.target);
    entry.target.classList.remove("hidden");
  });
};
const observer = new IntersectionObserver(load, {
  root: null,
  threshold: 0.25,
});
sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

      const navButton = document.getElementById("navi");
      const navLinks = document.querySelectorAll(".navigation__link");
 
      navLinks.forEach(link =>
        link.addEventListener("click", () => {
          navButton.checked = false;
        })
      );

// let ts = "1";
// console.log(ts);
// let public = "94b34d28107e56c9d151760315dc8f0f";
// const privateKey = "b78726cc4d6aa46ad2b55ab186b1ac74d21c88d6";
// let hash = "1ed14f5ff762cd32bf80da3d0248bdd1";
// const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${public}&hash=${hash}&nameStartsWith=spider-man`;
// const url2= `https://gateway.marvel.com:443/v1/public/characters/1009610?ts=${ts}&apikey=${public}&hash=${hash}&limit=100`
// fetch(URL)
//   .then((response) => response.json())
//   .then((d) => d.data.results.forEach((re) =>{
//     //  console.log(re.thumbnail.path+'/portrait_xlarge.'+re.thumbnail.extension)
//     console.log(re.id , re.name);
//     }))
//   .catch((error) => console.log("ERROR : ", error));
// fetch(url2)
//   .then((response2) => response2.json())
//   .then((d2) =>console.log(d2.data.results))
//   .catch((error) => console.log("ERROR : ", error));
  




  
  // fetch(`https://rawg.io/api/games?token&key=825375816178422a8a9bbcd5e46e9c67&platforms=187&ordering=-rating&page_size=40`)
  // .then(res => res.json())
  // .then(data => {
  //   console.log(data)
  //   console.log(data.count/40);
  // })
  // .catch(error => console.error('Error:', error));

  // fetch(`https://rawg.io/api/games/662316?key=825375816178422a8a9bbcd5e46e9c67`)
  // .then(res => res.json())
  // .then(data =>  console.log(data))
  // .catch(error => console.error('Error:', error));

  // fetch(`https://rawg.io/api/platforms?token&key=825375816178422a8a9bbcd5e46e9c67`)
  // .then(res => res.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));



  
  // const myNpsso='gvl6T0PQ6KdID2IRC25axpI9AH2lbnF6CQgOyPAZqWmiil6q4uw15Ox9z8zh37sG';
  // const e= async function(){
  // const accessCode = await exchangeNpssoForCode(myNpsso);
  // const authorization = await exchangeCodeForAccessToken(accessCode);
  
  // }()
