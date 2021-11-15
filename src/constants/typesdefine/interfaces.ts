export interface SocialCardState {
  loading: boolean;
  data: {
    username: string;
    avatar: string;
    location: string;
    bio: string;
    githubUrl: string;
    blog: string;
    email: string;
    following: number;
    followers: number;
  };
}

export interface SocialCardProps {
  username: string;
  dispatch: any;
  error: string;
}

export interface NavbarProps {
  user: any;
  dispatch: any;
}

export interface GithubProfileViewerState {
  username: string;
}

export interface SearchBarState {
  value: string;
}

export interface SearchBarProps {
  onSearchSubmit: (username: string) => void;
}

export interface UserState {
    username: string;
    avatar: string;
    location: string;
    bio: string;
    githubUrl: string;
    blog: string;
    email: string;
    following: number;
    followers: number;
}
