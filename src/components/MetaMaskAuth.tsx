import React, { useEffect, useState } from 'react';
import Connect from './Connect';

export default function MetaMaskAuth() {
    const [userAddress, setUserAddress] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkIfWalletIsConnected() {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                }) as string[];

                if (accounts.length > 0) {
                    setUserAddress(accounts[0]);
                }
            }
            setIsLoading(false);
        }

        checkIfWalletIsConnected();
    }, []);

    if (isLoading) {
        return null;
    }

    return (
        <>
            {userAddress ? (
                <div>
                    Connected with <span className={'address'}>{userAddress}</span>
                </div>
            ) : (
                <Connect setUserAddress={setUserAddress}/>
            )}
        </>
    );
}
