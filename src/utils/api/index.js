class Api {
  constructor(url) {
    this._url = url;
  }

  static _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`${res.status}`));
  }

  async getCategories() {
    const res = await fetch(`${this._url}/categories/`);
    const data = await this.constructor._checkResponse(res);
    return data.results;
  }

  async getShops() {
    const res = await fetch(`${this._url}/shops/`);
    const data = await this.constructor._checkResponse(res);
    return data.results;
  }

  async getSales() {
    const res = await fetch(`${this._url}/sales/`);
    const data = await this.constructor._checkResponse(res);
    return data.results;
  }

  async getForecast() {
    const res = await fetch(`${this._url}/forecast/`);
    const data = await this.constructor._checkResponse(res);
    return data.results;
  }

  async postForecast(data) {
    const res = await fetch(`${this._url}/forecast/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postLoginUser(data) {
    const res = await fetch(`${this._url}/api/auth/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }
}

export const api = new Api('http://127.0.0.1:8000/', {
  'content-type': 'application/json',
});
