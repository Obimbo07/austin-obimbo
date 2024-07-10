import React from 'react';

const articles = [
  {
    id: 0,
    name: 'Impact of AI on Programmers: Navigating Standard Shifts',
    description:
      'As a human being, one has been endowed with just enough intelligence to be able to see clearly',
    image: 'technology.jpg',
    link: 'https://medium.com/@obimboausts/impact-of-ai-on-programmers-navigating-standard-shifts-0e61830570cd',
  },
  {
    id: 1,
    name: 'Guiding the Next Generation: A Mentor’s Thoughts!!',
    description:
      'Mentoring juniors and non-techies into the world of software development is a journey fraught with challenges and rewards.',
    image: 'gas.png',
    link: 'https://medium.com/@obimboausts/guiding-the-next-generation-a-mentorsthoughts-2d6a9bdf11a6',
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-bold text-center text-white text-3xl p-4 outline mb-4 md:w-full">Blogs</h2>
      <div className="flex flex-wrap gap-32 justify-center">
        {articles.map((article) => (
          <article key={article.id} className="bg-neutral-900 text-white shadow-md rounded-lg overflow-hidden md:w-1/3">
            <img src={article.image} alt={article.name} className="w-full h-48 object-cover" />
            <div className="px-6 py-4">
              <h3 className='text-blue-700'>{article.name}</h3>
              <p className="text-white">{article.description}</p>
              <a href={article.link} className="text-center text-blue-500 hover:text-blue-700">
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
