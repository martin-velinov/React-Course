import React from 'react';
import {Movies} from './components/Movies';


let movies=[
  {name:"The Dark Knight", year:"2008", genre:"drama",
  plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham,Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  imdbLink:"https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=8RJ5NGTT5N5G95JEY2RX&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3",
  imgUrl:"https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg"},
  
  {name:"The Godfather", year:"1972", genre:"crime",
  plot:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
  imdbLink:"https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=8RJ5NGTT5N5G95JEY2RX&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",
  imgUrl:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},

  {name:"Pulp Fiction", year:"1994", genre:"crime",
  plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  imdbLink:"https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=8RJ5NGTT5N5G95JEY2RX&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8",
  imgUrl:"https://m.media-amazon.com/images/I/51DZpY7tfoL._SY445_.jpg"},

  {name:"The Green Mile", year:"1999", genre:"drama",
  plot:"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
  imdbLink:"https://www.imdb.com/title/tt0120689/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=8RJ5NGTT5N5G95JEY2RX&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_26",
  imgUrl:"https://m.media-amazon.com/images/I/51GLlocYQ9L.jpg"},

  {name:"Parasite", year:"2019", genre:"comedy,drama",
  plot:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  imdbLink:"https://www.imdb.com/title/tt6751668/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=8RJ5NGTT5N5G95JEY2RX&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_35",
  imgUrl:"https://musicart.xboxlive.com/7/6e3a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},

  {name:"Gladiator", year:"2000", genre:"action,drama",
  plot:"A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  imdbLink:"https://www.imdb.com/title/tt0172495/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=C9ZW5PNEER67386C09TT&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_37",
  imgUrl:"https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"}

]

function App() {
  return (
    <div >
      <Movies filmovi={movies} />
    </div>
  );
}

export default App;
