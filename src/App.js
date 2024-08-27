
import './App.css';

function App() {

  let news ="Neeraj Chopra, badminton ace PV Sindhu, weightlifter Mirabai Chanu, boxer Lovlina Borgohain and select members of the Harmanpreet Singh-led Indian men's hockey team";
  return (
    <div className="App">
      <button type='button' onClick={()=>{

        console.log(news.toUpperCase());
        console.log(news.toLowerCase());
      }}>toLowerCase/toUpperCase</button>

      <button type='button' onClick={()=>{
        let firstName ="Shaik Firdous ";
        let lastName ="Unnisa Begum";

        let fullName = firstName.concat(lastName);
        console.log(fullName);
      }}>Concat</button>

      <button type='button' onClick={()=>{
        let name ="       Shaik Firdous Unnisa Begum      ";
        console.log(`-->${name.trimStart()} <---`);
        console.log(`-->${name.trimEnd()} <---`);
        console.log(`-->${name.trim()} <---`);
      }}>trim/trimEnd/trimStart</button>

      <button type='button' onClick={()=>{
        let msg ="Good morning";
        console.log(msg.padStart(1000,"Is"));
        console.log(msg.padEnd(100,"Is"));
      }}>padStart/padEnd</button>

      <button type='button' onClick={()=>{
         let place ="Hyderabad ";
         console.log(place.repeat(1000));
      }}>Repeat</button>

      <button type='button' onClick={()=>{
        let prayer ="Hello Good Morning Hello Good Morning";
        console.log(prayer.replace("Hello", "hi"));
        console.log(prayer.replaceAll("Hello","hi"));
      }}>replace/replaceAll</button>


      <button type='button' onClick={()=>{
                let prayer ="Hello Good Morning Hello Good Morning";
                console.log(prayer.split("o"));
                
      }}>split</button>

      <button type='button' onClick={()=>{
        let word = "SHAIKFIRDOUSUNNISABEGUM";
        console.log(word.length);
        console.log(word.at(0));
        console.log(word.charAt(0));
        console.log(word[0]);
      }}>Length</button>

      <button type='button' onClick={()=>{
        let word = "SHAIKFIRDOUSUNNISABEGUM";
        console.log(word.slice(5,12));
        console.log(word.substring(5,12));
        console.log(word.substr(9,5));                                                  
      }}>slice/substring</button>

      <button type='button' onClick={()=>{
          let name="Hello I am shaik Firdous Unnisa begum";
          console.log(name.startsWith("Hello"));
          console.log(name.endsWith("begum"));
      }}>charCodeAt()</button>

      <button type='button' onClick={()=>{
           let player = "Virat Kohli is an Indian international cricketer who plays Test and One Day International cricket for the Indian national team";
           console.log(player.indexOf("Virat"));
           console.log(player.lastIndexOf("Indian"));
           console.log(player.search(/international/i));
         }}>indexOf/lastIndexOf/search</button>
      
     

    </div>
  );
}

export default App;
