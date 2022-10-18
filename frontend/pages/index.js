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
          return (
            <div className="profile_table" key={profile.id}>
              <p>Profile ID: {profile.id}</p>
              <p>Owner by: {profile.ownedBy} </p>
              <p>Bio: {profile.bio}</p>
              <p>Total Followers: {profile.stats.totalFollowers}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
