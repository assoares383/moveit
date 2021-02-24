import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile/index';

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <section>
        <div >
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}
