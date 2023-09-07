import React, {useState} from 'react';

export default function Portfolio() {

    const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <main class="content">
      <h1>Portfolio </h1>
      <section id="work" class="content-block">
            <h2>Work</h2>
            <section class="row">
                <div class="card-column">
                    <div class="card code-card">
                        <div class="card-body" id="first-child" >
                            <a href="https://roberthall653.github.io/module1-challenge/" >
                            
                                <img src={require("../assets/stock_surf.jpg")} alt="" 
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                ></img>
                                
                                {isShown && <a href="https://github.com/Roberthall653">
                <img src={require("../assets/mark-github-512.png")} alt="" className='img-text-wrapper'/>     
                <h4 class="text-block">Project 1</h4></a>}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-column">
                    <div class="card code-card">
                        <div class="card-body" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <img src={require("../assets/stock_led.jpg")} alt="" />
                            {isShown && <a href="https://github.com/Roberthall653">
                <img src={require("../assets/mark-github-512.png")} alt="" className='img-text-wrapper'/>     
                <h4 class="text-block">Project 1</h4></a>}
                            <h4 class="text-block">Project 2</h4>
                        </div>
                    </div>
                </div>

                <div class="card-column">
                    <div class="card code-card">
                        <div class="card-body" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <img src={require("../assets/stock_calc.jpg")} alt="" />
                            <h4 class="text-block">Project 3</h4>
                        </div>
                    </div>
                </div>

                <div class="card-column">
                    <div class="card code-card">
                        <div class="card-body" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <img src={require("../assets/stock_puz.jpg")} alt="" />
                            <h4 class="text-block">Project 4</h4>
                        </div>
                    </div>
                </div>

                <div class="card-column">
                    <div class="card code-card">
                        <div class="card-body" 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <img src={require("../assets/stock_run.jpg")} alt="" />
                            <h4 class="text-block">Project 5</h4>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </main>
    </div>
  );
}
