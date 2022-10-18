import { useEffect, useState } from "react";
import { client, recommendedProfiles } from "../api/api";

export default function Home() {
  const [profiles, setProfiles] = useState(null);

  const fetchProfiles = async () => {
    try {
      const response = await client.query(recommendedProfiles).toPromise();
      console.log({ response });
      setProfiles(response.data.recommendedProfiles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="app">
      <div>
        {profiles?.map((profile, index) => {
          return <div>{profile.id}</div>;
        })}
      </div>
    </div>
  );
}
