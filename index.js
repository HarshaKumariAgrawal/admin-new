const axios = require('axios').default;
async function a(){
    const response=await fetch(`http://aufin.herokuapp.com/contents`);
    const data=await response.json();
    console.log(data);
}
a();
