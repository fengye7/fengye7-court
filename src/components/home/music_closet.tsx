import React, { useState } from 'react';

// 弹出对话框组件
const Dialog = ({ onClose }) => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose({ title: songTitle, artist });
  };

  return (
    <div className="dialog">
      <form onSubmit={handleSubmit}>
        <label>
          歌曲名称：
          <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />
        </label>
        <br />
        <label>
          艺术家：
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </label>
        <br />
        <button type="submit">添加</button>
        <button type="button" onClick={onClose}>取消</button>
      </form>
    </div>
  );
};

// 音乐壁橱组件
const MusicCloset = () => {
  const [songs, setSongs] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addSong = (newSong) => {
    setSongs([...songs, newSong]);
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h2>音乐壁橱</h2>
      <button onClick={() => setIsDialogOpen(true)}>添加音乐</button>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
      {isDialogOpen && <Dialog onClose={addSong} />}
    </div>
  );
};

// 音乐播放器组件
const MusicPlayer = ({ song }) => {
  return (
    <div>
      <h2>音乐播放器</h2>
      <p>正在播放：{song.title} - {song.artist}</p>
      {/* 这里可以添加音乐播放器的相关内容 */}
    </div>
  );
};

// 页面组件
const MusicPage = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div>
      <h1>音乐页面</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 45%' }}>
          <MusicCloset />
        </div>
        <div style={{ flex: '1 1 45%' }}>
          {currentSong ? <MusicPlayer song={currentSong} /> : <p>请选择一首音乐</p>}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
