import { ITEM_REQUISITION, ITEM, SPEC } from './end-point'

const getHeaders = () => {
    const token = localStorage.getItem('auth_token');
    return {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': token ? `Bearer ${token}` : ''
    };
};

const handleResponse = async (response) => {
    if (response.status === 401) {
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
        throw new Error('Unauthorized');
    }
    const data = await response.json();
    if (!data) {
        throw new Error(data.message);
    }
    return data;
};

export function fetchItemRequisitions() {
    const endpoint = window.encodeURI(ITEM_REQUISITION);
    return fetch(endpoint, {
        headers: getHeaders()
    }).then(handleResponse);
}

export function saveItemRequisition({ refNo, reqDate, status }) {
    const endpoint = window.encodeURI(ITEM_REQUISITION);
    let body = {
        refNo: refNo,
        reqDate: reqDate,
        status: status,
        details: []
    };
    return fetch(endpoint, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    }).then(handleResponse);
}

export function fetchItems() {
    const endpoint = window.encodeURI(ITEM);
    return fetch(endpoint, {
        headers: getHeaders()
    }).then(handleResponse);
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

export function fetchSpecs() {
    const endpoint = window.encodeURI(SPEC)
    return getList(endpoint);
}

function getList(endpoint) {
    return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (!data.elems) {
            throw new Error(data.message)
        }
        return data.elems
    })
}