import FiveStarsImg from "/assets/images/illustration-five-stars.webp";
import MultPlatformsImg from "/assets/images/illustration-multiple-platforms.webp";
import ConstScheduleImg from "/assets/images/illustration-consistent-schedule.webp";
import SchedulePostsImg from "/assets/images/illustration-schedule-posts.webp";
import GrowFollowersImg from "/assets/images/illustration-grow-followers.webp";
import AudienceGrowthImg from "/assets/images/illustration-audience-growth.webp";
import CreatePostImg from "/assets/images/illustration-create-post.webp";
import AIContentImg from "/assets/images/illustration-ai-content.webp";

export const BENTOGRIDELEMENTDATA: {
  //? type that will be used in dangerouslySetInnerHTML prop (tags in string will work there)
  h1: string | TrustedHTML;
  img: string;
  p?: string;
}[] = [
  {
    h1: "Social Media <span>10x</span> <i>Faster</i> with AI",
    img: FiveStarsImg,
    p: "Over 4,000 5-star reviews",
  },
  {
    img: MultPlatformsImg,
    h1: "Manage multiple accounts and platforms.",
  },
  {
    h1: "Maintain a consistent posting schedule.",
    img: ConstScheduleImg,
  },
  {
    h1: "Schedule to social media.",
    img: SchedulePostsImg,
    p: "Optimize post timings to publish content at the perfect time for your audience.",
  },
  {
    img: GrowFollowersImg,
    h1: "Grow followers with non-stop content.",
  },
  {
    h1: ">56%",
    p: "faster audience growth",
    img: AudienceGrowthImg,
  },
  {
    h1: "Create and schedule content <span><i>quicker.</i></span>",
    img: CreatePostImg,
  },
  {
    h1: "Write your content using AI.",
    img: AIContentImg,
  },
];
