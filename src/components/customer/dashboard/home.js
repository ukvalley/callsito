import React, { useState } from'react';
import {  useNavigate,Link  } from "react-router-dom";



import useCollapse from'react-collapsed'



import style from'./home.module.css'











import Loader2 from'../../customer/layout/loader2';



import { Connection, PublicKey  } from'@solana/web3.js';
import {
   BN,
   Program, Provider, web3
 } from'@project-serum/anchor';
 import idl from'../../../idl.json';


 import { getPhantomWallet, getMathWallet, getSolletWallet, getSolflareWallet,getCoin98Wallet } from'@solana/wallet-adapter-wallets';
 import { useWallet } from'@solana/wallet-adapter-react';



 require('@solana/wallet-adapter-react-ui/styles.css');


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
          <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Bigtech - ICO &amp; Crypto Landing Page Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="https://smthemebazar.com/html/bigtech/assets/img/favicon.png" />
        {/* Place favicon.ico in the root directory */}
        {/* CSS here */}
        
        
        {/* header-area */}
        <header id="header">
          <div id="header-fixed-height" />
          <div id="sticky-header" className={`${style['menu-area']} ${style['sticky-menu']}`}>
            <div className={`${style['container']} ${style['custom-container']}`}>
              <div className={`${style['row']}`}>
                <div className={`${style['col-12']}`}>
                  <div className={`${style['mobile-nav-toggler']}`}><i className="fas fa-bars" /></div>
                  <div className={`${style['menu-wrap']}`}>
                    <nav className={`${style['menu-nav']}`}>
                      <div className={`${style['logo']}`}>
                        <a href="index.html"><img src="https://smthemebazar.com/html/bigtech/assets/img/logo/logo.png" alt="" /></a>
                      </div>
                      <div className={`${style['navbar-wrap']} ${style['main-menu']} ${style['d-none']} ${style['d-lg-flex']}`}>
                        <ul className={`${style['navigation']}`}>
                          <li className={`${style['active']} ${style['menu-item-has-children']} `}><a href="#header" className="section-link">Home</a>
                            <ul className={`${style['sub-menu']}`}>
                              <li className={`${style['active']}`}><a href="index.html">Home One</a></li>
                              <li><a href="index-2.html">Home Two</a></li>
                            </ul>
                          </li>
                          <li><a href="#about" className={`${style['section-link']}`}>About us</a></li>
                          <li><a href="#sales" className={`${style['section-link']}`}>Sales</a></li>
                          <li><a href="#roadmap" className={`${style['section-link']}`}>Roadmap</a></li>
                          <li className={`${style['menu-item-has-children']}`}><a href="blog.html">Blog</a>
                            <ul className={`${style['sub-menu']}`}>
                              <li><a href="blog.html">Our Blog</a></li>
                              <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                          </li>
                          <li><a href="#contact" className={`${style['section-link']}`}>Contact us</a></li>
                        </ul>
                      </div>
                      <div className={`${style['header-action']} ${style['d-none']} ${style['d-md-block']}`}>
                        <ul>
                          <li className={`${style['header-lang']}`}><span className={`${style['selected-lang']}`}>ENG</span>
                            <ul className={`${style['lang-list']}`}>
                              <li><a href="#">IND</a></li>
                              <li><a href="#">BNG</a></li>
                              <li><a href="#">TUR</a></li>
                              <li><a href="#">CIN</a></li>
                            </ul>
                          </li>
                          <li className={`${style['header-btn']}`}><a href="#" className={`${style['btn']}`}>Buy Now</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu  */}
                  <div className={`${style['mobile-menu']}`}>
                    <nav className={`${style['menu-box']}`}>
                      <div className={`${style['close-btn']}`}><i className="fas fa-times" /></div>
                      <div className={`${style['nav-logo']}`}><a href="index.html"><img src="https://smthemebazar.com/html/bigtech/assets/img/logo/logo.png" alt="" title /></a>
                      </div>
                      <div className={`${style['menu-outer']}`}>
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                      </div>
                      <div className={`${style['social-links']}`}>
                        <ul className={`${style['clearfix']}`}>
                          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#"><i className="fab fa-instagram" /></a></li>
                          <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                          <li><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className={`${style['menu-backdrop']}`} />
                  {/* End Mobile Menu */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-area-end */}
        {/* main-area */}
        <main className="fix">
          {/* banner-area */}
          <section className={`${style['banner-area']} ${style['banner-bg']}`}>
            <div className={`${style['banner-shape-wrap']}`}>
              <img src="https://smthemebazar.com/html/bigtech/assets/img/banner/banner_shape01.png" alt="" className={`${style['img-one']}`} />
              <img src="https://smthemebazar.com/html/bigtech/assets/img/banner/banner_shape02.png" alt="" className={`${style['img-two']}`} />
              <img src="https://smthemebazar.com/html/bigtech/assets/img/banner/banner_shape03.png" alt="" className={`${style['img-two']}`} />
            </div>
            <div className={`${style['container']}`}>
              <div className='row justify-content-center'>
                <div className={`${style['col-lg-10']}`}>
                  <div className={`${style['banner-content']} text-center `} >
                    <img src="https://smthemebazar.com/html/bigtech/assets/img/icon/fire.png" alt="" />
                    <h2 className={`${style['title']}`}>Join Future of Algorithmic <span>Crypto</span> Trading Strategies</h2>
                  </div>
                  <div className={`${style['banner-progress-wrap']}`}>
                    <ul>
                      <li>Pre Sell</li>
                      <li>Soft Cap</li>
                      <li>Bonus</li>
                    </ul>
                    <div className={`${style['progress']}`}>
                      <div className={`${style['progress-bar']}`} role="progressbar" style={{width:'75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h4 className={`${style['title']}`}>65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span></h4>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className="col-xl-10">
                  <div className={`${style['banner-countdown-wrap']} ${style['text-center']}`}>
                    <h2 className={`${style['title']} text-center`}>ICO Will Start In..</h2>
                    <div className={`${style['coming-time']}`} data-countdown="2023/1/29" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* banner-area-end */}
          {/* about-area */}
          <section id="about" className={`${style['about-area']} ${style['pt-130']} ${style['pb-130']}`}>
            <div className="container">
              <div className={`${style['row']} ${style['align-items-center']}`}>
                <div className={`${style['col-lg-6']}`}>
                  <div className={`${style['about-img']} ${style['wow']} ${style['fadeInLeft']}`} data-wow-delay=".2s">
                    <img src="https://smthemebazar.com/html/bigtech/assets/img/images/about_img01.png" alt="" />
                    <img src="https://smthemebazar.com/html/bigtech/assets/img/images/about_img02.png" alt="" className={`${style['img-two']}`} />
                  </div>
                </div>
                <div className={`${style['col-lg-6']}`}>
                  <div className={`${style['about-content']} ${style['wow']} ${style['fadeInRight']}`} data-wow-delay=".2s">
                    <div className={`${style['section-title']} ${style['mb-30']}`}>
                      <span className={`${style['sub-title']}`}>Who we are</span>
                      <h2 className={`${style['title']}`}>The World’s <span>1st ICO</span> Platform That Offers Rewards</h2>
                    </div>
                    <p>The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell
                      their tokens</p>
                    <a href="#" className={`${style['btn']}`}>Purchase Tokens</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* partner-area */}
          <div className={`${style['partner-area']} ${style['pb-130']}`}>
            <div className={`${style['container']}`}>
              <div className={`${style['row']} ${style['justify-content-center']}`}>
                <div className={`${style['col-lg-8']}`}>
                  <div className={`${style['section-title']} ${style['text-center']} ${style['mb-10']}`}>
                    <span className={`${style['sub-title']}`}>Our top partner</span>
                  </div>
                </div>
              </div>
              <div className={`${style['row']}`}>
                <div className={`${style['col-lg-12']}`}>
                  <div className={`${style['partner-wrap']}`}>
                    <ul>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img01.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img02.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img03.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img04.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img05.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img06.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img07.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img08.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img09.png" alt="" /></li>
                      <li><img src="https://smthemebazar.com/html/bigtech/assets/img/partner/partner_img10.png" alt="" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* partner-area-end */}
          {/* choose-area */}
          <section className={`${style['choose-area']} ${style['pb-130']}`}>
            <div className={`${style['container']}`}>
              <div className={`${style['row']} ${style['justify-content-center']}`}>
                <div className={`${style['col-xl-6']}`}>
                  <div className={`${style['section-title']} ${style['text-center']} ${style['mb-50']}`}>
                    <span className={`${style['sub-title']}`}>why Choose us</span>
                    <h2 className={`${style['title']}`}>Why choose our bigtech <span>Token</span></h2>
                  </div>
                </div>
              </div>
              <div className={`${style['row']} ${style['choose-active']}`}>
               
                <div className={`${style['col-lg-3']}`}>
                  <div className={`${style['choose-item']}`}>
                    <div className={`${style['choose-icon']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/icon/choose_icon01.svg" alt="" />
                    </div>
                    <div className={`${style['choose-content']}`}>
                      <h2 className={`${style['title']}`}><a href="#">Mobile payment make easy</a></h2>
                      <p>Add new, trending and rare artwork to your collection.</p>
                    </div>
                  </div>
                </div>

                <div className={`${style['col-lg-3']}`}>
                  <div className={`${style['choose-item']}`}>
                    <div className={`${style['choose-icon']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/icon/choose_icon01.svg" alt="" />
                    </div>
                    <div className={`${style['choose-content']}`}>
                      <h2 className={`${style['title']}`}><a href="#">Mobile payment make easy</a></h2>
                      <p>Add new, trending and rare artwork to your collection.</p>
                    </div>
                  </div>
                </div>

                <div className={`${style['col-lg-3']}`}>
                  <div className={`${style['choose-item']}`}>
                    <div className={`${style['choose-icon']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/icon/choose_icon01.svg" alt="" />
                    </div>
                    <div className={`${style['choose-content']}`}>
                      <h2 className={`${style['title']}`}><a href="#">Mobile payment make easy</a></h2>
                      <p>Add new, trending and rare artwork to your collection.</p>
                    </div>
                  </div>
                </div>


                <div className={`${style['col-lg-3']}`}>
                  <div className={`${style['choose-item']}`}>
                    <div className={`${style['choose-icon']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/icon/choose_icon01.svg" alt="" />
                    </div>
                    <div className={`${style['choose-content']}`}>
                      <h2 className={`${style['title']}`}><a href="#">Mobile payment make easy</a></h2>
                      <p>Add new, trending and rare artwork to your collection.</p>
                    </div>
                  </div>
                </div>



                
              </div>
              <div className={`${style['slide-progress']}`} role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                <span className={`${style['slider__label']} ${style['sr-only']}`} />
              </div>
            </div>
          </section>
          {/* choose-area-end */}
          {/* chart-area */}
          <section id="sales" className={`${style['chart-area']} ${style['chart-bg']} ${style['jarallax']}`}>
            <div className={`${style['container']}`}>
              <div className={`${style['chart-inner']}`}>
                <div className={`${style['row']} ${style['align-items-center']} ${style['justify-content-center']}`}>
                  <div className={`${style['col-lg-6']} ${style['col-md-10']} ${style['order-0']} ${style['order-lg-2']}`}>
                    <div className={`${style['chart-wrap']} ${style['wow']} ${style['fadeInRight']}`} data-wow-delay=".2s">
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/images/chart.png" alt="" />
                      <ul>
                        <li>Contingency: 70%</li>
                        <li>Business Development: 10%</li>
                        <li>Investor: 30%</li>
                        <li>Poland</li>
                        <li>Legal &amp; Regulation:10%</li>
                        <li>Czech Republic</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${style['col-lg-6']} ${style['col-md-10']}`}>
                    <div className={`${style['chart-content']} ${style['wow']} ${style['fadeInLeft']}`} data-wow-delay=".2s">
                      <ul className={`${style['nav']} ${style['nav-tabs']}`} id="myTab" role="tablist">
                        <li className={`${style['nav-item']}`} role="presentation">
                          <button className={`${style['nav-link']} ${style['active']}`} id="funding-tab" data-bs-toggle="tab" data-bs-target="#funding" type="button" role="tab" aria-controls="funding" aria-selected="true">Funding Allocation</button>
                        </li>
                        <li className={`${style['nav-item']}`} role="presentation">
                          <button className={`${style['nav-link']}`} id="token-tab" data-bs-toggle="tab" data-bs-target="#token" type="button" role="tab" aria-controls="token" aria-selected="false">Token Allocation</button>
                        </li>
                      </ul>
                      <div className={`${style['tab-content']}`} id="myTabContent">
                        <div className={`${style['tab-pane']} ${style['fade']} ${style['show']} ${style['active']}`} id="funding" role="tabpanel" aria-labelledby="funding-tab">
                          <div className={`${style['chart-content-inner']}`}>
                            <h2 className={`${style['title']}`}>1 CNL = 0.0863 BTC</h2>
                            <p>The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
                            <a href="#" className={`${style['btn']}`}>Buy Now</a>
                          </div>
                        </div>
                        <div className={` ${style['tab-pane']} ${style['fade']} `} id="token" role="tabpanel" aria-labelledby="token-tab">
                          <div className={` ${style['chart-content-inner']} `}>
                            <h2 className= {` ${style['title']}  `}>2 CNL = 0.0967 BTC</h2>
                            <p>The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
                            <a href="#" className= {`${style['btn']}`}>Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* chart-area-end */}
          {/* area-bg */}
          <div className="area-bg">
            {/* roadMap-area */}
            <section id="roadmap" className= {` ${style['roadmap-area']} ${style['pt-130']}  ${style['pb-130']}`} >

              <div className= {`${style['container custom-container-two']}`}>

                <div className=  {` ${style['row']} ${style['justify-content-center']}`}>
                  <div className= {`${style['col-xl-5']} ${style['col-lg-8']}`}>
                    <div className= {`${style['section-title']} ${style['text-center']} ${style['mb-60']}`}>
                      <span className= {`${style['sub-title']}`}>OUr Roadmap</span>
                      <h2 className= {`${style['title']}`}>Bigtech Strategy and <br /> Project <span>Plan</span></h2>
                    </div>
                  </div>
                </div>
                <div className={`${style['row']}`}>
                  <div className= {`${style['col-lg-12']}`}>
                    <div className= {`${style['bt-roadmap_x']}`}>
                      <div className= {`${style['bt-roadmap-wrap']}`}>
                        <div className=  {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`} />
                            <h4 className= {`${style['title']}`}>Concept</h4>
                            <span>EVM support for parthians</span>
                            <span>SubQuery Academy</span>
                            <span>Proof of indexing</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`} />
                            <h4 className= {`${style['title']}`} >Research</h4>
                            <span>SubQuery Builders/Grants Program</span>
                            <span>SQT Network contract internal MVP</span>
                            <span>Coordinator and client SDK</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className=  {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`} />
                            <h4 className= {`${style['title']}`} >App beta test</h4>
                            <span>Public testnet launch</span>
                            <span>SubQuery Network Explorer and dApp</span>
                            <span>Point-in-time indexing</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className=  {`${style['roadmap-content']}`}>
                            <span className=  {`${style['dot']}`}/>
                            <h4 className= {`${style['title']}`}>Token Test</h4>
                            <span>SQT token generation event</span>
                            <span>Public incentivize testnet launch</span>
                            <span>Data traffic insights and reporting</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`}/>
                            <h4 className= {`${style['title']}`}>Alpha test</h4>
                            <span>Launch of the SubQuery Foundation</span>
                            <span>Finalise research for other Layer-1 chains</span>
                            <span>Liquidity mining program</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`}/>
                            <h4 className= {`${style['title']}`}>Benefits</h4>
                            <span>Mainnet launch</span>
                            <span>Centralized exchange launch</span>
                            <span>Public incentivize testnet</span>
                          </div>
                        </div>
                        <div className= {`${style['bt-roadmap-item']}`}>
                          <span className= {`${style['roadmap-title']}`}>Mid of Q4 2021</span>
                          <div className= {`${style['roadmap-content']}`}>
                            <span className= {`${style['dot']}`} />
                            <h4 className= {`${style['title']}`}>Operational</h4>
                            <span>SubQuery launches its <br /> own parthian</span>
                            <span>SubQuery Foundation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* roadMap-area-end */}
            {/* document-area */}
            <section className= {`${style['document-area']} ${style['pt-60']}`}>
              <div className= {`${style['container']}`}>
                <div className= {` ${style['row']} ${style['justify-content-center']}`}>
                  <div className= {`${style['col-lg-7']} ${style['order-2']} ${style['order-lg-0']}`}>
                    <div className= {`${style['document-img']} ${style['text-center']} ${style['wow']} ${style['fadeInUp']}`} data-wow-delay=".2s">
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/images/document_img.png" alt="" />
                    </div>
                  </div>
                  <div className= {`${style['col-lg-5']} ${style['col-md-7']}`}>
                    <div className= {`${style['document-content']} ${style['mt-50']}  ${style['wow']} ${style['fadeInRight']}`} data-wow-delay=".2s">
                      <div className= {`${style['section-title']} ${style['mb-35']}`}>
                        <span className= {`${style['sub-title']}`}>Whitepaper</span>
                        <h2 className= {`${style['title']}`}>Read Bigtech <span>Documents</span></h2>
                      </div>
                      <ul className= {`${style['document-list']}`}>
                        <li>White Paper</li>
                        <li>Privaci &amp; Policy</li>
                        <li>Terms Of Coin Sale</li>
                        <li>One Pager</li>
                      </ul>
                      <a href="#" className= {`${style['btn']}`}>Download Doc</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* document-area-end */}
          </div>
          {/* area-bg-end */}
          {/* team-area */}
          <section className= {`${style['team-area']} ${style['pt-130']}`}>
            <div className= {`${style['container']}`}>
              <div className=  {` ${style['row']} ${style['justify-content-center']}`}>
                <div className=  {`${style['col-xl-6']}`}>
                  <div className= {`${style['section-title']} ${style['text-center']} ${style['mb-70']}`}>
                    <span className= {`${style['sub-title']}`}>OUr team</span>
                    <h2 className= {`${style['title']}`}>The Leadership <br /> <span>Team</span></h2>
                  </div>
                </div>
              </div>
              <div className=  {` ${style['row']} ${style['justify-content-center']}`}>
                <div className= {`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className= {`${style['team-item']}`}>
                    <div className= {`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img01.png" alt="" />
                    </div>
                    <div className= {`${style['team-content']}`}>
                      <h2 className= {`${style['title']}`}>Cameron Williamson</h2>
                      <span>Founder &amp; CO</span>
                      <ul className= {`${style['team-social']}`}>
                        <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className= {`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img02.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Eleanor Pena</h2>
                      <span>Head of Design</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img03.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Bessie Cooper</h2>
                      <span>Vp People</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img04.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Darlene Robertson</h2>
                      <span>Product Manager</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img05.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Jacob Jones</h2>
                      <span>Marketer</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img06.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Courtney Henry</h2>
                      <span>Founder</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img07.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Ronald Richards</h2>
                      <span>Account Manager</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style['col-xl-3']} ${style['col-md-4']} ${style['col-sm-6']}`}>
                  <div className={`${style['team-item']}`}>
                    <div className={`${style['team-thumb']}`}>
                      <img src="https://smthemebazar.com/html/bigtech/assets/img/team/team_img08.png" alt="" />
                    </div>
                    <div className={`${style['team-content']}`}>
                      <h2 className={`${style['title']}`}>Theresa Webb</h2>
                      <span>Founder &amp; CO</span>
                      <ul className={`${style['team-social']}`}>
                      <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`} /></a></li>
                        <li><a href="#"><i className= {`${style['fab fa-instagram']}`}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-area-end */}
          {/* contact-area */}
          <section id="contact" className= {`${style['contact-area']} ${style['pt-70']} ${style['pb-110']}`}>
            <div className= {`${style['container']}`}>
              <div className= {` ${style['row']} ${style['justify-content-center']}`}>
                <div className= {`${style['col-lg-8']}`}>
                  <div className= {`${style['section-title']} ${style['text-center']} ${style['mb-70']}`}>
                    <span className= {`${style['sub-title']}`}>Contact</span>
                    <h2 className={`${style['title']}`}><span>Contact</span> ICO Crypto</h2>
                  </div>
                </div>
              </div>
              <div className= {`${style['contact-info-wrap']}`}>
                <div className= {` ${style['row']} ${style['justify-content-center']}`}>
                  <div className= {`${style['col-lg-4']} ${style['col-sm-6']}`}>
                    <div className= {`${style['contact-info-item']}`}>
                      <div className= {`${style['icon']}`}>
                        <span className= {`${style['icon-background']}`}/>
                        <i className= {`${style['fas fa-envelope']}`} />
                      </div>
                      <div className= {`${style['content']}`}>
                        <p>company@gmail.com <br /> infoweb@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${style['col-lg-4']} ${style['col-sm-6']}`}>
                    <div className={`${style['contact-info-item']}`}>
                      <div className={`${style['icon']}`}>
                        <span className={`${style['icon-background']}`}/>
                        <i className={`${style['fas fa-phone']}`} />
                      </div>
                      <div className={`${style['content']}`}>
                        <p>+84 0977425031<br /> +998 765 775 34</p>
                      </div>
                    </div>
                  </div>
                  <div className={`${style['col-lg-4']} ${style['col-sm-6']}`}>
                    <div className={`${style['contact-info-item']}`}>
                      <div className={`${style['icon']}`}>
                        <span className={`${style['icon-background']}`}/>
                        <i className= {`${style['fas fa-map-marker-alt']}`} />
                      </div>
                      <div className={`${style['content']}`}>
                        <p>State/province/area: <br />Georgia 198</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className= {`${style['contact-form-wrap']}`}>
                <form action="#">
                  <div className= {`${style['row']}`}>
                    <div className= {`${style['col-md-6']}`}>
                      <div className= {`${style['form-grp']}`}>
                        <input type="text" placeholder="Enter your Name" required />
                      </div>
                    </div>
                    <div className={`${style['col-md-6']}`}>
                      <div className={`${style['form-grp']}`}>
                        <input type="email" placeholder="Enter you email" required />
                      </div>
                    </div>
                  </div>
                  <div className={`${style['form-grp']}`}>
                    <textarea name="massage" placeholder="Enter your massage" defaultValue={""} />
                  </div>
                  <div className= {`${style['submit-btn']} ${style['text-center']}`}>
                    <button type="submit" className= {`${style['btn']}`}>Send Massage</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* contact-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer-area */}
        <footer>
          <div className= {`${style['footer-area']}`}>
            <div className= {`${style['container']}`}>
              <div className= {`${style['footer-scroll-wrap']}`}>
                <button className= {`${style['scroll-to-target']}`} data-target="html"><i className="fas fa-arrow-up" /></button>
              </div>
              <div className= {`${style['footer-top']}`}>
                <div className= {`${style['row']}`}>
                  <div className= {`${style['col-xl-3']} ${style['col-lg-4']} ${style['col-md-6']}`}>
                    <div className= {`${style['footer-widget']} ${style['wow']} ${style['fadeInUp']}`} data-wow-delay=".2s">
                      <a href="index.html" className= {`${style['f-logo']}`}><img src="https://smthemebazar.com/html/bigtech/assets/img/logo/logo.png" alt="" /></a>
                      <div className= {`${style['footer-content']}`}>
                        <p>A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla</p>
                        <ul className= {`${style['footer-social']}`}>
                          <li><a href="#"><i className= {`${style['fab fa-youtube']}`}/></a></li>
                          <li><a href="#"><i className= {`${style['fab fa-twitter']}`}/></a></li>
                          <li><a href="#"><i className= {`${style['fab fa-facebook-f']}`}/></a></li>
                          <li><a href="#"><i className= {`${style['fab fa-skype']}`} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className= {`${style['col-xl-3']} ${style['col-lg-5']} ${style['col-sm-6']}`}>
                    <div className= {`${style['footer-widget']} ${style['wow']} ${style['fadeInUp']}`} data-wow-delay=".4s">
                      <h4 className= {`${style['fw-title']}`}>Useful Links</h4>
                      <div className= {`${style['footer-link']}`}>
                        <ul>
                          <li><a href="#">Contact us</a></li>
                          <li><a href="#">How it Works</a></li>
                          <li><a href="#">Create</a></li>
                          <li><a href="#">Explore</a></li>
                          <li><a href="#">Terms &amp; Services</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=  {`${style['col-xl-2']} ${style['col-lg-3']} ${style['col-sm-6']}`}>
                    <div className= {`${style['footer-widget']} ${style['wow']}  ${style['fadeInUp']}`} data-wow-delay=".6s">
                      <h4 className= {`${style['fw-title']}`}>Community</h4>
                      <div className= {`${style['footer-link']}`}>
                        <ul>
                          <li><a href="#">Help Center</a></li>
                          <li><a href="#">Partners</a></li>
                          <li><a href="#">Suggestions</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Newsletters</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className= {`${style['col-xl-4']} ${style['col-lg-4']} ${style['col-md-6']}`}>
                    <div className={`${style['footer-widget']}  ${style['wow']} ${style['fadeInUp']}`} data-wow-delay=".8s">
                      <h4 className={`${style['fw-title']}`}>Subscribe Newsletter</h4>
                      <div className= {`${style['footer-newsletter']}`}>
                        <p>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</p>
                        <form action="#">
                          <input type="email" placeholder="Info@gmail.com" required />
                          <button type="submit"><i className= {`${style['fas fa-paper-plane']}`} /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className= {`${style['footer-bottom']}`}>
                <div className= {`${style['row align-items-center']}`}>
                  <div className= {`${style['col-lg-6']}`}>
                    <div className= {`${style['copyright-text']}`}>
                      <p>Copyright © 2023. All Rights Reserved Bigtech</p>
                    </div>
                  </div>
                  <div className={`${style['col-lg-6']} ${style['d-none']} ${style['d-sm-block']}`}>
                    <div className= {`${style['footer-menu']}`}>
                      <ul>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Login / Signup</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer-area-end */}
        {/* JS here */}
        {/* Mirrored from smthemebazar.com/html/bigtech/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 23 Feb 2023 11:09:29 GMT */}
      </div>

    

  
  </>
  


  );
        }
};





export default Home;

