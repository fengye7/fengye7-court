const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            博客
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            统计分析
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
