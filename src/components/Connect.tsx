import { useCallback } from 'react';

type ConnectProps = {
    setUserAddress: (userAddress: string) => void
}

function Connect({ setUserAddress }: ConnectProps) {
    const connect = useCallback(async () => {
        if (!window.ethereum) {
            alert('Get MetaMask!');
            return;
        }

        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        }) as string[];

        setUserAddress(accounts[0]);
    }, [setUserAddress])

    return (
        <>
            <h2>MetaMask is locked - please login</h2>
            <button className='button' onClick={connect}>
                Login
            </button>
        </>
    );
}

export default Connect;