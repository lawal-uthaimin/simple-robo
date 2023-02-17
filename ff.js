const chatGtp = async () =>{

    const apiKEy = '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';

    const response = await fetch(apiKEy);
    const data = await response.json();

    return data;
} 

chatGtp()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// gehh8s8



    const Key = '966eebab4c77fb2959828c4cc5b1390b';
    const chatGttp = async (id) =>{

        const query = `${id}?apikey=${Key}`;
    
        const response = await fetch(apiKEy);
        const data = await response.json();
    
        return data;
    } 
    
    chatGttp()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));




fetch('966eebab4c77fb2959828c4cc5b1390b')
.then((Response) =>{
    console.log('resolve', Response)
    return Response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((err) =>{
    console.log('reject', err);
});



