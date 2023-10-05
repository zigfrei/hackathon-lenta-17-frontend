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

  async postLoginUser(data) {
    const res = await fetch(`${this._url}/api/v1/users/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);

    // const res = await fetch(`${this._url}/api/v1/reviews/`);
    // const data = await this.constructor._checkResponse(res);
    // if (res.ok) {
    //   if (data.count === 0) { data.results = mockSliderDataBottom; } else {
    //     let firstId = 1;
    //     data.results.forEach((review) => {
    //       review.id = firstId;
    //       firstId += 1;
    //     });
    //   }
    // } else {
    //   return Promise.reject(new Error(`${res.status}`));
    // }
    // return data.results;
  }
}

export const api = new Api('https://randomuser.me/', {
  'content-type': 'application/json',
});

// export const api = new Api(process.env.API_URL || 'http://localhost:8000', { 'content-type': 'application/json' });
