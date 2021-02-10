//un prompt unde se cer date si se salveaza intr o variabila dialogBox;
var dialogBox = prompt('Daca doriti sa mi trimiteti un mesaj, puteti sa o faceti utilizand casuta de mai jos.');

alert('Multumesc!' );
//console.log('cheat sheet');


// //functii //sintaxa 1
// function sum(nr1, nr2){
//     var suma = nr1+nr2;
//     return suma;
    
// }
// const sumVariable=sum(2,3);
// console.log(sumVariable);

// //functii anonime// sintaxa 2
// const sum = function (nr1, nr2){
//     var suma = nr1+nr2;
//     return suma;
    
// }
// const suSumaNR  =sum(2,3);
// console.log(suSumaNR);
// // functiile anonime + utilizarea const +=> da eroare aatunci cand introduci o fct de doua ori 

// //arrow function // sintaxa 3 
// const operatie = (a,b)=>  a+b
// console.log(operatie(2,3))
// // daca arrow fct e pe o singura linie o sa returneze automat
// // daca nu, atunci trebuie pus in acolade un return
// //adica: 
// const operatie = (a,b)=> {
//     return a+b;
// } 
// console.log(operatie(2,3))

//obiecte 

// var movie= {
//     name: "movie Movie",
//     price: 10,
//     actor: "X",
//     regizor: "Y",
//     'geany %$': 'valouare',
//     fct: function(){
      
//      console.log("ceva");
//     }
//   };
//   console.log(movie.name);
//   console.log(movie.fct);
//   console.log(movie.fct());
  
//   console.log(movie['geany %$']);
  
// verificam daca avem sau nu atribut in cheie 
// if (movie.rating){
//     console.log('exista');
    
//   }else {
    
//       console.log("nu exista");
//   } 


//FOR IN 
// for( var key in movie){
//     console.log(key);
// console.log(movie[key]);
// }


//putem sa avem doua obiecte egale? O_o Raspuns: Da , doar daca al  doilea obiect e asigant prin referinta=>
  
// var movie2 = movie;
// console.log(movie2 === movie);



 