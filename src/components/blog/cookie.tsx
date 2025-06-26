'use client';
import { useState } from 'react';

async function setCookie(cookieName: string) {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/setCookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ value: cookieName }),
    });
    const data = await res.json();
    console.log('setCookie', data);
    return data.message;
}

async function seeCookie() {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/seeCookie', {
        method: 'GET',
        credentials: 'include',
    });
    const data = await res.json();
    console.log('seeCookie', data);
    return data.message;
}

async function dropCookie() {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/dropCookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
    const data = await res.json();
    console.log('dropCookie', data);
    return data.message;
}

export default function ZustandTest() {
    const [myCookie, setMyCookie] = useState<string>('請輸入 cookie 名稱');
    const [setReturn, setSetReturn] = useState<string>('按這裡設定 cookie');
    const [seeReturn, setSeeReturn] = useState<string>('按這裡查看 cookie');
    const [dropReturn, setDropReturn] = useState<string>('按這裡刪除 cookie');

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 gap-4">
            <input type="text" placeholder={myCookie} onChange={(e) => setMyCookie(e.target.value)} />
            <div className="flex items-center gap-2">
                <span>{setReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => setSetReturn(await setCookie(myCookie))}>
                    送出
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span>{seeReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => setSeeReturn(await seeCookie())}>
                    送出
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span>{dropReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => setDropReturn(await dropCookie())}>
                    送出
                </button>
            </div>
        </div>
    );
}
