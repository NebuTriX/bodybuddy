window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            console.log('Connected to MetaMask');
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            console.log('User Address:', userAddress);
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
        }
    } else {
        console.error('MetaMask is not installed. Please install MetaMask to use this website.');
    }
});
