
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import { useState,useEffect  } from "react";
import { ethers } from "ethers";
import TipJarArtifact from "../../artifacts/contracts/TipJar.sol/TipJar.json";



export default function App() {
  const [provider,setProvider] = useState (null);
  const [signer,setSigner] = useState (null);
  const [account,setAccount] = useState ("");
  const [network,setNetwork] = useState ("");
  const [accounts,setAccounts] = useState ([]);
  const [blockchainData, setBlockchainData] = useState(null);
  const [connection, setConnection] = useState(true);
  const loadBlockChainData = async( )=>{
    // Load blockchain data here
    if(window.ethereum == null){
      alert("MetaMask Not Found");
      
    }else{
      let provide = new ethers.BrowserProvider(window.ethereum);
      //console.log(provide);
      setProvider(provide);
      
      let network = await provide.getNetwork();
      setNetwork(network.name);
      setConnection(false);
      //console.log(network);
      
      const Contractaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const signer = await provide.getSigner();
      setSigner(signer);

      const TipDipJar = new ethers.Contract(Contractaddress,TipJarArtifact.abi,signer);  
      setBlockchainData(TipDipJar);
      
      const walletAccounts  = await window.ethereum.request({ method: 'eth_requestAccounts' });      
      setAccount(walletAccounts);      
      //console.log("Contract address:", TipDipJar.target);
    }
  }

  useEffect(()=>{
    console.log("UseEffect");
    loadBlockChainData();

      if (window.ethereum) {
    // If user switches wallet account
    window.ethereum.on("accountsChanged", (newAccounts) => {
      console.log("Account switched:", newAccounts);
      setAccounts(newAccounts);
    });

    // If user switches network (optional)
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  }
  return () => {
    if (window.ethereum?.removeListener) {
      window.ethereum.removeListener("accountsChanged", () => {});
      window.ethereum.removeListener("chainChanged", () => {});
    }
  };

  },[])

  return (
    <div>
      <Header accounts={account} />
      <Intro />
      <Footer />
    </div>

  )
}
