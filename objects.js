//var ol = document.createElement("ol");
//var li = document.createElement("li");
const ol = document.querySelector("ol");

const movies = [
    
 {
    name: "Mamma Mia",
    year: 2008,
    director: "Phyllida Lloyd",
    picture:"https://images-na.ssl-images-amazon.com/images/I/91YPwAJ0rSL._AC_SY741_.jpg",
},
{
    name: "Life of Pi",
    year: 2012,
    director: "Ang Lee",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71WXAx7T8-L._AC_SY741_.jpg",
},
{
    name: "Spirited Away",
    year: 2002,
    director: "Hayao Miyazaki",
    picture: "https://images-na.ssl-images-amazon.com/images/I/412B0Cvv2GL._AC_.jpg",
    }
];

const movie1 = `
    <li>
        <p>Name: ${movies[0].name}</p>
        <p>Year ${movies[0].year}</p>
        <p>Director: ${movies[0].director}</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/91YPwAJ0rSL._AC_SY741_.jpg"></img>
        height="400"> 
        </li
    `          
      
   const movie2 = movies.map(movie2 => `
    <li>
        <p>Name: ${movie2.name}</p>
        <p>Year ${movie2.year}</p>
        <p>Director: ${movie2.director}</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71WXAx7T8-L._AC_SY741_.jpg"
        height="400"> 
    </li>
        `);
            console.log(movie2.join(''));
             ol.innerHTML= movie2.join('');

   const movie3 = movies.map(movie3 => `
     <li>
        <p>Name: ${movie3.name}</p>
        <p>Year ${movie3.year}</p>
        <p>Director: ${movie3.director}</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/412B0Cvv2GL._AC_.jpg"
        height="400"> 
     </li>
 `);
            console.log(movie3.join(''));
             ol.innerHTML= movie3.join('');


          