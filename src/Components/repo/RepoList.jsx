import PropTypes from "prop-types";
import RepoItems from "./RepoItems";
function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl my-4">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItems key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
