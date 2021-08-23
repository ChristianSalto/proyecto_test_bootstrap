const { formTest } = document;
const { email } = formTest;



formTest.addEventListener('submit', (event) =>{
    event.preventDefault();
   
    const data = new FormData(formTest)
    const serializeData = {}

    for(const [name,value] of data){
        serializeData[name] = value;
    }

    console.log(serializeData)

    //*****  jquery  *****//   
   // const d = $('#form-test').serializeArray().filter(e => e.value)

});