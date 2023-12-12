import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "./firebase";

const RelatedVideos = ({ project }) => {
  // You can add your component logic here if needed
};

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "project"), (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when the component unmounts
  }, []);

  const playVideo = (videoId) => {
    console.log('Playing video:', videoId);
    // TODO: Implement the logic to play the video
  };

  const playVideoOnYouTube = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
  };

  return (
    <div className='related-videos'>
      <h2>Related Videos</h2>
      <ul>
        {projects.map((video) => (
          <li key={video.id} className="video-item">
            <div className="video-thumbnail">
              <div className="circle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
              </div>
            </div>
            <div className='video-info'>
              <img src={video.img} alt="Video Thumbnail" style={{ width: '400px', height: '400px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ marginLeft: '20px' }}>
                <span style={{ color: 'green', fontSize: '20px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </span>
                <p>{video.desc}</p>
                <span>{video.time}</span>
                <span>{video.times}</span>
              </div>
              <div className="buttons">
                <button onClick={() => playVideo(video.id)}>Play</button>
                <button onClick={() => playVideoOnYouTube(video.id)}>Play on YouTube</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}