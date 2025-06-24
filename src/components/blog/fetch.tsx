'use client';
import { useEffect, useState } from 'react';

export default function PromiseComponent() {
    const [result, setResult] = useState<any>(null);
    const [status, setStatus] = useState<string>('before fetch');

    const url = Math.random() < 0.5 ? '' : 'https://api.sampleapis.com/coffee/hot';

    useEffect(() => {
        setStatus('pending');
        let f = fetch(url)
            .then(function (response) {
                console.log('📦 Response:', response);
                setStatus('json-pending'); // ⏳ 準備開箱 JSON！
                return response.json(); // ⬅️ 這行也是一個 promise！
            })
            .then(function (myJson) {
                setResult(myJson);
                setStatus('fulfilled');
                console.log('✅ JSON:', myJson);
            })
            .catch(function (error) {
                setStatus(status === 'json-pending' ? 'json-error' : 'rejected');
                console.error('❌ 錯誤:', error);
            });
        console.log(f); // promise
    }, []); // 🚨 確保只在第一次 render 時執行一次

    return (
        <div>
            <p>fetch status: {status}</p>
            {result &&
                result.map((d: any, i: number) => {
                    return (
                        <p key={i} className="bg-slate-100 p-2 rounded-sm">
                            {d.title}
                        </p>
                    );
                })}
        </div>
    );
}
