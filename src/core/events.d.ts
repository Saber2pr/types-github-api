export type Actor = {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};
export type Repo = {
  id: number;
  name: string;
  url: string;
};
export type Org = {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type PayloadPushEvent = {
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: {
    sha: string;
    author: {
      email: string;
      name: string;
    };
    message: string;
    distinct: boolean;
    url: string;
  }[];
};

export type PayloadCreateEvent = {
  ref: string;
  ref_type: string;
  master_branch: string;
  description: string;
  pusher_type: string;
};
export type PayloadIssuesEvent = {
  action: string;
  issue: any;
};
export type PayloadIssueCommentEvent = {
  action: string;
  issue: any;
  comment: any;
};
export type PayloadPullRequestEvent = {
  action: string;
  number: number;
  pull_request: any;
};
export type PayloadPullRequestReviewCommentEvent = {
  action: string;
  comment: any;
  pull_request: any;
};
export type PayloadForkEvent = {
  forkee: any;
};
export type PayloadWatchEvent = {
  action: string;
};

export type Event =
  | {
      id: string;
      type: "PushEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadPushEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "CreateEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadCreateEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "IssuesEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadIssuesEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "IssueCommentEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadIssueCommentEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "PullRequestEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadPullRequestEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "PullRequestReviewCommentEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadPullRequestReviewCommentEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "ForkEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadForkEvent;
      public: boolean;
      created_at: string;
      org: Org;
    }
  | {
      id: string;
      type: "WatchEvent";
      actor: Actor;
      repo: Repo;
      payload: PayloadWatchEvent;
      public: boolean;
      created_at: string;
      org: Org;
    };

export type Events = Event[];

export default Events;
