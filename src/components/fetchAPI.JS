export const getApi = async  () =>{
 const response = await fetch('', {
    method:'get',
 });
 const jsonRes = await response.json();
 return jsonRes;
};

export const postApi = async  () =>{
    const response = await fetch('', {
       method:'POST',
       body: JSON.stringify(data),
       headers:{
        'Content-type' : 'application/json, chaerset=UFT-8',
       },
    });
    const jsonRes = await response.json();
    return jsonRes;
   }

   export const putApi = async  () =>{
    const response = await fetch('', {
        method:'PUT',
        body: JSON.stringify(data),
        headers:{
         'Content-type' : 'application/json, chaerset=UFT-8',
        },
    });
    const jsonRes = await response.json();
    return jsonRes;
   }