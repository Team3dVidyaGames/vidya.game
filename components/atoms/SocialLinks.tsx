import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faReddit, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => {
  return (
    <div id="social-media-links" className="sm:w-[23em] w-full text-white sm:space-x-6 space-x-4">
    <a href="https://www.youtube.com/channel/UCoZiBsHIAm_EGQbTGpSrcLA" target='_blank'
      className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faYoutube} />
    </a>
    <a href="https://www.discord.gg/team3d" target='_blank' className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faDiscord} />
    </a>
    <a href="https://www.reddit.com/r/VIDYAbyTeam3D/" target='_blank' className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faReddit} />
    </a>
    <a href="http://t.me/Team3D_Official" target='_blank' className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faTelegram} />
    </a>
    <a href="https://twitter.com/Team3D_Official" target='_blank' className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faTwitter} />
    </a>
    <a href="http://instagram.com/vidya.games_official/" target='_blank'
      className="text-white hover:text-indigo-700">
      <FontAwesomeIcon size="lg" icon={faInstagram} />
    </a>
  </div>
  )
}