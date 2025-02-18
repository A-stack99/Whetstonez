export const FetchGetRequest = async () =>{
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3cc3d54235efc30c7b6d3c8639c62667', {
        method: 'GET',
    });
  const resJson = await response.json();
  return resJson;
};

export const FetchPostRequest = async (data) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
  const resJson = await response.json();
  return resJson;
};

export const FetchPutRequest = async (data) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
  const resJson = await response.json();
  return resJson;
};

// export const FetchGetRequest = async () =>{
//   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}', {
//       method: 'GET',
//   });
// const resJson = await response.json();
// return resJson;
// };