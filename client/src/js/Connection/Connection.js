import React from "react";
import "./Connection.css";

// create onClick{} for search box


// create const results -> javascript function for search results




const Connection = () => {
    return (
        <div>
            <nav>
                <ul className="flexbox-container" role="navigation">
                    <li className="menu-item"><a href="#">Home</a></li>                
                    <li className="menu-item"><a href="#">My Profile</a></li>
                    <li className="menu-item"><a href="#">Messages</a></li>
                    <li className="menu-item"><a href="#">Notifications</a></li>
                    <li className="menu-item" id="log-out"><a href="#">Logout</a></li>
                </ul>
            </nav>
            <div className="main-area"> {/* begin search area */}
            <section className="search-area level">
                <div className="search level-item">
                    <p className="control">
                        <input type="text" className="level-item  search-input" placeholder="Search Founder Connect" />
                    </p>
                    <p className="control">
                        <button className="button level-item" id="search-button">Search</button>
                    </p>
                </div>                
            </section> {/* end search area */}

           
            <section id="filter-area">   {/* begin filter area */}
                <div className="columns">
                    <div className="column is-one-quarter">
                       <button className="button is-large">Technical</button>
                    </div>
                    <div className="column is-one-quarter">
                        <button className="button is-large">Advertising</button>
                    </div>
                    <div className="column is-one-quarter" >
                        <button className="button is-large">Project Manager</button>
                    </div>
                    <div className="column is-one-quarter" >
                        <button className="button is-large">Other</button>
                    </div>
                   
                </div>
            </section> {/* end filter area */}

            {/* begin render search results area */}
            <div id="results-area">
                {/* render list of search results */}
                <ul id="results-list">
                    {/* template for results */}
                    <li className="box" id="results-item">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64" id="avatar">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                            </div>
                        </article> 
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit 
                                amet massa fringilla egestas. Nullam condimentum luctus turpis. 
                                Tiger american bobtail. Balinese grimalkin puma tiger. Sphynx burmese. 
                                Lion devonshire rex tomcat. Tomcat himalayan for manx so bobcat burmese, 
                                siamese yet tabby. Tiger turkish angora.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/* end template */}

                    <li className="box" id="results-item">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64" id="avatar">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                            </div>
                        </article> 
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit 
                                amet massa fringilla egestas. Nullam condimentum luctus turpis. 
                                Tiger american bobtail. Balinese grimalkin puma tiger. Sphynx burmese. 
                                Lion devonshire rex tomcat. Tomcat himalayan for manx so bobcat burmese, 
                                siamese yet tabby. Tiger turkish angora.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="box" id="results-item">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64" id="avatar">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                            </div>
                        </article> 
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit 
                                amet massa fringilla egestas. Nullam condimentum luctus turpis. 
                                Tiger american bobtail. Balinese grimalkin puma tiger. Sphynx burmese. 
                                Lion devonshire rex tomcat. Tomcat himalayan for manx so bobcat burmese, 
                                siamese yet tabby. Tiger turkish angora.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="box" id="results-item">
                        <article class="media">
                            <div class="media-left">
                            <figure class="image is-64x64" id="avatar">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                            </div>
                        </article> 
                        <div class="media-content">
                            <div class="content">
                                <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit 
                                amet massa fringilla egestas. Nullam condimentum luctus turpis. 
                                Tiger american bobtail. Balinese grimalkin puma tiger. Sphynx burmese. 
                                Lion devonshire rex tomcat. Tomcat himalayan for manx so bobcat burmese, 
                                siamese yet tabby. Tiger turkish angora.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* end search results area */}

            </div>
           
        </div>


    );

}

export default Connection;