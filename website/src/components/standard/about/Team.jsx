import React from 'react';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function Team() {

    const social = (s) => {
        return (
            <>
                {s.twitter &&
                    <a className=" text-lime-400 hover:text-gray-200 transition duration-150 ease-in-out mx-2"
                       href={s.twitter}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"
                             className="inline"><title>logo twitter</title>
                            <g fill="#212121" className="nc-icon-wrapper">
                                <path className="fill-current text-lime-600"
                                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                            </g>
                        </svg>
                    </a>
                }
              {s.mastodon &&
                  <a className=" text-lime-400 hover:text-gray-200 transition duration-150 ease-in-out mx-2"
                     href={s.mastodon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 16 16"
                         className="inline fill-current text-lime-600"
                    >
                      <path
                          d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"/>
                    </svg>
                  </a>
              }
            </>
        )
    }
    const teamMember = ({name, title, socials, img}) => {
        return (
            <div key={img} className="w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up"
                 data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                    <img className="rounded-full mb-4" src={img} width="120" height="120" alt="Team member 01"/>
                    <h4 className="text-xl font-medium mb-1">{name}</h4>
                    <div className="text-gray-500 mb-1">{title}</div>

                    {socials &&
                    <div className="flex flex-row">
                      {social(socials)}
                    </div>
                    }
                </div>
            </div>
        )
    }

    const teamMemberRecord = (name, title, socials, img) => {
        return {name: name, title: title, socials: socials, img: img}
    }

    const teamMembers = [
        teamMemberRecord("Sam Hill", "Engineering Manager", [], "/about/sam.jpg"),
        teamMemberRecord("Peter Chislett", "Operations Partner", {twitter: "https://twitter.com/chislett"}, "/about/peter.jpg"),
        teamMemberRecord("Ben Whitley", "Multiplatform Developer", [], "/about/ben.jpg"),
        teamMemberRecord("Paul Hawke", "Engineering Manager", [], "/about/paul.jpg"),
        teamMemberRecord("Justin Mancinelli", "Dir. Product Strategy", {
            twitter: "https://twitter.com/piannaf",
            mastodon: "https://fosstodon.org/@piannaf"
        }, "/about/justin.jpg"),
        teamMemberRecord("Jeff Namnum", "Managing Partner", {twitter: "https://twitter.com/namnum"}, "/about/jeff.jpg"),
        teamMemberRecord("Beth Traiman", "Operations", [], "/about/beth.jpg"),
        teamMemberRecord("Kevin Galligan", "Technical Partner", {twitter: "https://twitter.com/kpgalligan"}, "/about/kevin.jpg"),
        teamMemberRecord("Hana Cenkova", "Project Manager", null, "/about/hana.jpg"),
        teamMemberRecord("Dusan Solarik", "Project Manager", null, "/about/dusan.jpg"),
        teamMemberRecord("Michael Friend", "Multiplatform Developer", null, "/about/michael.jpg"),
        teamMemberRecord("Russell Wolf", "Senior Multiplatform Developer", null, "/about/russell.jpg"),
        teamMemberRecord("Katie Galvin", "Project Manager", null, "/about/katie.jpg"),
        teamMemberRecord("Gustavo Fao Valvassori", "Multiplatform Developer", null, "/about/gustavo.jpg"),
        teamMemberRecord("Kevin Schildhorn", "Multiplatform Developer", null, "/about/kevins.jpg"),
        teamMemberRecord("Jigar Brahmbhatt", "Senior Multiplatform Developer", null, "/about/jigar.jpg"),
        teamMemberRecord("Júlia Jakubcová", "Multiplatform Developer", null, "/about/julia.jpeg"),
        teamMemberRecord("Tadeas Kriz", "Senior Multiplatform Developer", null, "/about/tadeas.jpeg"),
        teamMemberRecord("Filip Dolník", "Senior Multiplatform Developer", null, "/about/filip.jpeg"),
        teamMemberRecord("Corinne Clements", "Content Marketer", null, "/about/corinne.jpeg"),
    ]

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-12">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Our passionate team</h2>
                        <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum consequat.</p>
                    </div>

                    {/* Team members */}
                    <div className="flex flex-wrap justify-center -my-4 -mx-3" data-aos-id-team>

                        {shuffle(teamMembers).map(teamMember)}

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;
