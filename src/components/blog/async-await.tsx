'use client';
import { get } from 'http';
import { useEffect, useState } from 'react';

async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function getData(a: (data: any) => void) {
    console.log(a);
    setTimeout(() => {
        let data = Math.random() < 0.5 ? new Error('Async Error') : { name: 'Async Data', value: 42 };
        a(data);
    }, 1000);
}

export default function PromiseComponent() {
    const [data, setData] = useState<any>(null);
    const url = 'https://api.sampleapis.com/coffee/hot';

    useEffect(() => {
        async function a() {
            // 你的 async 邏輯
            console.log('🚀 開始 fetch 資料...');
            setData(await fetchData(url));
        }

        a();
        console.log(a());

        function b(data: any) {
            console.log('資料回傳了:', data);
            console.log(typeof data);
        }

        getData(b);
        console.log('getData 已呼叫，等待資料回傳...');
    }, []);

    return (
        <div>
            <p>async 與 await</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}
