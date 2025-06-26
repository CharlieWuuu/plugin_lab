'use client';
import { useState, useEffect } from 'react';

async function setCookie(cookieName: string) {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/setCookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ value: cookieName }),
    });
    const data = await res.json();
    return data;
}

async function seeCookie() {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/seeCookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data;
}

async function dropCookie() {
    const res = await fetch('https://backendnestjs-production-aeb2.up.railway.app/cookie/dropCookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data;
}

export default function ZustandTest() {
    const [myCookie, setMyCookie] = useState<string>('請輸入 cookie 名稱');
    const [setReturn, setSetReturn] = useState<string>('按這裡設定 cookie');
    const [seeReturn, setSeeReturn] = useState<string>('按這裡查看 cookie');
    const [dropReturn, setDropReturn] = useState<string>('按這裡刪除 cookie');

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 gap-4">
            <input type="text" placeholder={myCookie} onChange={(e) => setMyCookie(e.target.value)} />
            <div className="flex items-center gap-2">
                <span>{setReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSetReturn(JSON.stringify(setCookie(myCookie)))}>
                    送出
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span>{seeReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSeeReturn(JSON.stringify(seeCookie()))}>
                    送出
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span>{dropReturn}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setDropReturn(JSON.stringify(dropCookie()))}>
                    送出
                </button>
            </div>
        </div>
    );
}
