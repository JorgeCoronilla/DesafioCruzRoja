//Diferentes Fetch creados como helpers


export const defaultFetch = async (endPoint, metodo, datos) => {
    let metaData = {
      method: metodo,
      body: JSON.stringify(datos),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };
  
    const res = (await fetch(endPoint, metaData)).json();
    return res;
  }
  
  export const getFetch = async (endPoint, metodo, datos) => {
    let metaData = {
      method: metodo,
      body: JSON.stringify(datos),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };
    
    const res = (await fetch(endPoint, metaData)).json();
    return res;
  }
  