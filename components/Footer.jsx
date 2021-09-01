import { PrimaryLinkButton } from '../components/buttons';
import { GithubIcon, TwitterIcon, YoutubeIcon } from '../components/icons';

export default function Footer() {

    return <div className="footer">
      <div className="wrapper">
        <div className="feedback">
          <div className="title">Any feedback?</div>
          <div className="content">
            Email me at <PrimaryLinkButton text="coding.bugs@outlook.com" onAction={ () => window.location.href = 'mailto:coding.bugs@outlook.com' } />
          </div>
        </div>
        <div className="social">
          <div className="title">Follow me</div>
          <div className="content">
            <TwitterIcon onAction={ () => window.location.href = 'https://twitter.com/BugsCoding' } />
            <GithubIcon onAction={ () => window.location.href = 'https://github.com/codbugs' } />
            <YoutubeIcon onAction={ () => window.location.href = 'https://www.youtube.com/channel/UCbDKRPg07mN-AuuoslL4agw' } />
          </div>
        </div>
      </div>
    </div>;
  }