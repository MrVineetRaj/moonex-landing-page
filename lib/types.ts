export type TPost = {
  body: String;
  id: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: String[];
  title: string;
  userId: number;
  views: number;
};
