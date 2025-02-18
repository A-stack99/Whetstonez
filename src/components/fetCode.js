// const fetchWeather = async () => {
//   setLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    
//     if (!response.ok) {
//       throw new Error('Network issue to find City');
//     }

//     const data = await response.json();
//     return data;
//     setWeather(data);
//   } catch (error) {
//     setError(error.message || 'Something went wrong');
//   } finally {
//     setLoading(false);
//   }
// };

// // useEffect(() => { 
// //   fetchWeather(); 
// // }, []);

// useEffect(() => {
//     console.log(weather);
// }, [weather]);