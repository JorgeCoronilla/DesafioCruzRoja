import React, {useState} from 'react'


export const Timeline = () => {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
    
    // Values should be only date
    const VALUES = ["2021-01-01", "2021-01-15"];
    
    // Description array corresponding to values
    const description = [
      "The event of 1 Jan 2021 : Happy New Year",
      "The event of 15 Jan 2021 : Festival"
    ];
    
    return (
        <section className="ps-timeline-sec">
        <div className = "container">
            <ol className="ps-timeline">
                <li>
                    <div className="ps-top">
                        <p>Tus datos de acesso</p>
                    </div>
                    <span className="ps-sp-top01">1</span>
                </li>
                <li>
                    <div className="ps-top">
                        <p>Tu perfil</p>
                    </div>
                    <span className="ps-sp-top02">2</span>
                </li>
                <li>
                    <div className="ps-top">
                        <p>Tus preferencias</p>
                    </div>
                    <span className="ps-sp-top03">3</span>
                </li>
            </ol>
        </div>
    </section>
    )
}

