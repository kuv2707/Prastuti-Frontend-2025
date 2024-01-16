import React from 'react'
import "./Sponsor.css"
export default function Spons() {
    return (
        <div className='SponsContainer' id="sponsors">
            <div className="title mt-[20px]">
                <h1>Our Sponsors</h1>
            </div>
            <div className="line">
                <div className="sponscard">
                    <a href="https://altair.com/" target="_blank" rel="noreferrer noopener">
                        <img src="https://allvectorlogo.com/img/2021/12/altair-logo-vector.png" className='skill' alt="" />
                    </a>
                   <h1 className='cardtitle'> Title Sponsor</h1>
                </div>
            <div className="sponscard">
                    <a href="https://www.ieee.org/" target="_blank" rel="noreferrer noopener">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" alt="" className='ieee' />
                    </a>
                    <h1 className='cardtitle'> Learning Partner</h1>
                </div>
            </div>
            <div className="line">
            <div className="sponscard">
                    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer noopener">
                        <img src="./sponsorimage/gfg.png" alt="" className='gfg' />
                    </a>
                    <h1 className='cardtitle'> Events Partner</h1>
                </div>
                
                <div className="sponscard">
                    <a href="https://algozenith.com/home" target="_blank" rel="noreferrer noopener">
                        <img src="https://media.licdn.com/dms/image/D4E03AQGsgpLqXZLLsw/profile-displayphoto-shrink_800_800/0/1666014093707?e=2147483647&v=beta&t=s1DgBkjwezx51RTFbwC-HU-E0uZb8g1IdNZc82MPvcA" alt="" className='tech' />
                    </a>
                    <h1 className='cardtitle'> Events Partner</h1>
                </div>
            </div>


        </div>
    )
}
