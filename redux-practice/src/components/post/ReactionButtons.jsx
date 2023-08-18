import { memo, useCallback } from "react";
import { useIncreaseReactionMutation } from "../../features/post/postSlice";
import { useGetPostsQuery } from "../../features/post/postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ postId }) => {
  const [increaseReaction] = useIncreaseReactionMutation();
  const { postReactions, isLoadingReactions } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data, isLoading }) => ({
      postReactions: data?.entities[postId].reactions,
      isLoadingReactions: isLoading,
    }),
  });

  const handleClick = useCallback(
    (name) => {
      const newValue = postReactions[name] + 1;
      increaseReaction({
        postId: postId,
        reactions: {
          ...postReactions,
          [name]: newValue,
        },
      });
    },
    [postId, postReactions]
  );

  if (isLoadingReactions) {
    return (
      <div className=" text-white text-2xl font-semibold">
        Loading Reactions...
      </div>
    );
  }

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => handleClick(name)}
      >
        {emoji} {postReactions[name]}
      </button>
    );
  });

  return <div className=" flex gap-1">{reactionButtons}</div>;
};

export default memo(ReactionButtons);
