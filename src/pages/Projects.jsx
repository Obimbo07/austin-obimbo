import React from 'react'


const Projects = () => {
    const projects = [
        {
          index: 0,
          name: 'Book Destination',
          description: 'This Full stack application helps users reserve holiday, meeting and BNB destinations, in various places. Users have can perform CRUD operations on the destinations.',
          technologies: ['Ruby on Rails', 'React/Redux'],
          image: 'img/Olay .png',
          liveLink: 'https://www.olaycompany.com',
          sourceLink: 'Not Sourced on Github',
        },
        {
          index: 1,
          name: 'Budget App',
          description: 'A more generic versioned Budget App, that includes transaction management features. A User authentication system using JWT authentication.',
          image: 'img/budget-app.jpg',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          liveLink: 'https://example.com/project2',
          sourceLink: 'https://github.com/user/project2',
        },
        {
          index: 2,
          name: 'Recipe Daily',
          description: 'is a User authenticated application that allows them perform CRUD operations on recipe meals. The add food feature enables users to create unique recipes and decide which ones to display publicly to all users.',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          image: 'img/recipe.jpg',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 3,
          name: 'Catalogue of My Things',
          description: 'Collaborated on this console app that helps users manage their category of things. The menu is user-friendly and interactive with a list of options. A record of different types of things you own: books, music albums, movies, and games. The data will be stored in JSON files but will also prepare a database with tables structure analogical to the program\'s class structure.',
          technologies: ['Ruby', 'Console Interface'],
          image: 'img/cot.jpg',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 4,
          name: 'Space X Travellers Hub',
          description: 'I collaborated remotely with team members in this frontend application to utilize API calls to render a list of Space X dragons and space shuttles. Using redux to handle state, I was able to save bookings of the dragons.',
          technologies: ['React', 'Bootstrap', 'Redux'],
          image: 'img/spacex.png',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 5,
          name: 'Multi Post Stories',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          image: 'img/projects.png',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 6,
          name: 'Multi Post Stories',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          image: 'img/projects.png',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 7,
          name: 'Multi Post Stories',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          image: 'img/projects.png',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        {
          index: 8,
          name: 'Multi Post Stories',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
          technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
          image: 'img/projects.png',
          liveLink: 'https://example.com/project1',
          sourceLink: 'https://github.com/user/project1',
        },
        // Add more project objects as needed
    ];

    return (    
       <div className='flex flex-wrap justify-center'>
          <h2>Below are projects to challenges i have solved</h2>
          <div className='flex bg-blue flex-wrap justify-space-evenly'>
              {projects.map((project) => {
                <div className='rounded-lg border-grey-500 bg-black' key={project.index}>
                  
                </div>
              })}
          </div>
       </div> 
    )
}

export default Projects;