export async function getUser() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${cbid}`,
    requestOptions,
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,
    requestOptions,
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  const order = {
    cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: cbid,
    },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestOptions,
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status }; //eslint-disable-line
  }
  const data = await response.json();
  return data;
}
