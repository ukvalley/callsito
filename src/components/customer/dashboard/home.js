import React, { useState } from 'react';
import {  useNavigate,Link  } from "react-router-dom";


import index_decentralized from '../../../assets1/index_decentralized.webp';
import index_low_cost from '../../../assets1/index_low_cost.webp';
import index_fast_fck from '../../../assets1/index_fast_fck.webp';
import video2782 from '../../../assets1/2781013183.mp4';
import useCollapse from 'react-collapsed'

import logo from '../../../assets/helloleadlogo.png';



import app from '../../../assetsm/app.png';

import white_paper from '../../../assetsm/white_paper.pdf';

import appm from '../../../assetsm/appm.png';
import gg from '../../../assetsm/gg.png';
import ic1 from '../../../assetsm/ic1.png';
import ic2 from '../../../assetsm/ic2.png';
import ic3 from '../../../assetsm/ic3.png';
import ic4 from '../../../assetsm/ic4.png';
import ic5 from '../../../assetsm/ic5.png';
import ic6 from '../../../assetsm/ic6.png';
import ic7 from '../../../assetsm/ic6.png';
import ic8 from '../../../assetsm/ic8.png';
import ic9 from '../../../assetsm/ic9.png';
import ic10 from '../../../assetsm/ic10.png';
import ic11 from '../../../assetsm/ic11.png';
import ic12 from '../../../assetsm/ic12.png';
import p1 from '../../../assetsm/p1.png';
import p3 from '../../../assetsm/p3.png';
import p4 from '../../../assetsm/p4.png';
import pp from '../../../assetsm/pp.png';
import ssh2 from '../../../assetsm/ssh2.png';
import ss1 from '../../../assetsm/ss1.jpg';

import video from '../../../assetsm/meta.mp4';


import banner_img from '../../../assetsm/banner-img.png';


import s2 from '../../../assetsm/s2.png';
import s3 from '../../../assetsm/s3.png';
import offer1 from '../../../assetsm/offer1.png';
import off from '../../../assetsm/off.png';

import Solana from '../../../assetsm/Solana.png';
import st2 from '../../../assetsm/st2.png';
import tm1 from '../../../assetsm/tm1.png';
import uk2 from '../../../assetsm/solmathlogodark.svg';
import solmathlogo from '../../../assetsm/solmathlogo.svg';

import wc1 from '../../../assetsm/wc1.png';


import { FaGripVertical,FaGripLines,FaFacebook,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";


import '../../../App.css'






import Loader2 from '../../customer/layout/loader2';



import { Connection, PublicKey  } from '@solana/web3.js';
import {
   BN,
   Program, Provider, web3
 } from '@project-serum/anchor';
 import idl from '../../../idl.json';


 import { getPhantomWallet, getMathWallet, getSolletWallet, getSolflareWallet,getCoin98Wallet } from '@solana/wallet-adapter-wallets';
 import { useWallet } from '@solana/wallet-adapter-react';



 require('@solana/wallet-adapter-react-ui/styles.css');
 require('../dashboard/front.css');


 const wallets = [
   /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
   getPhantomWallet(),
   getMathWallet(),
    getSolletWallet(),
    getSolflareWallet(),
    getCoin98Wallet(),
 ] 
 const { SystemProgram, Keypair } = web3;
/* create an account  */
//const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "processed"
}


const programID = new PublicKey(idl.metadata.address);
require('../dashboard/front.css');
const Home= ({
  
}) => {

    const [walletAddr, setWalletaddr] = useState();
    const [walletdata, setwalletdata] = useState();
    const wallet = useWallet();
    const { connected, publicKey, signTransaction, sendTransaction } = useWallet()
   

    const [loadermsg,setLoadermsg] = useState();
  
  
   
   const navigate = useNavigate();
   const [loading, setLoading ] = useState(false);
   



   

   let base_url = process.env.REACT_APP_BASE_URL

  

   const [isShown, setIsShown] = useState(false);

  
   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    


    async function getProvider() {
      /* create the provider and return it to the caller */
      /* network set to local network for now */
      const network = "https://green-side-night.solana-mainnet.discover.quiknode.pro/d753d3548c400bdc58ace7f5cd1eca3422a3923f/";
      const connection = new Connection(network, opts.preflightCommitment);
      
  
      const provider = new Provider(
        connection, wallet, opts.preflightCommitment,
    
      );

      
      setWalletaddr(wallet.publicKey);
    //  console.log(walletAddr)
      
  
      return provider;
    }


  

    
   


    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };

    
      
   


 




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
    
  

   
  
  return (
   

    <>
    {/* JavaScript Bundle with Popper */}
    <nav className="navbar navbar-expand-lg bg-light nv shadoo body">
      <div className="container-fluid">
      <center>    

        <div className="logo_container">
                <a className="navbar-brand " id="lc" href="#">
          <img className="logo" src={logo}></img>

        </a>

        </div>
        </center>

        <button
          className="navbar-toggler"
          style={{color:'white'}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          {...getToggleProps()}
        >
          {isExpanded ? <FaGripLines /> : <FaGripVertical />}
        </button>
        
        <div {...getCollapseProps()} className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active "
                id="lc"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
             <Link to="/login"> <a className="nav-link " id="lc" href="#">
                Login
              </a> </Link>
            </li>
            <li className="nav-item">
            <Link to="/register"><a className="nav-link c" id="lc" href="#">
                Register
              </a>
              </Link>
              
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
    {/* -------------------------------------------------------- */}








    <div className="container">
  

      <div className="row content">
        
        <div className="col-md-6">
          <h1 className="headline mt-5 animate-charcter">
            Made for People by People          </h1>

          <h6 className="p1">
          The Hello Trade project is a decentralized, peer-to-peer, open source business model that will allow users to buy and sell digital products and services in a completely safe and transparent way, using the power of blockchain technology.          </h6>
          <Link to="/login" >
          <button className="cr-banner-btn d-flex a justify-content-center align-items-center mt-3">
            Get Started
          </button>
          </Link>

                  </div>
         </div>
      {/* -------------------------------------------------------------- */}
      <div className="container-fluid mt-5 mb-5">
        <div className="card cr-partner-content" id="card_color">
          <div className="col-md-12">
          <marquee behavior="scroll" scrollamount={10} direction="left">

          <h3 className="p1 text-white">
           Pre sale live will start from 25 Aug to 25 Nov 2022
          </h3>

          </marquee>

            <marquee behavior="scroll" scrollamount={10} direction="left">
              <img
                src={p1}
                style={{ marginLeft: "11%" }}
                alt="Natural"
              />
              <img
                src={p4}
                style={{ marginLeft: "11%" }}
                alt="Natural"
              />
              <img
                src={p3}
                style={{ marginLeft: "11%" }}
                alt="Natural"
              />
            </marquee>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 ">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="card "
                      id="card_color"
                      style={{ marginTop: "4%" }}
                    >
                      <img
                        className="card-img-top"
                        id="card_img"
                        src={ic1}
                      />
                      <div className="card-body">
                        <h5 className="card-text">Easy To Transfer</h5>
                        <p className=" card-text">
                        The project is based on the Solana blockchain, which is one of the most advanced and secure blockchain platforms in the world. Solana is able to process more than 50,000 transactions per second, which makes it the perfect choice for a project like Hello Trade.

</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="card"
                      id="card_color"
                      style={{ marginTop: "4%" }}
                    >
                      <img
                        className="card-img-top"
                        id="card_img"
                        src={ic2}
                      />
                      <div className="card-body">
                        <h5 className="card-text">Private</h5>
                        <p className=" card-text">
                        The Hello Trade team has created a native token, called the Hello Trade (CLO), which will be used to power the ecosystem. The token will be used to pay for goods and services, as well as to reward users for their contributions to the platform.                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="card"
                      id="card_color"
                      style={{ marginTop: "4%" }}
                    >
                      <img
                        className="card-img-top"
                        id="card_img"
                        src={ic3}
                      />
                      <div className="card-body">
                        <h5 className="card-text">Secure & Fast</h5>
                        <p className=" card-text">
                        The project is currently in its early stages, and the team is working on developing the platform. The mainnet is scheduled to launch in Q4 2020.                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="card"
                      id="card_color"
                      style={{ marginTop: "4%" }}
                    >
                      <img
                        className="card-img-top"
                        id="card_img"
                        src={ic4}
                      />
                      <div className="card-body">
                        <h5 className="card-text">Decentralized Community</h5>
                        <p className=" card-text">
                        The company has already developed a prototype of the platform and is currently testing it with a small group of users. Hello Trade plans to launch the platform in Q1 2019.                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h5 className="sas">Hello Trade Feature</h5>
                <h3 className="the_line mt-3">
                The Hello Trade team is composed of experienced professionals from the fields of business, marketing, and blockchain technology, and includes an advisory board with members from companies such as Google, Facebook, and Microsoft.                </h3>
                <p className="p mt-5">
                Hello Trade is a business plan that will use Solana blockchain technology in order to create a decentralized ecosystem for businesses and consumers. The aim is to provide a better way for businesses to interact with their customers, as well as to allow consumers to make more informed choices about the products and services they purchase.                </p>
                <p className="p">
                The Hello Trade ecosystem will be powered by its own cryptocurrency, called the Hello Trade (CLO), which will be used to reward businesses for participating in the ecosystem and to pay for goods and services within the ecosystem.
                </p>
                <a
                  className="d-flex justify-content-center align-items-center cr-btn"
                  href=""
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////// 
      <div className="container mt-5">
        <div className="text-center mt-5">
          <span className="cr-section-title">Live Price</span>
          <h2 className="head">Crypto Live Market Price</h2>
          <p className="p">
            When someone creates a template and asks for feedback on it, they
            don't want <br /> the people reviewing it to get distracted.
          </p>
        </div>
        <div className="col-md-12 mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic4} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h3 className="c" style={{ marginLeft: "15%" }}>
                        Ethereum
                      </h3>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic6} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h3 className="c" style={{ marginLeft: "15%" }}>
                        Bitcoin
                      </h3>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic5} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h3 className="c" style={{ marginLeft: "15%" }}>
                        Binance_Coin
                      </h3>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic8} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h4 className="c" style={{ marginLeft: "10%" }}>
                        USD_Coin
                      </h4>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic9} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h3 className="c" style={{ marginLeft: "15%" }}>
                        Cardano
                      </h3>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="cr-live-market-innerbox-item position-relative cr-headline pera-content">
                <div className="thx-inner-item c">
                  <div className="thx-inner-icon-ttitle d-flex align-items-center">
                    <div className="thx-inner-icon d-flex align-items-center justify-content-center">
                      <img src={ic10} alt="" />
                    </div>
                    <div className="thx-inner-title">
                      <h3 className="c" style={{ marginLeft: "15%" }}>
                        Tether
                      </h3>
                    </div>
                  </div>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <select>
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                          </select>
                        </td>
                        <td className="c">Change 1h</td>
                        <td className="c">Change 24h</td>
                        <td className="c">Last 7d</td>
                      </tr>
                      <tr>
                        <th className="c" scope="row">
                          3,074.0
                        </th>
                        <td className="c">0.56</td>
                        <td className="c">4.59</td>
                        <td className="c">6.59</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
      {/* ///////////////////////////////////////////////////////////////////// */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="cr mt-5 ">
              We’ve Built A Platform
              <br /> To Buy &amp; Sell Hello Trade
            </h1>
            <h6 className="c2 mt-5">
            The Hello Trade team has created a very user-friendly platform that will allow anyone to buy or sell digital products and services with just a few clicks. The platform will also include a built-in payment system that will make it very easy to conduct transactions.              
            </h6>
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-2  mb-3">
                  <img src={ic12} />
                </div>
                <div className="col-md-8 ">
                  <h4 className="c">Solana Factor</h4>
                  <p className="c2">
                  The Hello Trade project has a lot of potential and could become a very successful business model. I believe that the team behind the project has what it takes to make this project a success.                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-2 mb-3 ">
                  <img src={ic11} />
                </div>
                <div className="col-md-8 ">
                  <h4 className="c">Referral Program</h4>
                  <p className="c2">
                  The company has already raised $1 million in seed funding, and it plans to use the funds in order to develop the platform further, as well as to expand its team.                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="floating img2" src={wc1} />
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////// */}
      <section
        className="shadoo mt-5"
        style={{ backgroundImage: off }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="row">
                <h1 className="cr" style={{ marginTop: "18%" }}>
                Token Distribution Program
                </h1>
                <p className="c2 mb-5">
                Hello Trade is a crypto based business plan using Solana blockchain. The company has developed a unique system that will allow businesses to use crypto currencies to pay for goods and services. The company plans to launch its own cryptocurrency, called the Hello Tradecoin, which will be used to pay for goods and services on the Hello Trade platform. The company is planning to launch an Initial Coin Offering (ICO) to raise funds for the development of the platform.
                </p>
              </div>
              <a
                className="d-flex justify-content-center align-items-center cr-btn mb-5"
                href=""
              >
                Explore More
              </a>
            </div>
            <div className="col-md-6 mt-5">
              <div className="row">
                <img src={offer1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////// */}
      <div className="container-fluid">
        <center>
          <h4 className="cr-section-title mt-5">RoadMap</h4>
        </center>
        <center>
          <h2 className="head">The Timeline of Hello Trade</h2>
        </center>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Blockchain</h2>
              <div className="timeline-content-info">
                <span className="c">24.07.2021</span>
              </div>
              <p>
                Introduce in our mind after undefined growth of BTC and other alt coins. We started research on Blockchain and its transaction.
                The Hello Trade ICO will be open to accredited investors from all over the world. The company is planning to raise $50 million through the ICO. The funds raised through the ICO will be used to develop the platform, marketing, and other expenses.
              </p>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>{" "}
            {/* cd-timeline-img */}
            <div className="cd-timeline-content">
              <h2>Token Bridge</h2>
              <span className="c">03.02.2022</span>
              <p>
                We find the way to start with the token and started working for the same. As it was new to our team we started to find best blockchain
              </p>
              <span className="cd-date calr">Feb 22</span>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>{" "}
            {/* cd-timeline-img */}
            <div className="cd-timeline-content">
              <h2>Solana Factor</h2>
              <span className="c">17.03.2022</span>
              <p>
                We found solana and we started working with Solana. Solana is fastest and cheapest blockchain over the earth.
              </p>
              <span className="cd-date cal">March 22</span>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>{" "}
            {/* cd-timeline-img */}
            <div className="cd-timeline-content">
              <h2>Compasation plan</h2>
              <span className="c">24.04.2022</span>
              <p>
                Started working in creation of easy and best Compasation plan that will benifit to the users
              </p>
              <span className="cd-date calr">April 22</span>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>
            <div className="cd-timeline-content">
              <h2>Marketing and Launching</h2>
              <span className="c">28.05.2022</span>
              <p>
                Started working on Marketing and launching activities. We opted 4P formula for Marketing.
              </p>
              <span className="cd-date cal">May 22</span>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          {/* cd-timeline-block */}
          {/* cd-timeline */}
        </section>

      </div>

      {/*
      <div className="container " style={{ marginTop: "15%" }}>
        <center>
          <h1 className="head">Our Motivated Team</h1>
        </center>
        <center>
          <p className="fonts1">
            The main reason for using lorem ipsum text is that it keeps people
            from focusing <br />
            on the actual text
          </p>
        </center>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card" id="card_color" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={tm1}
                    id="card_img1"
                    className="card-img mt-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title team-name">Jane Cooper</h5>
                    <p className="card-text">Investor in firm</p>
                    <p className="card-text c">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3" id="card_color" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={tm1}
                    id="card_img1"
                    className="card-img mt-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title team-name">Jenny Wilson</h5>
                    <p className="card-text">Investor in firm</p>
                    <p className="card-text c">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3" id="card_color" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={tm1}
                    id="card_img1"
                    className="card-img mt-3"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title team-name">Eleanor Pena</h5>
                    <p className="card-text">Investor in firm</p>
                    <p className="card-text c">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <center>
              <a
                className="d-flex justify-content-center align-items-center cr-btn "
                href=""
              >
                Explore More
              </a>
            </center>
          </div>
        </div>
      </div>
      */}
      {/* //////////////////////////////////////////////////////////////////////////// */}
      <div className="container" style={{ marginTop: "14%" }}>
        <div className="card red py-2 " id="card_color">
          <div className="card-body text-white ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mt-5">
                  <h2 id="abc">Find Us on Below Platform</h2>
                  <p className="card-text abcc1 mt-3">
                  Hello Trade is available on below platform. Download now
                  </p>
                  <div className="col-md-6">
                    <a href="">
                      <img src={app} />
                    </a>
                  </div>
                  <div className="col-md-6 mt-1">
                    <a href="">
                      <img src={gg} />
                    </a>
                  </div>

                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ??////////////////////////////////////////////////////////////////////////// */}
      <footer className="page-footer font-small blue mt-5">
        <div className="container logo-container">
          
        </div>

        
        <div className="footer-copyright text-center py-3 c">
          © 2022 Copyright:
          <a className="c" href="#">
            {" "}
            http://Hello Trade.io/          </a>
        </div>
      </footer>
    </div>

    

  
  </>
  


  );
        }
};





export default Home;

