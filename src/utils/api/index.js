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

  async getUser() {
    const res = await fetch(`${this._url}/api/`);
    const data = await this.constructor._checkResponse(res);
    return data.results;
  }
}

export const api = new Api("https://randomuser.me/", {
  "content-type": "application/json",
});