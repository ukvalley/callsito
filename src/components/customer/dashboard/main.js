import React, { useState,useEffect } from 'react';
import {  FaBars } from 'react-icons/fa';
import {  useNavigate,Link  } from "react-router-dom";
import Loader from "../../customer/layout/loader";
import axios from 'axios';  

import logo from '../../../assets/helloleadlogo.png';


import ProgressBar from 'react-bootstrap/ProgressBar'


import index_decentralized from '../../../assets1/index_decentralized.webp';
import index_low_cost from '../../../assets1/index_low_cost.webp';
import index_fast_fck from '../../../assets1/index_fast_fck.webp';
import video2782 from '../../../assets1/2781013183.mp4';


import Swal from 'sweetalert2';
import Loader2 from '../../customer/layout/loader2';

import moment from 'react-moment';




import { Connection, PublicKey , Transaction, sendAndConfirmTransaction} from '@solana/web3.js';
import {
   BN,
   Program, Provider, web3
 } from '@project-serum/anchor';
 import idl from '../../../idl.json';


 import { getPhantomWallet, getMathWallet, getSolletWallet, getSolflareWallet,getCoin98Wallet } from '@solana/wallet-adapter-wallets';
 import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
 import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
 import { Token,TOKEN_PROGRAM_ID,getOrCreateAssociatedTokenAccount } from '@solana/spl-token';
 import * as splToken from "@solana/spl-token";
 import { set } from '@project-serum/anchor/dist/cjs/utils/features';
 require('@solana/wallet-adapter-react-ui/styles.css');
 require('../dashboard/newdash.css');

 const wallets = [
   /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
   getPhantomWallet(),
   getMathWallet(),
    getSolletWallet(),
    getSolflareWallet(),
    getCoin98Wallet(),
 ] 
 const { SystemProgram, Keypair,LAMPORTS_PER_SOL } = web3;
/* create an account  */
//const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "confirmed"
}


const programID = new PublicKey(idl.metadata.address);

const Main= ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
  name,
}) => {


    const [fname,set_fName] = useState('');

    const wallet = useWallet();
    const { connected, publicKey, signTransaction, sendTransaction } = useWallet()
    const [walletAddr, setWalletaddr] = useState();
    const [walletdata, setwalletdata] = useState();
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [trans_hash, settrans_hash] = useState();

    const [loadermsg,setLoadermsg] = useState();

    const [g_hours,set_g_hours] = useState('');
    const [g_mins,set_g_mins] = useState('');

    const [g_sec,set_g_sec] = useState('');

    const [inputAmount,setInputAmount] = useState(25);
  
   const [user,setUser] = useState(null);
   const navigate = useNavigate();
   const [loading, setLoading ] = useState();
   const [wallets, setWallets ] = useState();
   const [packages, setPackages ] = useState();
   const [userdata, setUserData ] = useState();
  const [endDate, SetendDate] = useState('');

   const [fetch,setFetch] = useState(false);

   const CONTRACT_KEY = process.env.REACT_APP_CONTRACT_KEY.split(',');

   let base_url = process.env.REACT_APP_BASE_URL
   const header = {
      "Access-Control-Allow-Origin": "*"
    }

    const loggedInUser = localStorage.getItem("loggedInUser");




    
  
    
   


   useEffect(() => {

    if(fetch == false)
      {

      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
       //  console.log(loggedInUser);
        
      }
      else{
         navigate('/login');
      }

      

     
      
      setLoading(true);
      setLoadermsg('Fetching Information');

      
      if(walletdata == null)
      {
              fetch_dashboard_info(loggedInUser)

      }


      
   }
    },[loading,walletdata]);


    const MINUTE_MS = 9000000000;
    useEffect(() => {
      const interval = setInterval(() => {
        refresh_wall()
      }, MINUTE_MS);
    
      return () => clearInterval(interval);
      
     }, []);


    
    
    
    //setInterval(refresh_wall, 6000);


    async function refresh_wall() {
      const loggedInUser = localStorage.getItem("loggedInUser");
      fetch_dashboard_info_refresh(loggedInUser);
    }


    function get_time(start_date,end_date)
    {

      console.log(end_date);

      start_date = Date.now();
      console.log(start_date);

  
      const diff = end_date-start_date;

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);




      set_g_hours(hours);
      set_g_mins(minutes);
      set_g_sec(seconds);
  
    }


    async function getProvider() {
      /* create the provider and return it to the caller */
      /* network set to local network for now */
      const network = "https://green-side-night.solana-mainnet.discover.quiknode.pro/d753d3548c400bdc58ace7f5cd1eca3422a3923f/";
      const connection = new Connection(network, {
        commitment:opts.preflightCommitment,
        confirmTransactionInitialTimeout: 150*10*100
      });
    
      
  
      const provider = new Provider(
        connection, wallet, opts.preflightCommitment,
    
      );

      
      setWalletaddr(wallet.publicKey);
    //  console.log(walletAddr)
      
  
      return provider;
    }


   async  function fetch_dashboard_info(loggedInUser)
    {


      
    
      setLoadermsg("Fetching User's information");

     await axios.get(base_url+'dashboard_information/'+loggedInUser, {headers:header})
      .then(res => { 

       //  console.log(res.data)
           
            setUserData(res.data);
            setFetch(true);
            setLoading(false);
            setLoadermsg('');

          
         })    
      .catch(error => {
              console.error('There was an error!', error);
      });

    }

    function toTimestamp(strDate){
      var datum = Date.parse(strDate);
      return datum;
   }

   function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }


  
  

    async  function fetch_dashboard_info_refresh(loggedInUser)
    {


      
    

     await axios.get(base_url+'dashboard_information/'+loggedInUser, {headers:header})
      .then(res => { 

       //  console.log(res.data)
           
            setUserData(res.data);
            setFetch(true);
            


         })    
      .catch(error => {
              console.error('There was an error!', error);
      });

    }


    async  function update_transaction_hash(hash_data)
    {
      setLoadermsg('Updating Transaction');

      const header = {
        "Access-Control-Allow-Origin": "*"
      }
      console.log(hash_data);

      await axios({
        url: base_url+'update_transaction_hash',
        method: 'post',
        data: hash_data,
        header:header
      })
      .then(res => { 
       console.log(res.data);
     })
     .catch(error => {
              console.error('There was an error!', error);
      });


    }

    function handleNameSubmit(event)
    {
      event.preventDefault();


      if(!wallet.connected)
   {
    Swal.fire({
      title: 'Wallet Not connected',
      text: 'Wallet Not connected',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    return false;

   }

   else
   {
    Update_name(fname,userdata.user_data.email);

   }



    }

    async function Update_name(name,user_id)
    {
      setLoading(true);
      await axios.get(base_url+'update_name/'+name+'/'+user_id+'')
     .then(res => {
      if(res.data.status == "success")
      {
        Swal.fire({
          title: 'Username Updated',
          text: res.data.message,
          icon: 'success',
          confirmButtonText: 'Okay'
        })

        setLoading(false);
      }
   });
    }


    function handleSubmit(e) {
      e.preventDefault()
      setLoading(true);
      setLoadermsg('Processing Instruction please wait...');

      const {amountenter } = e.target.elements

      if(amountenter.value == 25 || amountenter.value == 100)
      {
        takeandsendtoken(amountenter.value);
      }
      else{
        setLoading('false');
        setLoadermsg('');

        Swal.fire({
          title: 'Error!',
          text: "Enter Package Amount 25$ or 100$",
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }

      

    }

    
      
    async function takeandsendtoken(amount)
  {

    
    setLoadermsg('Fetching Wallet');

    const provider = await getProvider();
   // console.log(provider);
   if(!wallet.connected)
   {
    Swal.fire({
      title: 'Wallet Not connected',
      text: 'Wallet Not connected',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    return false;

   }
    const wallet_addr = wallet.publicKey.toBase58();
    const program = new Program(idl, programID, provider);
    const network = "https://green-side-night.solana-mainnet.discover.quiknode.pro/d753d3548c400bdc58ace7f5cd1eca3422a3923f/";
    const connection = new Connection(network, {
      commitment:opts.preflightCommitment,
      confirmTransactionInitialTimeout: 120*10*100
    });
  

    let package_amt = amount;
    let wallets_add_data = wallet.publicKey.toBase58();
  //  console.log('wal_ad',wallet_addr);

    if(loggedInUser != wallets_add_data)
    {
      Swal.fire({
        title: 'User Account not Matched',
        text: 'Logged In User Account not matched with Wallet Address',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
      setLoading(false);
      setLoadermsg('');

      return false;
    }

    var mint = new PublicKey('So11111111111111111111111111111111111111112');

     mint = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');

    let tx1_hash = null;

    
    let secretKeyAdmin = Uint8Array.from(CONTRACT_KEY);
    let AdminKeypair = Keypair.fromSecretKey(secretKeyAdmin);

   // console.log(AdminKeypair.publicKey.toBase58())

   

   mint = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');

    var myToken = new Token(
      provider.connection,
      mint,
      TOKEN_PROGRAM_ID,
      wallet.PublicKey
    );
    let lamportBalance;
    var balance = await connection.getBalance(wallet.publicKey);

    console.log("clicked");

    lamportBalance=(balance / LAMPORTS_PER_SOL)
      console.log(lamportBalance);
    if(lamportBalance < 0.0005)
    {
      Swal.fire({
        title: 'Please Keep SOL Balance for Network Fees',
        text: 'Please Keep SOL Balance for Network Fees',
        icon: 'error',
        confirmButtonText: 'Okay'
      })

      return false;

    }

    var fromWalletTokenAcc = await myToken.getOrCreateAssociatedAccountInfo(
      wallet.publicKey
    )

    var AdminWalletTokenAcc = await myToken.getOrCreateAssociatedAccountInfo(
      AdminKeypair.publicKey
    )

    const myWalletMyTokenBalance = await connection.getTokenAccountBalance(
      fromWalletTokenAcc.address
  );

  let INTERACTION_FEE = parseFloat(package_amt)+parseFloat(userdata.fees);
  INTERACTION_FEE = INTERACTION_FEE;


  console.log("wallet balance", myWalletMyTokenBalance.value.uiAmount);

  if(myWalletMyTokenBalance.value.uiAmount < INTERACTION_FEE)
  {
    Swal.fire({
      title: 'Please Keep USDT Balance for Package',
      text: 'Please Keep USDT Balance for Package',
      icon: 'error',
      confirmButtonText: 'Okay'
    })

    return false;

  }

    setLoading(true);
    setLoadermsg('Fetching Wallet Information');

    
    


    console.log(INTERACTION_FEE);

    console.log('****');
    console.log('from',wallet.publicKey.toBase58())
    console.log('from',fromWalletTokenAcc.address)
    console.log('from',AdminWalletTokenAcc.address)
    console.log('****tokenaccount');
    console.log('to',AdminKeypair.publicKey.toBase58())

    setLoadermsg('Sending Request to your wallet');

    try {
      /* interact with the program via rpc */
      const transaction = new Transaction().add(
        Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          fromWalletTokenAcc.address,
          AdminWalletTokenAcc.address,
          publicKey,
          [],
          INTERACTION_FEE*1000000
      )
  )
      setLoadermsg('Communicating with blockchain. It takes 20 Confirmation. Please Wait while...');

      const signature123 = await sendTransaction(transaction, connection);
      
      await connection.confirmTransaction(signature123, 'confirmed');
  
      console.log(signature123);

      tx1_hash = signature123;

      

      
    } catch (err) {
      console.log("Transaction error: ", err);
      Swal.fire({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Okay'
      })
      setLoading(false);
      setLoadermsg('');

    }

    if(tx1_hash != null)
    {
      setLoadermsg('Payment Capture Now Activating Your Account');

    let wallets_data = '';
     await axios.get(base_url+'activate_package_binary/'+package_amt+'/'+wallets_add_data+'')
     .then(res => {
      wallets_data = res.data;  
      console.log(wallets_data);
      settrans_hash(res.data);
      
   });   
   
   await axios.get(base_url+'update_transaction_hash_single/'+wallets_data.trans_hash+'/'+tx1_hash+'');

    


    }
    setLoadermsg('');

    setLoading(false);
    fetch_dashboard_info(wallet.publicKey.toBase58());

    

    
   }

   
   async function copy_link(side)
    {
     console.log('copied')
    navigator.clipboard.writeText('https://callistoworld.io/register/'+wallet.publicKey.toBase58()+'/'+side);
    Swal.fire({
      title: 'Coppied',
      text: 'Referral Link Copied',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  }

  async function set_withdrawal_lock(user_id,lock)
  {
    await axios.get(base_url+'set_withdrawal_lock/'+user_id+'/'+lock); 
  }



 async function withdraw_payment()
 {
  

  setLoading(true);
  setLoadermsg('Withdrwal payment initiated. Please wait...');
  const network = "https://green-side-night.solana-mainnet.discover.quiknode.pro/d753d3548c400bdc58ace7f5cd1eca3422a3923f/";

  const connection = new Connection(network, {
    commitment:opts.preflightCommitment,
    confirmTransactionInitialTimeout: 120*10*100
  });

 // await delay(300);

 if(!wallet.connected)
 {
  Swal.fire({
    title: 'Wallet Not connected',
    text: 'Wallet Not connected',
    icon: 'error',
    confirmButtonText: 'Okay'
  })

  setLoading(false);
  setLoading('');
  return false;


 }




  fetch_dashboard_info_refresh(wallet.publicKey.toBase58());

    console.log(userdata.user_data.withdrawal_lock);
   if(userdata.user_data.withdrawal_lock == 'true')
  {
    Swal.fire({
      title: 'Error!',
      text: 'Already withdrwal in process',
      icon: 'error',
      confirmButtonText: 'Okay'
    })
    setLoading(false);
    setLoadermsg('');
    
    return false;
  }
    

   
   let loggedInUser = localStorage.getItem("loggedInUser");
   console.log('clicked')
    let amount = userdata.wallets.income_wallet;
    let user_id = loggedInUser;
    let wallet_addr = wallet.publicKey.toBase58();

    if(amount >= 1)
    {

    

    if(loggedInUser == wallet_addr)
    {
      console.log('wallet matched')

      setLoadermsg('Started proceesing on withdrawal. Please wait...');
     

     
      const provider = await getProvider();

      let secretKeyAdmin = Uint8Array.from(CONTRACT_KEY);
      let AdminKeypair = Keypair.fromSecretKey(secretKeyAdmin);
      let to_wall =  new PublicKey(wallet_addr);

      var mint = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');

    var myToken = new Token(
      provider.connection,
      mint,
      TOKEN_PROGRAM_ID,
      wallet.publicKey
    );

    var fromWalletTokenAcc = await myToken.getOrCreateAssociatedAccountInfo(
      AdminKeypair.publicKey
    )

    var ToWalletTokenAcc = await myToken.getOrCreateAssociatedAccountInfo(
      wallet.publicKey
    )
      
    let amount1 = (amount);
    console.log(amount1);

      const transferTransaction = new Transaction()
  .add(Token.createTransferInstruction(
    TOKEN_PROGRAM_ID,
    fromWalletTokenAcc.address,
    ToWalletTokenAcc.address,
    AdminKeypair.publicKey,
    [],
    amount1*1000000
)
)


  

     
    // Sign transaction, broadcast, and confirm
    try {

      let r = (Math.random() + 1).toString(36).substring(7);

      setLoadermsg('Communicating with blockchain. It needs 20 Confirmation Please wait...');



      var signature = await web3.sendAndConfirmTransaction(
          connection,
          transferTransaction,
          [AdminKeypair]
        );

        await axios.get(base_url+'withdrawal_all/'+amount+'/'+user_id+'/'+signature); 

       
        setLoadermsg('Transferred Successfully signature is:'+signature);
        fetch_dashboard_info(loggedInUser);
      
  } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Okay'
      })


      

  }
    }
    else
    {
      Swal.fire({
        title: 'Error!',
        text: 'You have not authority to withdrawal fund. Login Through Wallet to withdraw.',
        icon: 'error',
        confirmButtonText: 'Okay'

      })

    }
  }
  else
  {
    Swal.fire({
      title: 'Error!',
      text: 'You Dont Have Enough Balance for withdrawal',
      icon: 'error',
      confirmButtonText: 'Okay'

    })

    set_withdrawal_lock(loggedInUser,false);


  }


  set_withdrawal_lock(loggedInUser,false);

    setLoading(false);
    setLoadermsg('');

    

    
 }



   if(loading == true || loading == null )
   
   {
      return(
        <main className='fullh'>
         <Loader2
         msg={loadermsg}
         /> 
         </main>
         )
      
      
   }

   

  else
  {
    
  

   if (!userdata.wallets) return (<Loader/>)

   else {
  
  return (
    <main className="fullh">


      

      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>


      

    



<div className='row '>
  <div className=''>
    <div className='row center-image-box'>
  <img style={{width:"200px"}} src={logo}></img>
  </div>
  <p className="text-center mb-3 focus_bg mt-4">Personal Information</p>

    <div className='personalcard'>

      <ul style={{paddingLeft:"0px"}}>
        <li>Name :<span className='text-yello'>{userdata.user_data.first_name}</span> </li>
        <li> UID : <span className='text-yello'>{userdata.user_data.idnumber}</span> </li>
        <li>Contract Address : <br/> <span className='text-yello small_text_size'>{userdata.user_data.email}</span>  </li>
        <li>Total Earnign : <span className='text-yello'>{userdata.wallets.total_earning}$</span></li>
        <li>Total Withdrawal : <span className='text-yello'>{userdata.wallets.withdraw_payment}$</span> </li>

        <li>My Package : <span className='text-yello'>{userdata.package}</span></li>
        <li>My Earning Limit : <span className='text-yello'>{userdata.activation_done*5}$</span></li>
        <li>My Capping Limit : <span className='text-yello'>{(userdata.activation_done*5) - (userdata.wallets.total_earning)}$</span></li>
        <li>My Lost Income : <span className='text-yello'>{parseFloat(userdata.wallets.flushed) + parseFloat(userdata.wallets.flush_entry)}$</span></li>
        <li>My Position : <span className='text-yello'>{userdata.position}</span></li>
        
        
        
      </ul>

      </div>

  </div>
</div>







<div className="container-fluid mb-5">

{userdata.user_data.first_name == null && wallet.connected===true && wallet.publicKey.toBase58() == userdata.user_data.email

?<form className='ma-5' onSubmit={handleNameSubmit}>
  <div class="form-group mb-5">
    <label className='text-white' for="exampleInputEmail1">Update Your Full Name</label>
    <input value={fname} onChange={(e) => set_fName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  

  <button type="submit" class="btn btn-warning">Submit</button>
</form>
  : <></>
   }

  
</div>




<div className="container last-block  mb-5">
<section id="minimal-statistics">
<p className="text-center mb-3 focus_bg">Earning and wallets</p>



<div className="row">


<div className="col-6  mt-4">
    <div className="card2">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
            <h3 className='card-title1'> Total Team</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.total_team.inactive} <br></br></h3>  </span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>


  <div className="col-6  mt-4">
    <div className="card3">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
            <h3 className='card-title1'> Total Direct</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.directs} <br></br></h3>  </span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>




<div className="col-12  mt-4">
    <div className="card2">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'>Earning Wallet</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.income_wallet} $</h3></span>
              <button onClick={() => withdraw_payment()}  className="btn btn-warning">Withdrawal Balance</button>

            </div>
           
          </div>
           
        </div>
      </div>
    </div>
  </div>

  <div className="col-6  mt-4">
    <div className="card2">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
            <h3 className='card-title1'> Trade Income</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.roi_income} $ <br></br></h3>  </span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>

  <div className="col-6  mt-4">
    <div className="card3">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'>Direct Income</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.direct_income} $</h3></span>
              
            </div>
           
          </div>
           
        </div>
      </div>
    </div>
  </div>


  <div className="col-6  mt-4">
    <div className="card2">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'> Matching Income</h3>
              <span> <h3 className='card-subtitle1'> {userdata.wallets.matching_entry} $ <br></br>
                         
              </h3></span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>


  <div className="col-6  mt-4">
    <div className="card3">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'>Reward Income</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.reward_income} $</h3></span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>

  


  








</div>
</section>
</div>





<div style={{margin:"30px"}} className='card-content mt-4 text-center'>
   <h6 className='text-white'>Deposit Trade Amount</h6>
   <form className='form-group'>
    <input style={{textAlign:"center"}} className='form-control' type="text" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)}></input>
    <p className='text-white'>Minimum deposit 25 USDT. A ratio of 25 max 10000</p>
    <button className='btn btn-warning btn-lg btn-block' onClick={() => takeandsendtoken(inputAmount)} type='button'>Deposit</button>
   </form>


</div>



<div className="container last-block mt-5 mb-5">
<section id="minimal-statistics">
<p className="text-center mb-3 mt-4 focus_bg">Deposit And Withdrawals</p>
<div className="row">


<div className="col-6  mt-4">
    <div className="card3">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'>Total Deposit</h3>
              <span> <h3 className='card-subtitle1'>  {userdata.wallets.total_deposit} $</h3></span>
              
            </div>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>


  


  <div className="col-6  mt-4">
    <div className="card2">
      <div className="card-content">
        <div className="card-body cleartfix">
          <div className="media align-items-stretch">
           
            <div className="media-body text-center">
              <h3 className='card-title1'>Total Withdrawal</h3>
              <span> <h3 className='card-subtitle1'> {userdata.wallets.withdraw_payment} $</h3></span>
              
            </div>
           
          </div>
           
        </div>
      </div>
    </div>
  </div>





   

  </div>



  <div className="container last-block mt-5 mb-5">


  <p className="text-center mb-3 mt-4 focus_bg">Team and Business</p>


  <div className="row personalcard  mt-4">
   

      
           
            <div className='col-6'>
            <div className="media-body text-center">
              <h3 className='card-title1'>Left Team</h3>
              <span> <h3 className='card-subtitle1'> {userdata.left_count}</h3></span>
              
            </div>
            </div>

            <div className='col-6'>
            <div className="media-body text-center">
              <h3 className='card-title1'>Right Team</h3>
              <span> <h3 className='card-subtitle1'> {userdata.right_count}</h3></span>
              
            </div>
            </div>


            <div className='col-6'>
            <div className="media-body text-center">
              <h3 className='card-title1'>Left Business</h3>
              <span> <h3 className='card-subtitle1'> {userdata.left_business_25} $</h3></span>
              
            </div>
            </div>

            <div className='col-6'>
            <div className="media-body text-center">
              <h3 className='card-title1'>Right Business</h3>
              <span> <h3 className='card-subtitle1'> {userdata.right_business_25} $</h3></span>
              
            </div>
            </div>

            
           
         
    
  </div>



    
  





  <p className="text-center mb-3 mt-4 focus_bg">Refer And Earn</p>


  <div className='row mt-4'>
  {wallet.connected
    && <>
      <button onClick={() => copy_link('_left') } className="headerbtn">Copy Left</button> <br></br>
      <pre className="text-center mb-3 mt-4 focus_bg_pink">https://hellotrade.live/register/{wallet.publicKey.toBase58()}/_left</pre> <br></br>
      <button onClick={() => copy_link('_right') } className="headerbtn">Copy Right</button> <br></br> 
      <pre className="text-center mb-3 mt-4 focus_bg_pink">https://hellotrade.live/register/{wallet.publicKey.toBase58()}/_right</pre> </>
   }
  </div>


  </div>


   
</section>
</div>












      

      
     



      



      
      

      
    
    </main>
  );
        }
};

    }
  



export default Main;

