import { ITEM_REQUISITION, ITEM } from './end-point'

export function fetchItemRequisitions() {
  const endpoint = window.encodeURI(ITEM_REQUISITION)

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (!data) {
        throw new Error(data.message)
      }
      return data
    })
}

export function saveItemRequisition({ refNo, reqDate, status }) {
  const endpoint = window.encodeURI(ITEM_REQUISITION)
  let body = {
    refNo: refNo,
    reqDate: reqDate,
    status: status,
    details: []
  };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error(data.message)
      }
      return data
    })
}

export function fetchItems() {
  const endpoint = window.encodeURI(ITEM)

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.elem) {
        throw new Error(data.message)
      }
      return data.elem
    })
}

export function saveItem({ nameEn, nameLocal, isDeleted, createdBy }) {
  const endpoint = window.encodeURI(ITEM)
  let body = {
    name_en: nameEn,
    name_local: nameLocal,
    is_deleted: isDeleted,
    created_by: createdBy
  };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      console.log(res)
      res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(data.elem)
      if (!data.elem) {
        throw new Error(data.message)
      }
      return data.elem
    })
    .catch((error) => console.log(error))
}