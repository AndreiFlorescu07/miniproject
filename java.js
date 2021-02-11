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


//putem sa avem doua obiecte egale? O_o Raspuns:
 //Da , doar daca al  doilea obiect e asigant prin referinta=>


// var movie2 = movie;
// console.log(movie2 === movie);


//in acest moment se creaza movie2 care moovie 2 nu 
//isi mai face o zona de memorie si isi ia datele direct
// din movieș
//,insa daca modificam in movie2 se modifica si in movie :|


// se rezolva aceasta problema folosind object.assign
 //var movie2=Object.assign({},movie);
 //movie2.price = 20;



//* HOISTING


//hoisting se aplica doar la var si la function
//nu se aplica la let si const

// console.log(dog);
// var dog = 'rex';

//hoisting = cum vede browserul ce rulam noi 

// muta declararea variabilelor sus de tot in primele linii;
// var dog;
// console.log(dog);
// dog='Rex'
  
  
  
// hoisting la functii 
// console.log(sum(2,3));

// function sum (number1 , number2){
//   return number1+number2;

// }


 //*CALLBACK Functions

 //callback ul este o functie plasata ca si parametru
// function conversation(message, callback){
//     console.log(message);
//     callback();
//   }
//   function hodorReplay(){
//     console.log('Hodor!');
    
//   }
//   //apelam conversatia pt a vedea cllback ul
//   conversation('hello Hodor!',hodorReplay);


//*CLOSURE 

// function myFunc() {
//     var sum = 0;
//     // myFunc returneaza o alta functie
//     return function(value) {
//       // Functia din interiorul lui myFunc are acces la variabila sum
//       sum += value;
//       return sum;
//     }
//   }
  
//   // In momentul apelarii lui myFunc, theSum are acces atat la variabila
//   // sum, cat si la functia returnata
//   var theSum = myFunc();
//   var theSum2 = myFunc();
//   // cand theSum e apelata, se aduna 10 la variabila sum, vizibila in contextul
//   // lui theSum
//   console.log(theSum(10), theSum(1), theSum(2), theSum2(100));
  