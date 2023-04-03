import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { Head } from "../Helper";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      {user ? (
        <Feed user={user} />
      ) : (
        <>
          <h1 className="title">Error: 404</h1>
          <p>Usuário não encontrada.</p>
        </>
      )}
    </section>
  );
};

export default UserProfile;
