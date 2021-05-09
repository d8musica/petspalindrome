import React, { useState } from 'react'; 
import './App.css';
import axios from 'axios'



function App() {

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [id,setId]=useState("");


  
  

  function handleSubmit(event){
    event.preventDefault();

    var body = {
      age: {age}.age,
      name: {name}.name,
      specie: {specie}.specie
    }

   
    
    axios.post(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}/pets`, body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    document.Form1.reset()
  }

  function getPets(e){
    e.preventDefault();
    axios.get(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}/pets`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    alert(JSON.stringify(response.data))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

    

  }

  function handleSubmit2(e){
    var body = {
      age: {age}.age,
      name: {name}.name,
      specie: {specie}.specie
    }
    e.preventDefault();

    console.log(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}/pets/`+ {id}.id)
    
    axios.put(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}/pets/`+ {id}.id, body)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setId("")
    document.Form2.reset()
  }

  function handleSubmit3(e){

    e.preventDefault();

    axios.delete(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_API}/pets/`+ {id}.id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setId("")
    document.Form3.reset()
  }

  function getPalindrome(){
    let s = "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero"
    let subStrings = [];

    for (let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length - i; j++) {
        let subString = s.substring(j, j + i + 1);
        if(subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
          subStrings.push(subString);
        }
      }
    }

    console.log(subStrings)

    let subStrings3 = [];
    for(let i=0; i<subStrings.length;i++){
      if(subStrings[i].length>2){
        let aux = subStrings[i]
        subStrings3.push(aux)
      }
    }

    console.log(subStrings3)

    alert("Those palindrome words are :"+JSON.stringify(subStrings3))

  
  }
  

  return (
    
    <div className="App">
      <header className="App-header">

        <h1>EJERCICIO 1 CONSUMO DE APIS</h1>

        <p>La siguiente API abierta ofrece la creación personalizada de un CRUD de cualquier tipo de entidad personalizable https://crudcrud.com/
Revisar la documentación y crear un proyecto de frontend que consuma el CRUD (Create, Read, Update, Delete) para una entidad Mascota que tendrá los siguientes atributos: Edad (numero entero que representa los años de vida), nombre (string), especie (string). Este proyecto debe estar preferiblemente dockerizado y hacer uso de variables de entorno.

El diseño lo debes realizar a tu gusto</p>

        <h1>EJERCICIO 2 ALGORITMO</h1>
        
        <p>
        Desarrolla un script que encuentre las cadenas de texto que sean palíndromos con más de 3 letras en el siguiente bloque de texto: <br></br>
        <code>anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromo
          casaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresd
          onasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero</code> 
        </p>
      </header>

      <div>
        <h1>CONSUMO DE API'S</h1>
        <h2>CREATE PET</h2>
        <form name="Form1" onSubmit={handleSubmit}>
          <label >Age:</label><br></br>
          <input type="number" id="Age" name="age" onChange={(e)=>{setAge(e.target.value)}}/><br></br>
          <label >Name:</label><br></br>
          
          <input type="text" id="Name" name="name" onChange={(e)=>{setName(e.target.value)}}/><br></br>
          <label >Specie:</label><br></br>
          <input type="text" id="Specie" name="specie" onChange={(e)=>{setSpecie(e.target.value)}}/><br></br>       
          <input type="submit" value="Create" reset />  
        </form> 

        <h2>SHOW PETS</h2>
        <button onClick = {getPets}> Show pets </button>

        <h2>UPDATE PET</h2>
        <form name="Form2" onSubmit={handleSubmit2}>
          <label >ID:</label><br></br>
          <input type="text" id="id" name="id" onChange={(e)=>{setId(e.target.value)}}/><br></br>
          <label >Age:</label><br></br>
          <input type="number" id="Age" name="age" onChange={(e)=>{setAge(e.target.value)}}/><br></br>
          <label >Name:</label><br></br>
          
          <input type="text" id="Name" name="name" onChange={(e)=>{setName(e.target.value)}}/><br></br>
          <label >Specie:</label><br></br>
          <input type="text" id="Specie" name="specie" onChange={(e)=>{setSpecie(e.target.value)}}/><br></br>                        
          <input type="submit" value="Update" reset />  
        </form> 

        <h2>DELETE PET</h2>
        <form name="Form3" onSubmit={handleSubmit3}>
          <label >ID:</label><br></br>
          <input type="text" id="id" name="id" onChange={(e)=>{setId(e.target.value)}}/><br></br>                                  
          <input type="submit" value="Delete" reset/>  
        </form>


        <h1>ALGORITMO</h1>

        <button onClick = {getPalindrome}> Run function </button>


        
          
        

      </div>

    </div>
    
  );
}

export default App;
