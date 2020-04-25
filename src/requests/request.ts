export const fetchQuery = (url: string, method: string, body: any) => {
  return new Promise(async (solve, reject) => {
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    //TODO: add uth
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      //eliminar
      mode: 'cors',
      headers: headers,
    })
      .then(response => {

        if (!response.ok) {
          reject(response)
        }
        solve(response.json());
      })
      .catch(err => {
        reject(err);
      })
  });
}


export const serviceCredentials = [
  {
    "name": "auctions",
    "url": "http://<ip>",
    "methods": {
      "GET": [],
      "POST": [],
      "PUT": [],
    },
    "credentials": {
      "service_id": "123456789123456789",
      "password": "subastas123**"
    }
  },
  {
    "name": "insurance",
    "url": "http://<ip>",
    "methods": {
      "GET": [],
      "POST": [],
      "PUT": [],
    },
    "credentials": {
      "service_id": "987654321987654321",
      "password": "aseguradora123**"
    }
  },
  {
    "name": "inventory",
    "url": "http://<ip>",
    "methods": {
      "GET": [],
      "POST": [],
      "PUT": [],
    },
    "credentials": {
      "service_id": "999888777666555444",
      "password": "oficina123**"
    }
  },
  {
    "name": "ESB",
    "url": "http://<ip>",
    "methods": {

    }
  }
]