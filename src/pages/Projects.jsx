import React, { useState } from 'react'


export const projects = [
    {
    name: 'Cat and Dog Image Classifier',
    description: 'Created a convolutional neural network to correctly classifies Images of cats and dogs with 70% accuracy',
    technologies: ['Computer Vision', 'Embeddings', 'CNN', 'Image processing', 'TensorFlow', 'keras', 'Search and Retrieval'],
    image: 'free_code_camp_logo.jpeg',
    presentation: 'projects.png', 
    liveLink: 'https://github.com/Obimbo07/Cat-and-dog-CNN',
    sourceLink: 'https://github.com/Obimbo07/Cat-and-dog-CNN',
    },
    {
    name: 'KNN Book recommendation Engine',
    description: 'Using the K-Nearest Neighbors I  created a book recomentation algorithm I used the Book-Crossings dataset with 1.1 million ratings (scale of 1-10) of 270,000 books by 90,000 users. ',
    technologies: ['Computer Vision', 'Embeddings', 'MultiModal', 'NLP', 'RAG', 'Vector Databases', 'Search and Retrieval'],
    image: 'free_code_camp_logo.jpeg',
    presentation: 'projects.png', 
    liveLink: '',
    sourceLink: '',
    },
    {
    name: 'Health Cost Calculator',
    description: 'Using Regression algorithm, I created a model to predict expenses with a Mean Absolute Error of 2000.',
    technologies: ['Computer Vision', 'Embeddings', 'MultiModal', 'NLP', 'RAG', 'Vector Databases', 'Search and Retrieval'],
    image: 'free_code_camp_logo.jpeg',
    presentation: 'projects.png', 
    liveLink: 'https://github.com/Obimbo07/fcc_predict_health_costs_with_regression',
    sourceLink: 'https://github.com/Obimbo07/fcc_predict_health_costs_with_regression',
    },
    {
      name: 'Text SMS classifier',
      description: 'I was able to create a text classifier model("SPAM" and "HAM").The model was trained on a spam collection dataset. The models accuracy is 98.87%',
      technologies: ['Computer Vision', 'Embeddings', 'MultiModal', 'NLP', 'RAG', 'Vector Databases', 'Search and Retrieval'],
      image: 'free_code_camp_logo.jpeg',
      presentation: 'projects.png', 
      liveLink: 'https://github.com/Obimbo07/fcc_sms_text_classifier',
      sourceLink: 'https://github.com/Obimbo07/fcc_sms_text_classifier',
      },
    {
      name: 'Chat with Videos:',
      description: 'Build an interactive system for querying video content using multimodal AI',
      technologies: ['Computer Vision', 'Embeddings', 'MultiModal', 'NLP', 'RAG', 'Vector Databases', 'Search and Retrieval'],
      image: 'dlai-celebration-bg.webp',
      presentation: 'projects.png', 
      liveLink: '',
      sourceLink: '',
    },
    {
      name: 'LykeCommerce',
      description: 'Built a UK based e-commerce platform. I Developed the systems core functionality inclusive payment system Intergration. The platform has helped improve Lyke\'s mission of providing drugs worldwide. I continue to handle bugs and maintain the software\'s health, managing our cloud host.',
      technologies: ['Ecommerce', 'Python', 'GeoLocation', 'Payment System', 'Epayments', 'Project Managment', 'Search and Retrieval'],
      image: 'logo.svg',
      presentation: 'projects.png',
      liveLink: 'http://lykeonline.com',
      sourceLink: '',
    },
    {
      name: 'Face-it API',
      description: 'Build a scalable face recognition api. We use Facenet model for image detection and recognition. The model backend uses retinaface.',
      technologies: ['Computer Vision', 'Embeddings', 'Facenet512', 'NLP', 'RAG', 'Vector Databases', 'Search and Retrieval'],
      image: 'face-it_logo.png',
      presentation: 'projects.png',
      liveLink: 'http://139.162.90.90/docs',
      sourceLink: 'https://github.com/Obimbo07/face-it',
    },
    {
      name: 'Business Management system',
      description: 'A secure end to end BMS that helps business owners manage thier services and customers in a decentralized manner. The system is well equipped with and administrator dashboard that has worker management features. Handling transactions from paid services, workers commission and financial reports. The customer interface enables them intergrate with the owner services, book appointments and reserve seats. Advanced payments are also an option.',
      technologies: ['Ruby on Rails', 'Daraja API'],
      image: 'business-managment.jpeg',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/pos',
      sourceLink: 'https://github.com/Obimbo07/pos',
    },
    {
      name: 'Daraja test',
      description: 'An implementation of Mpesa daraja Express checkout API. This implementation demonstrates how best to intergrate the mpesa models and payment logic using ruby on rails. I have handled mpesa stk intergration with both online and offline functionality.',
      technologies: ['Ruby on Rails', 'Daraja API'],
      image: 'daraja_mpesa.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/daraja-test',
      sourceLink: 'https://github.com/Obimbo07/daraja-test',
    },
    {
      name: 'Book Destination',
      description: 'This Full stack application helps users reserve holidays, meetings and BNB destinations, in various places. Users have can perform CRUD operations on the destinations, and schedule reservations. The application handles user authentication from backend using jwt. This is used to handle sessions in the front-end. User accounts are connected to their ',
      technologies: ['Ruby on Rails', 'React/Redux', 'Devise'],
      image: 'book_destination_logo.jpeg',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/book-destinations-api',
      sourceLink: 'https://github.com/Obimbo07/book-destinations-api',
    },
    {
      name: 'Budget App',
      description: 'A more generic versioned Budget App, that includes transaction management features. A User authentication system using JWT.We have categorised budgets and users add transactions to be conducted on each created budget. The application enabled users manage thier transactions budgetwise. This has helped them reduce on unplanned transactions. The budgets feature improved users daily planning needs and also improved their overall financial health.',
      image: 'budget-app.jpg',
      presentation: 'projects.png',
      technologies: ['erb', 'Bootstrap', 'Ruby on rails', 'Devise'],
      liveLink: 'https://budget-app-m9id.onrender.com/',
      sourceLink: 'https://github.com/Obimbo07/budget-app',
    },
    {
      name: 'Recipe Daily',
      description: 'Recipedaily is a web application designed to help users manage their recipes effortlessly. With features like a dynamic recipe list, public recipes showcase, food management, and a convenient general shopping list, it offers a seamless cooking experience. Users authenticate using email and password. Adding foods and creating shopping lists features enable the creation of recipes convinient.',
      technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
      image: 'recipe.jpg',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/Recipedaily',
      sourceLink: 'https://github.com/Obimbo07/Recipedaily',
    },
    {
      name: 'Catalogue of My Things',
      description: 'Collaborated on this console app that helps users manage their category of things. A user-friendly and interactive menu, with a record of different types of things you own: books, music albums, movies, and games.Data is stored in JSON files but will also prepare a database with tables structure analogical to the program\'s class structure.',
      technologies: ['Ruby', 'Console Interface'],
      image: 'cot.jpg',
      presentation: 'projects.png',
      liveLink: 'https://drive.google.com/file/d/1ABEhMnYWMxh2e3631bI7XedAYCIsHYwf/view',
      sourceLink: 'https://github.com/Obimbo07/Catalog-of-my-things',
    },
    {
      name: 'Space X Travellers Hub',
      description: 'I collaborated remotely with team members in this frontend application to utilize API calls to render a list of Space X dragons and space shuttles. Using redux to handle state, I was able to save bookings of the dragons.',
      technologies: ['React', 'Bootstrap', 'Redux'],
      image: 'spacex.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/spacex-travellers-hub',
      sourceLink: 'https://github.com/Obimbo07/spacex-travellers-hub',
    },
    {
      name: 'Book Library',
      description: 'A front-end book store system. Using an external api to store and retrieve store infomation. The projects focused on delivering a quality attention to detail design.',
      technologies: ['React', 'Bootstrap', 'Redux'],
      image: 'book-store.jpg',
      presentation: 'projects.png',
      liveLink: 'https://book-library-866i.onrender.com/',
      sourceLink: 'https://github.com/Obimbo07/book-library',
    },
    {
      name: 'Tdn',
      description: 'The devise authenticated blog app allows users connect and view posted blogs. Uses can upvote, dislike and comment fellow users blogs. When posting a blog a user can set priviledges to other users and disable upvotes and downvotes. The blog app is soon to have video call intergrations and user chat features.',
      technologies: ['Bootstrap', 'Ruby on rails'],
      image: 'projects.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/tdn',
      sourceLink: 'https://github.com/Obimbo07/tdn',
    },
    {
      name: 'School library system',
      description: 'This project built on Object oriented ruby, is used to manage a school library system. Users are allowed to create persons(student & teachers), Create and manage rental books and save all the data in json files.',
      technologies: ['Ruby', 'Console-tool'],
      image: 'projects.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/school-library',
      sourceLink: 'https://github.com/Obimbo07/school-library',
    },
    {
      name: 'Vet Clinic Database',
      description: 'Designed a clinical database to help manage patient records and clinical inventory',
      technologies: ['Ruby'],
      image: 'projects.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/vet-clinic',
      sourceLink: 'https://github.com/Obimbo07/vet-clinic',
    },
    {
      name: 'Vet Clinic Database',
      description: 'Designed a clinical database to help manage patient records and clinical inventory',
      technologies: ['Ruby'],
      image: 'projects.png',
      presentation: 'projects.png',
      liveLink: 'https://github.com/Obimbo07/vet-clinic',
      sourceLink: 'https://github.com/Obimbo07/vet-clinic',
    },
];

export const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    return (
      <div className="h-auto md:w-1/4 mb-2 flex md:flex-col shadow-xl rounded-3xl border-solid overflow-hidden">
        
         <img className="w-1/2 md:w-full h-auto grow object-contain" src={project.image} alt={project.name} />
        
        <div className="w-1/2 md:w-full px-4 py-2 grow bg-gray-100">
          <h3 className="text-lg font-bold text-gray-900 hover:text-blue-800">{project.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{project.description.slice(0, 100)}...</p>
          <button
            className="px-3 py-1 rounded-3xl text-white bg-blue-600 hover:bg-gray-500 focus:outline-none"
            onClick={handleOpenModal}
          >
            View Details
          </button>
        </div>
        {showModal && (
          <Modal project={project} onClose={handleCloseModal} />
        )}
      </div>
    );
  };
  
  export const Modal = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 bg-gray-500/50 flex justify-center items-center">
        <div className="w-full max-w-lg rounded-lg bg-white p-2 shadow-md">
          <img className="w-2/3 h-48 grow object-fill"  src={project.image} alt={project.name} />
          <h2 className="text-xl font-bold text-blue-700 mb-4">{project.name}</h2>
          <p className="text-gray-700">{project.description}</p>
          <div className="flex justify-between mt-4">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none">
              Live Link
            </a>
            <a href={project.sourceLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
              View Source
            </a>
          </div>
          <button className="mt-4 px-3 py-1 rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  
  const Projects = () => {
    return (
      <section className=" my-8 rounded-3xl py-8 ">
        <h2 className="text-5xl font-bold text-white text-center font-serif mb-4">MY PROJECTS</h2>
        <div className="sm:flex flex-wrap gap-2 justify-evenly">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    );
  };


export default Projects;