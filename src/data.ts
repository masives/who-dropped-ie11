export interface Entry {
  name: string;
  article: string;
  logo: string;
}

const entries: Entry[] = [
  {
    name: 'Youtube',
    article: 'https://support.google.com/youtube/answer/175292?hl=en',
    logo: 'logos/youtube.png',
  },
  {
    name: 'Github',
    article: 'https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/supported-browsers',
    logo: 'logos/github.png',
  },
  {
    name: 'Meetup',
    article: 'https://help.meetup.com/hc/en-us/articles/360002965711-What-browsers-does-Meetup-support-',
    logo: 'logos/meetup.svg',
  },
  {
    name: 'Slack',
    article: 'https://slack.com/intl/en-ch/help/articles/115002037526-Minimum-requirements-for-using-Slack',
    logo: 'logos/slack.png',
  },
  {
    name: 'Zendesk',
    article: 'https://support.zendesk.com/hc/en-us/articles/360002084367-Removal-of-support-for-Internet-Explorer-11',
    logo: 'logos/zendesk.svg',
  },
  {
    name: 'Trello',
    article: 'https://help.trello.com/article/735-what-browsers-and-mobile-platforms-does-trello-support',
    logo: 'logos/trello.svg',
  },
  {
    name: 'Atlassian',
    article:
      'https://community.atlassian.com/t5/Feedback-Forum-articles/Retiring-IE11-support-for-Atlassian-cloud-server-and-data-center/ba-p/1185312',
    logo: 'logos/atlassian.png',
  },
  {
    name: 'Discord',
    article: 'https://support.discord.com/hc/en-us/articles/213491697-What-are-the-OS-system-requirements-for-Discord-',
    logo: 'logos/discord.png',
  },
  {
    name: 'Spotify',
    article: 'https://support.spotify.com/us/article/webplayer/',
    logo: 'logos/spotify.png',
  },
  {
    name: 'Behance',
    article: 'https://help.behance.net/hc/en-us/articles/204484564-What-browsers-are-supported-',
    logo: 'logos/behance.png',
  },
  {
    name: 'Wix',
    article: 'https://support.wix.com/en/article/wix-compatibility-with-internet-explorer',
    logo: 'logos/wix.png',
  },
  {
    name: 'Huddle',
    article: 'https://huddle.zendesk.com/hc/en-us/articles/200126783-Which-browser-and-OS-does-Huddle-support-',
    logo: 'logos/huddle.jpeg',
  },
  {
    name: 'Yahoo',
    article: 'https://help.yahoo.com/kb/SLN4556.html',
    logo: 'logos/yahoo.png',
  },
  {
    name: 'Microsoft Teams',
    article: 'https://docs.microsoft.com/en-us/microsoftteams/limits-specifications-teams#browsers',
    logo: 'logos/microsoft-teams.svg',
  },
  {
    name: 'Twitter',
    article: 'https://help.twitter.com/en/using-twitter/twitter-supported-browsers',
    logo: 'logos/twitter.svg',
  },
];

export default entries;
