// fetch => axios로 교체

const userCheck = () => {
  const userAuth = sessionStorage.getItem('userAuth')
    ? JSON.parse(sessionStorage.getItem('userAuth'))
    : false;
  const token = userAuth ? userAuth.token : 'NOT_HAVE_TOKEN';
  const id = userAuth ? userAuth.uid : 'NOT_HAVE_ID';
  const headers = {
    Accept: 'application/json',
    // 'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Content-Type': 'application/json'
  };
  // 세션스토리지에 토큰이 있는 경우
  if (!!userAuth) {
    headers.token = 'temp';
    headers.id = 'temp';
  }
  return headers;
};

const _Fetch = (api, query = '', body = null) => {
  const headers = userCheck();
  const options = {
    method: api.method,
    headers
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return new Promise(async (resolve, reject) => {
    try {
      let res = await fetch(api.url + query, options);
      if (res.status !== 200) {
        alert('서버 오류입니다.\n관리자에게 문의하세요.');
        return res.statusText;
      }
      res = await res.json();
      const data = JSON.parse(res);
      if (data.status === 200) {
        resolve(data.results);
      } else if (data.status === 1160) {
        alert('장시간 미사용으로 로그아웃 되었습니다.');
        sessionStorage.setItem('userAuth', '');
        window.location.reload();
      } else {
        reject(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default _Fetch;
