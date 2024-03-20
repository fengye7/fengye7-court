// pages/music-closet.tsx

import Head from 'next/head';

const MusicClosetPage: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Music Closet</title>
        <meta name="description" content="Fengye7's Music Closet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mt-5 mb-4">Music Closet</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Replace with your music items */}
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="Music" />
              <div className="card-body">
                <h5 className="card-title">Music Title</h5>
                <p className="card-text">Music Description</p>
                  <a className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Repeat the above card structure for each music item */}
        </div>
      </main>

      <footer className="mt-5">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
};

export default MusicClosetPage;
